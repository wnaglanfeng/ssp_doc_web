/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.yesapi.fastobe.com', 'ai-public.mastergo.com', 'mastergo.com'],
    unoptimized: true,
  },
  webpack: (config, { dev }) => {
    // 只在开发模式配置 watchOptions
    if (dev) {
      config.watchOptions = {
        ignored: [
          '**/System Volume Information/**',
          '**/node_modules/**',
          '**/.git/**',
          '**/.next/**',
        ],
      };
    }
    return config;
  },

}

module.exports = nextConfig