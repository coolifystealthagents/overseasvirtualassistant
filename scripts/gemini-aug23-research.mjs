import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const key = process.env.GEMINI_API_KEY;
const entries = JSON.parse(fs.readFileSync(path.join(root, '.paperclip/daily-content/2026-08-23/research.json'), 'utf8')).entries;
if (!key) throw new Error('GEMINI_API_KEY is unavailable');
fs.mkdirSync(path.join(root, 'public/images/research-aug23'), { recursive: true });
for (const entry of entries) {
  const receiptPath = path.join(root, '.paperclip/daily-content/2026-08-23/prompts', `${entry.slug}.json`);
  const receipt = JSON.parse(fs.readFileSync(receiptPath, 'utf8'));
  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image:generateContent?key=${key}`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ contents: [{ parts: [{ text: receipt.prompt }] }], generationConfig: { responseModalities: ['TEXT', 'IMAGE'] } }) });
  const json = await response.json();
  const part = json.candidates?.[0]?.content?.parts?.find((candidate) => candidate.inlineData);
  if (!part) throw new Error(`${entry.slug}: ${JSON.stringify(json).slice(0, 500)}`);
  fs.writeFileSync(path.join(root, entry.imagePath), Buffer.from(part.inlineData.data, 'base64'));
  receipt.imagePath = entry.imagePath;
  receipt.generatedAt = new Date().toISOString();
  fs.writeFileSync(receiptPath, `${JSON.stringify(receipt, null, 2)}\n`);
  console.log(`generated ${entry.slug}`);
}
