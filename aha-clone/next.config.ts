import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image-resizer-cloud-api.akamaized.net",
      },
    ],
  },
};

export default nextConfig;
