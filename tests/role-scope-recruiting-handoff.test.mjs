import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';

const source = fs.readFileSync('app/research-content.ts', 'utf8');
const slug = 'role-scope-evidence-for-virtual-assistant-hiring';
const start = source.indexOf(`slug: '${slug}'`);
const end = source.indexOf("\n  },\n  {", start);
const record = source.slice(start, end);

test('role-scope research has a typed recruiting-coordination handoff', () => {
  assert.notEqual(start, -1, 'target research record is present');
  assert.match(record, /updated: '2026-11-02'/);
  assert.match(record, /href: '\/services\/recruiting-coordination'/);
  assert.match(record, /label: 'Plan recruiting coordination'/);
  assert.match(record, /candidate records, and interview handoffs/);
  assert.match(record, /screening standards, candidate choice, offers, and every employment decision/);
  assert.match(source, /updated: spec\.updated/);
  assert.match(source, /: spec\.serviceHandoff,/);
});
