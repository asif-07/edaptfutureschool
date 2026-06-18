/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Serve modern, smaller image formats automatically (next/image).
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },
  // Drop console.* in production bundles (keep warnings/errors).
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error", "warn"] } : false,
  },
};

export default nextConfig;
