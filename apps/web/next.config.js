/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ["@repo/ui"],
  async rewrites() {
    return [
      {
        source: '/recipes/:path*',
        destination: 'https://gatsby.tc-vercel.dev/recipes/:path*',
      },
    ]
  },
};
