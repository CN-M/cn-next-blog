/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    additonalData: `@import "./globals.scss";`
  }
}

module.exports = nextConfig
