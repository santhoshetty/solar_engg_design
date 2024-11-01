/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
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
    domains: ['your-supabase-domain.supabase.co'],
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
  experimental: {
    // Add any experimental features you need
  }
};

export default nextConfig;
