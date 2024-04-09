// middleware.ts or middleware.js
import { NextResponse } from 'next/server';

export function middleware(request:any) {
  const { pathname } = request.nextUrl;

  // Check if the URL matches the pattern for a rewrite
  if (pathname.startsWith('/recipes/')) {
    // Construct the destination URL
    const destinationUrl = `http://localhost:8000/recipes/2`;
    // Rewrite the request to the destination URL
    console.log(request.headers)
    return NextResponse.rewrite(destinationUrl);
  }

  // For all other paths, do not apply any rewrites
  return NextResponse.next();
}

export const config = {
  // Optionally, specify which paths this middleware applies to
  matcher: '/recipes/:path*',
};