/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@stem-lab/shared'],
  experimental: {
    typedRoutes: true,
  },
}

module.exports = nextConfig

// Made with Bob
