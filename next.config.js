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
      NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
      STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
      NEXTAUTH_URL : process.env.NEXTAUTH_URL
  },
}

module.exports = nextConfig
