/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
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
      GOOGLE_ANALYTICS: process.env.GOOGLE_ANALYTICS,
      JWT_SECRET: process.env.JWT_SECRET,
  },
}

module.exports = nextConfig
