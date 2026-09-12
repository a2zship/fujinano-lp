/*
  Prepend basePath cho ảnh trong /public khi build static export (GitHub Pages
  chạy dưới /fujinano-lp). Trên dev/bản server basePath rỗng -> giữ nguyên.
  Chỉ dùng cho <img src> thường; next/link & metadata đã tự xử lý basePath.
*/
const BASE = process.env.NEXT_PUBLIC_BASE_PATH || '';

export function asset(path?: string): string | undefined {
  if (!path) return path;
  if (/^https?:\/\//.test(path)) return path; // URL tuyệt đối -> giữ nguyên
  return BASE + path;
}
