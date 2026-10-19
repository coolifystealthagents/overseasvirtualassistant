import test from 'node:test';
import assert from 'node:assert/strict';
import http from 'node:http';
import { spawn } from 'node:child_process';

const appPort = 43129;
const upstreamPort = 43130;
const appBase = `http://127.0.0.1:${appPort}`;
const upstreamBase = `http://127.0.0.1:${upstreamPort}`;
let app;
let upstream;
let upstreamCalls = [];

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
async function waitFor(url, attempts = 80) {
  for (let i = 0; i < attempts; i += 1) {
    try { const response = await fetch(url); if (response.ok) return; } catch {}
    await delay(250);
  }
  throw new Error(`Timed out waiting for ${url}`);
}

function fields(email = 'accepted@example.com') {
  return new URLSearchParams({
    firstName: 'Ada', lastName: 'Lovelace', email, phone: '+1 555 222 1212',
    website: 'https://example.com', companyName: 'Example Co', positions: '2',
    industry: 'Technology', referral: 'Search engine', referralSpecify: '',
    message: 'Need support', website_url: '',
  });
}

async function submit(body, headers = {}) {
  return fetch(`${appBase}/api/contact`, {
    method: 'POST',
    headers: {
      origin: appBase,
      host: `127.0.0.1:${appPort}`,
      'sec-fetch-site': 'same-origin',
      'content-type': 'application/x-www-form-urlencoded',
      'x-real-ip': `198.51.100.${Math.floor(Math.random() * 180) + 20}`,
      ...headers,
    },
    body,
  });
}

test.before(async () => {
  upstream = http.createServer(async (request, response) => {
    let raw = '';
    for await (const chunk of request) raw += chunk;
    const payload = JSON.parse(raw || '{}');
    upstreamCalls.push({ headers: request.headers, payload });
    response.setHeader('content-type', 'application/json');
    if (payload.email.startsWith('upstream-error')) {
      response.statusCode = 503;
      response.end(JSON.stringify({ ok: false }));
    } else if (payload.email.startsWith('false-success')) {
      response.statusCode = 200;
      response.end(JSON.stringify({ ok: false }));
    } else if (payload.email.startsWith('malformed-success')) {
      response.statusCode = 200;
      response.end('{not-json');
    } else {
      response.statusCode = 200;
      response.end(JSON.stringify({ ok: true }));
    }
  });
  await new Promise((resolve) => upstream.listen(upstreamPort, '127.0.0.1', resolve));
  app = spawn(process.execPath, ['node_modules/next/dist/bin/next', 'start', '-H', '127.0.0.1', '-p', String(appPort)], {
    cwd: new URL('..', import.meta.url),
    env: { ...process.env, LEAD_AUTH_TOKEN: 'integration-secret', LEAD_INGEST_URL: `${upstreamBase}/leads`, MATTERMOST_WEBHOOK_URL: '' },
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  let stderr = '';
  app.stderr.on('data', (chunk) => { stderr += chunk; });
  try { await waitFor(appBase); } catch (error) { throw new Error(`${error.message}\n${stderr}`); }
});

test.after(async () => {
  if (app && !app.killed) app.kill('SIGTERM');
  if (upstream) await new Promise((resolve) => upstream.close(resolve));
});

test('accepts only explicit upstream success and returns the conversion redirect', async () => {
  const response = await submit(fields('accepted@example.com'));
  assert.equal(response.status, 202);
  assert.deepEqual(await response.json(), { accepted: true, redirect: '/thank-you' });
  const call = upstreamCalls.at(-1);
  assert.equal(call.headers['x-lead-token'], 'integration-secret');
  assert.equal(call.payload.email, 'accepted@example.com');
  assert.equal(new URL(call.payload.attribution.source_page).pathname, '/contact-us');
});

test('rejects a 200 response whose payload does not explicitly accept the lead', async () => {
  const response = await submit(fields('false-success@example.com'));
  assert.equal(response.status, 502);
  assert.equal((await response.json()).accepted, false);
});

test('rejects malformed success payloads and upstream errors', async () => {
  const malformed = await submit(fields('malformed-success@example.com'));
  assert.equal(malformed.status, 502);
  const failed = await submit(fields('upstream-error@example.com'));
  assert.equal(failed.status, 502);
});

test('rejects cross-origin requests before contacting the backend', async () => {
  const before = upstreamCalls.length;
  const response = await submit(fields('origin@example.com'), { origin: 'https://attacker.example', 'sec-fetch-site': 'cross-site' });
  assert.equal(response.status, 403);
  assert.equal(upstreamCalls.length, before);
});

test('rejects invalid fields and honeypot submissions before contacting the backend', async () => {
  let before = upstreamCalls.length;
  const invalid = fields('not-an-email');
  const invalidResponse = await submit(invalid);
  assert.equal(invalidResponse.status, 422);
  assert.equal(upstreamCalls.length, before);
  before = upstreamCalls.length;
  const spam = fields('spam@example.com');
  spam.set('website_url', 'https://spam.example');
  const spamResponse = await submit(spam);
  assert.equal(spamResponse.status, 400);
  assert.equal(upstreamCalls.length, before);
});

test('rate limits repeated email submissions', async () => {
  const email = 'rate-limit@example.com';
  for (let i = 0; i < 3; i += 1) assert.equal((await submit(fields(email))).status, 202);
  const limited = await submit(fields(email));
  assert.equal(limited.status, 429);
});
