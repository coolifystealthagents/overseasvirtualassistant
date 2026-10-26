import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';

const source = fs.readFileSync('app/october-25-research.ts', 'utf8');
const slug = 'overseasvirtualassistant-measuring-response-time-for-calendar-control';
const start = source.indexOf(`"slug": "${slug}"`);
const end = source.indexOf('\n  },\n  {', start);
const record = source.slice(start, end);

test('calendar-control research keeps a precise calendar-and-inbox handoff', () => {
  assert.notEqual(start, -1, 'target research record is present');
  assert.match(record, /"updated": "2026-10-26"/);
  assert.match(record, /"href": "\/services\/calendar-and-inbox-management"/);
  assert.match(record, /"label": "Set up calendar and inbox support"/);
  assert.match(record, /The owner keeps priority, schedule-change, travel, and exception decisions\./);
  assert.match(record, /"internalLinks": \[\s*"\/services\/calendar-and-inbox-management",\s*"\/contact"\s*\]/);
  assert.doesNotMatch(record, /"href": "\/services"/);
});
