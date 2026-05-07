import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  optimizeFonts: true,
  poweredByHeader: false,
  images: {
    unoptimized: process.env.NODE_ENV === "production" ? false : true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "api.qrserver.com",
        pathname: "/v1/create-qr-code/**",
      },
    ],
  },
  onDemandEntries: {
    maxInactiveAge: 60 * 60 * 1000,
    pagesBufferLength: 5,
  },
};

export default nextConfig;

// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   reactCompiler: true,
//   reactStrictMode: true,
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "images.pexels.com",
//         pathname: "/**",
//       },
//       {
//         protocol: "https",
//         hostname: "api.qrserver.com",
//         pathname: "/v1/create-qr-code/**",
//       },
//     ],
//   },
// };

// export default nextConfig;
