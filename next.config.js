/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    APP_ENV: process.env.APP_ENV,
    GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,

    API_URI: process.env.API_URI,
    SECRET_TOKEN: process.env.SECRET_TOKEN,
  },
};

module.exports = nextConfig;
