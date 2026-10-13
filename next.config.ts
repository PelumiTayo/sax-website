import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow YouTube video thumbnails to be used as posters.
    remotePatterns: [new URL("https://img.youtube.com/vi/**")],
  },
};

export default nextConfig;
