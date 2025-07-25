/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['ik.imagekit.io'],
  },
  transpilePackages: ['scheduler'],
}

module.exports = nextConfig