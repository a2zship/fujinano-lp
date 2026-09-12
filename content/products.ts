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
    usage: 'Dòng phủ Nano Ceramic.',
    surfaces: ['[CẦN XÁC NHẬN THÔNG SỐ]'],
    packaging: '[CẦN XÁC NHẬN QUY CÁCH]',
    cta: 'Nhận tư vấn kỹ thuật',
  },
  // Dòng PU cho sàn / kim loại (CLAUDE.md mục 1). Usage nêu nhóm, KHÔNG claim
  // hiệu năng; thông số/quy cách để placeholder tới khi có TDS.
  'PU-600': {
    name: 'Fujinano PU-600',
    code: 'PU-600',
    usage: 'Dòng sơn PU cho sàn / kim loại.',
    surfaces: ['[CẦN XÁC NHẬN THÔNG SỐ]'],
    packaging: '[CẦN XÁC NHẬN QUY CÁCH]',
    cta: 'Nhận tư vấn kỹ thuật',
  },
  'PU-700': {
    name: 'Fujinano PU-700',
    code: 'PU-700',
    usage: 'Dòng sơn PU cho sàn / kim loại.',
    surfaces: ['[CẦN XÁC NHẬN THÔNG SỐ]'],
    packaging: '[CẦN XÁC NHẬN QUY CÁCH]',
    cta: 'Nhận tư vấn kỹ thuật',
  },
  'PU-380': {
    name: 'Fujinano PU-380',
    code: 'PU-380',
    usage: 'Dòng sơn PU cho sàn / kim loại.',
    surfaces: ['[CẦN XÁC NHẬN THÔNG SỐ]'],
    packaging: '[CẦN XÁC NHẬN QUY CÁCH]',
    cta: 'Nhận tư vấn kỹ thuật',
  },
  'PU-888 PICK': {
    name: 'Fujinano PU-888 PICK',
    code: 'PU-888 PICK',
    usage: 'Dòng sơn cho sân Pickleball.',
    surfaces: ['[CẦN XÁC NHẬN THÔNG SỐ]'],
    packaging: '[CẦN XÁC NHẬN QUY CÁCH]',
    cta: 'Nhận tư vấn kỹ thuật',
  },
};

/** Lấy nhiều sản phẩm theo mã, bỏ qua mã không tồn tại. */
export function getProducts(codes: string[]): ProductCard[] {
  return codes.map((c) => products[c]).filter(Boolean);
}
