import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@ode/tokens'],
  images: {
    qualities: [75, 90],
  },
};

export default nextConfig;
