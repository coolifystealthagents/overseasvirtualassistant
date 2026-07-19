export function GET() { return new Response(`User-agent: *
Allow: /
Sitemap: https://overseasvirtualassistant.com/sitemap.xml
`, { headers: { 'content-type': 'text/plain' } }); }