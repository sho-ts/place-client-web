/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: false
  },
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['page.tsx'],
  images: {
    domains: [
      'images.unsplash.com',
      process.env.NEXT_PUBLIC_S3_BUCKET
    ],
  },
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 5000,
      aggregateTimeout: 300,
    }

    return config
  },
}

module.exports = nextConfig
