/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  basePath: '/social-feed-ui-demo',
  images: { unoptimized: true },
}

module.exports = nextConfig
