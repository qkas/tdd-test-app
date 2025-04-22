import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: '/tdd-test-app',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
