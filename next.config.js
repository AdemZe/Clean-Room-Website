/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com' ,'api.uifaces.co','randomuser.me'], // Ajoutez le domaine ici
  },
};

module.exports = nextConfig;
