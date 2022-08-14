/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['page.tsx'],
  images: {
    domains: [
      'images.unsplash.com',
      process.env.NEXT_PUBLIC_S3_BUCKET
    ],
  },
}

module.exports = nextConfig
