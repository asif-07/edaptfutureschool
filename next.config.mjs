/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Allow remote map/image placeholders if you swap to real <Image> sources later.
  images: {
    remotePatterns: [],
  },
};

export default nextConfig;
