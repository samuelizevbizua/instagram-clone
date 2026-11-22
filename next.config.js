/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  basePath: '/instagram-clone',
  images: { unoptimized: true },
}

module.exports = nextConfig
