/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://i.kinja-img.com',
        port: '',
        pathname: '/img/**',
      },
    ],
  },
};

module.exports = {
  ...nextConfig,
  async rewrites() {
    return [
      {
        source: '/api',
        destination: 'https://newsapi.org/v2/',
      },
    ];
  },
};
