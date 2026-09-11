/** @type {import('next').NextConfig} */

// Bản GitHub Pages (xem mẫu tĩnh): bật STATIC_EXPORT=1.
// Bản đầy đủ (server + API): để trống -> chạy như thường.
const isStaticExport = process.env.STATIC_EXPORT === '1';
const basePath = process.env.PAGES_BASE_PATH || '';

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    // Static export không có image optimizer -> phải tắt.
    unoptimized: isStaticExport,
  },
  ...(isStaticExport
    ? {
        output: 'export',
        basePath: basePath || undefined,
        assetPrefix: basePath || undefined,
        trailingSlash: true,
      }
    : {}),
};

export default nextConfig;
