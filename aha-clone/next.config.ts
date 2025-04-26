import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image-resizer-cloud-api.akamaized.net',
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: { and: [/\.[jt]sx?$/] }, // small upgrade (official Next.js suggestion)
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

export default nextConfig;
