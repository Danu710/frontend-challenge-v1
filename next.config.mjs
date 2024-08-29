/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'res.cloudinary.com',
      'media.dev.to',
      'cdn.dummyjson.com',
      'images.unsplash.com',
    ],
  },
};

export default nextConfig;
