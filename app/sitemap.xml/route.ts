import { blogPosts } from '../data';

export function GET() {
  const base='https://overseasvirtualassistant.com';
  const staticPaths = ['', '/blog', '/contact', '/privacy', '/terms'];
  const urls=[...staticPaths, ...blogPosts.map(p=>'/blog/'+p.slug)]
    .map(p=>`<url><loc>${base}${p}</loc><lastmod>2026-07-19</lastmod></url>`)
    .join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, { headers: { 'content-type': 'application/xml' } });
}
