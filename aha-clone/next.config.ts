import type { NextConfig } from "next";

const nextConfig: NextConfig = {
<<<<<<< HEAD
  reactStrictMode: false, // 🔥 Disable Strict Mode in dev
=======
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image-resizer-cloud-api.akamaized.net",
      },
    ],
  },
>>>>>>> 4b6a4f70a486013a11dc879771ff7695938a60b0
};

export default nextConfig;
