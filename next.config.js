/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/vet-admin",
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

module.exports = nextConfig;
