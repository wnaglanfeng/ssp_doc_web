/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['cdn.yesapi.fastobe.com', 'ai-public.mastergo.com', 'mastergo.com'],
  },
  webpack: (config, { isServer }) => {
    // 添加对 .md 文件的处理
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    
    return config;
  },
}

module.exports = nextConfig