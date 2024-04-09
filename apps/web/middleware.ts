// middleware.ts or middleware.js
import { NextResponse } from 'next/server';

export function middleware(request: any) {
  const { pathname } = request.nextUrl;

  // Check if the URL matches the pattern for a rewrite
  if (pathname.startsWith('/recipes/')) {
    console.log('first', '2901901320130290')
    // Rewrite the request to the destination URL
    // const destUrl = new URL(`http://localhost:9000/${pathname.replace(`/test`, `recipes`)}`);
    const destUrl = new URL(`gatsby.tc-vercel.dev:${pathname}/`);
    console.log('destUrl', destUrl)
    return NextResponse.rewrite(destUrl);
  }

  // For all other paths, do not apply any rewrites
  return NextResponse.next();
}

export const config = {
  // Optionally, specify which paths this middleware applies to
  matcher: '/recipes/:path*',
};