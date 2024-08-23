/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    // 试验性功能：部分预渲染
    ppr: 'incremental',
  },
};

export default nextConfig;
