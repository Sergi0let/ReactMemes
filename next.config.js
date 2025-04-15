/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn.memes.com",
      },
    ],
  },
};

module.exports = nextConfig;
