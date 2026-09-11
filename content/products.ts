import type { ProductCard } from '@/types';

/* ==========================================================================
   FUJINANO — Danh mục mã sản phẩm (mục 1)
   CHỈ dùng các mã đã xuất hiện trong tài liệu kinh doanh. KHÔNG tự bịa thông
   số kỹ thuật, quy cách, giá. Trường chưa xác nhận -> placeholder rõ ràng.
   Khi có TDS thật, điền usage/surfaces/packaging/tdsUrl.
   ========================================================================== */

export const products: Record<string, ProductCard> = {
  'CT-502': {
    name: 'Fujinano CT-502',
    code: 'CT-502',
    usage: 'Nhóm sản phẩm chống thấm.',
    surfaces: ['[CẦN XÁC NHẬN THÔNG SỐ]'],
    packaging: '[CẦN XÁC NHẬN QUY CÁCH]',
    cta: 'Nhận tư vấn kỹ thuật',
  },
  'FJ-108N': {
    name: 'Fujinano FJ-108N',
    code: 'FJ-108N',
    usage: '[CẦN XÁC NHẬN MỤC ĐÍCH SỬ DỤNG]',
    surfaces: ['[CẦN XÁC NHẬN THÔNG SỐ]'],
    packaging: '[CẦN XÁC NHẬN QUY CÁCH]',
    cta: 'Nhận tư vấn kỹ thuật',
  },
  'FJ-118M': {
    name: 'Fujinano FJ-118M',
    code: 'FJ-118M',
    usage: '[CẦN XÁC NHẬN MỤC ĐÍCH SỬ DỤNG]',
    surfaces: ['[CẦN XÁC NHẬN THÔNG SỐ]'],
    packaging: '[CẦN XÁC NHẬN QUY CÁCH]',
    cta: 'Nhận tư vấn kỹ thuật',
  },
  'FJ-368C': {
    name: 'Fujinano FJ-368C Nano Ceramic',
    code: 'FJ-368C',
    usage: 'Dòng Nano Ceramic.',
    surfaces: ['[CẦN XÁC NHẬN THÔNG SỐ]'],
    packaging: '[CẦN XÁC NHẬN QUY CÁCH]',
    cta: 'Nhận tư vấn kỹ thuật',
  },
};

/** Lấy nhiều sản phẩm theo mã, bỏ qua mã không tồn tại. */
export function getProducts(codes: string[]): ProductCard[] {
  return codes.map((c) => products[c]).filter(Boolean);
}
