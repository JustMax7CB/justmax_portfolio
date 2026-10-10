import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static output — deploys anywhere, and Vercel serves it from the edge.
  output: "export",
  trailingSlash: false,
  images: { unoptimized: true },
};

export default nextConfig;
