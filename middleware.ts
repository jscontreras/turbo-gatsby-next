// config with custom matcher
export const config = {
  matcher: '/recipe/:path*',
};

export default function middleware(request: Request) {
  console.log('request.url', request.url);
  // return Response.redirect(new URL('/about-2', request.url));
}