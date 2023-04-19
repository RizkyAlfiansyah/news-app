/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.kinja-img.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*', // Proxy to Backend
        destination: 'https://newsapi.org/v2/:path*', // Proxy to Backend
      },
    ];
  },
};

module.exports = nextConfig;
