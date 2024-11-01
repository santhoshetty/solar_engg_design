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
  },
  async redirects() {
    return [
      // Add any required redirects here
    ]
  },
};

export default nextConfig;
