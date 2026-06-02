import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/devtoolshub",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
