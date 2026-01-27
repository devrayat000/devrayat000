import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  // Set the base path to your repository name, including a leading slash
  basePath: "/devrayat000",
  assetPrefix: "/devrayat000/", // Ensures assets like images/CSS load correctly
};

export default nextConfig;
