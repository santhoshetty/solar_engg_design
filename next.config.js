const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'xiafttjgrzpgaidayege.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/public-assets/**',
      },
    ],
    unoptimized: true,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@/components': path.join(__dirname, 'components'),
      '@/lib': path.join(__dirname, 'lib'),
      '@/app': path.join(__dirname, 'app'),
    };
    return config;
  },
};

module.exports = nextConfig; 