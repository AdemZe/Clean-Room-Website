/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['images.unsplash.com' ,'api.uifaces.co','randomuser.me','cdn.builder.io'], // Ajoutez le domaine ici
    unoptimized: true,
  },
};

module.exports = nextConfig;

