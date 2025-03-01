import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/services/hair/hair-salon/blow-dry",
        destination: "/blow-dry",
        permanent: true,
      },
      {
        source: "/services/hair/hair-salon/hair-color",
        destination: "/services/hair/hair-cut",
        permanent: true,
      },
      {
        source: "/services/hair/hair-salon/hair-cut",
        destination: "/services/hair/hair-color",
        permanent: true,
      },
      {
        source: "/services/hair/hair-salon",
        destination: "/services/hair",
        permanent: true,
      },
      {
        source: "/services/hair/hair-salon/hair-styling",
        destination: "/services/hair/hair-styling",
        permanent: true,
      },
      {
        source: "/services/hair/hair-salon/hair-treatment",
        destination: "/services/hair/hair-treatment",
        permanent: true,
      },
      {
        source: "/services/hair/hair-salon/hair-botox-treatment",
        destination: "/hair-botox-treatment",
        permanent: true,
      },
      {
        source: "/services/hair/hair-salon/keratin-hair-treatment",
        destination: "/keratin-hair-treatment",
        permanent: true,
      },
      {
        source: "/nail-polish-removal",
        destination: "/gel-polish-removal",
        permanent: true,
      },
    ];
  },
  compress: true,
  images: {
    domains: ["46.202.163.63", "62.72.56.24", "noora.ae", "nooora.ae"],
    formats: ["image/avif", "image/webp"],
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  experimental: {
    optimizeCss: true, // Ensures critical CSS inlining
    cssChunking: "strict", // Ensures critical CSS inlining
    useEarlyImport: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm)$/i,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next/static/videos/",
          outputPath: "static/videos/",
          name: "[name].[hash].[ext]",
        },
      },
    });
    return config;
  },
};

export default nextConfig;
