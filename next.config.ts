import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  // Set the base path to your repository name, including a leading slash
  basePath: process.env.NODE_ENV === "production" ? "/devrayat000" : undefined,
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/devrayat000" : undefined, // Ensures assets like images/CSS load correctly
};

export default nextConfig;
