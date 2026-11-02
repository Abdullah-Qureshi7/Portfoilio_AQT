/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep images simple for Vercel + future Hostinger Node hosting
  images: {
    unoptimized: true,
  },
  // Hide the Next.js "N" dev indicator in the corner
  devIndicators: false,
  // Avoid Next 15 server-react minify bug during prerender
  experimental: {
    optimizeServerReact: false,
  },
};

export default nextConfig;
