/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    API_URI: process.env.API_URI,
    SECRET_TOKEN: process.env.SECRET_TOKEN,
  },
};

module.exports = nextConfig;
