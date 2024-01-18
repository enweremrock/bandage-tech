const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
      },
      {
        port: "",
        protocol: "https",
        hostname: "cdn.dummyjson.com",
      },
    ],
  },
};

module.exports = withBundleAnalyzer(nextConfig);
