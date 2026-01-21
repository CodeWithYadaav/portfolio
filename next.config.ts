import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Skip ESLint during production builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Skip TypeScript checks during production builds (optional)
    ignoreBuildErrors: false,
  },
  images: {
    domains: [],
  },
};

export default nextConfig;

