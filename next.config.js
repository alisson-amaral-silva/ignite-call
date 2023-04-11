/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // serve para identificar apenas as paginas da aplicacao
  // o next interpreta td dentro de pages como paginas, por isso precisa dessa config
  pageExtensions: ['page.tsx', 'api.ts', 'api.tsx'],
  images: {
    domains: ['https://lh3.googleusercontent.com/'],
  },
}

module.exports = nextConfig
