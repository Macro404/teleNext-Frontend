/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental:{appDir: true},
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  mode: 'universal',
  env: {
      API_BASE_URL: process.env.API_BASE_URL,
      STRIPE_API_KEY: process.env.STRIPE_API_KEY,
      GOOGLE_ANALYTICS: process.env.GOOGLE_ANALYTICS
  },
}

module.exports = nextConfig
