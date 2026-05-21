import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  devIndicators: false,
  output: "export",
  basePath: isProd ? "/UWB-550" : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? "/UWB-550" : "",
  },
  images: isProd
    ? { loader: "custom", loaderFile: "./src/lib/imageLoader.ts" }
    : { unoptimized: true },
};

export default nextConfig;
