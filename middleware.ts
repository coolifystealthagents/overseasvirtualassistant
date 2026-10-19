import { NextRequest, NextResponse } from 'next/server';

const canonicalHost = 'overseasvirtualassistant.com';

function visitorScheme(request: NextRequest) {
  const cloudflare = request.headers.get('cf-visitor');
  if (cloudflare) {
    try {
      const parsed = JSON.parse(cloudflare) as { scheme?: string };
      if (parsed.scheme) return parsed.scheme.toLowerCase();
    } catch {}
  }
  return (request.headers.get('x-forwarded-proto') || request.nextUrl.protocol.replace(':', ''))
    .split(',')[0]
    .trim()
    .toLowerCase();
}

export function middleware(request: NextRequest) {
  const host = (request.headers.get('x-forwarded-host') || request.headers.get('host') || request.nextUrl.host)
    .split(',')[0]
    .trim()
    .toLowerCase()
    .replace(/:\d+$/, '');
  if (host === canonicalHost && visitorScheme(request) === 'https') return NextResponse.next();
  if (host !== canonicalHost && host !== `www.${canonicalHost}`) return NextResponse.next();

  const destination = request.nextUrl.clone();
  destination.protocol = 'https:';
  destination.hostname = canonicalHost;
  destination.port = '';
  return NextResponse.redirect(destination, 308);
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
