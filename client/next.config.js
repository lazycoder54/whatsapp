/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    NEXT_PUBLIC_ZEGO_APP_ID: 1323769945,
    NEXT_PUBLIC_ZEGO_SERVER_ID: "6e698eb7f80574a80bda7095dcb677bf",
  },
  images: {
    domains: ["localhost"],
  },
};

module.exports = nextConfig;
