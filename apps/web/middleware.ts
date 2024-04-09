// middleware.ts or middleware.js
import { NextResponse } from 'next/server';

export function middleware(request: any) {
  const { pathname } = request.nextUrl;

  // Check if the URL matches the pattern for a rewrite
  if (pathname.startsWith('/recipes/')) {
    // Rewrite the request to the destination URL
    const destUrl = new URL(`https://gatsby.tc-vercel.dev:${pathname}`);
    return NextResponse.rewrite(destUrl);
  }
  // Check if the URL matches the pattern for a rewrite
  else if (pathname.startsWith('/blog')) {
    // Rewrite the request to the destination URL
    const destUrl = new URL(`https://www.contentful.com/blog/`);
    return NextResponse.rewrite(destUrl);
  }

  // For all other paths, do not apply any rewrites
  return NextResponse.next();
}

export const config = {
  // Optionally, specify which paths this middleware applies to
  matcher: ['/recipes/:path*', '/blog'],
};