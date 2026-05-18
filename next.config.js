/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',              // ← remplace "npx next export"
  basePath: '/portfolio-nextgen',
  assetPrefix: '/portfolio-nextgen/',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
