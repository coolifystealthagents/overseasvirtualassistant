import fs from 'node:fs';
import path from 'node:path';
import type { Metadata } from 'next';
import { CTA, Footer, Header, JsonLd } from './components';
import meta from './september3-blog-meta.json';

const site = 'https://overseasvirtualassistant.com';
type Item = { title: string; description: string };
const item = (slug: string) => (meta as Record<string, Item>)[slug];
const source = (slug: string) => fs.readFileSync(path.join(process.cwd(), 'content', 'blog', `september3-${slug}.md`), 'utf8')
  .replace(/^#[^\n]+\n+/, '').replace(/^\*September 3, 2026\*\s*/, '');
const blocks = (text: string) => text.split(/\n\n+/).filter(Boolean).map((part, index) => part.startsWith('## ')
  ? <h2 key={index}>{part.slice(3)}</h2>
  : <p key={index}>{part}</p>);

export function september3Metadata(slug: string): Metadata {
  const record = item(slug);
  return { title: record.title, description: record.description, alternates: { canonical: `${site}/blog/${slug}` }, openGraph: { title: record.title, description: record.description, url: `${site}/blog/${slug}`, type: 'article', publishedTime: '2026-09-03' } };
}

export function September3BlogArticle({ slug }: { slug: string }) {
  const record = item(slug);
  return <><Header/><main className="section"><JsonLd data={{ '@context': 'https://schema.org', '@type': 'Article', headline: record.title, description: record.description, datePublished: '2026-09-03', dateModified: '2026-09-03', mainEntityOfPage: `${site}/blog/${slug}` }}/><article className="container article"><p className="eyebrow">Philippines staffing guide</p><h1>{record.title}</h1><p className="lead">{record.description}</p><div className="meta-row"><span>10 min read</span><span>Published <time dateTime="2026-09-03">September 3, 2026</time></span></div>{blocks(source(slug))}</article><CTA/></main><Footer/></>;
}
