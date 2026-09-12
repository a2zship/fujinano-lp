/* ==========================================================================
   FUJINANO — Cấu hình thương hiệu & liên hệ dùng chung
   Chỉ chứa dữ liệu đã xác nhận; phần chưa có -> placeholder rõ ràng.
   Liên hệ đọc từ ENV để đổi không cần sửa code (mục 5, 13).
   ========================================================================== */

export const brand = {
  name: 'Fujinano',
  tagline: 'Sơn & Chống thấm — Công nghệ Nhật Bản',
  jp: '日本の技術',
  slogan: 'Nâng tầm không gian sống',
  sloganSub: 'Chất lượng Nhật Bản cho ngôi nhà Việt',

  website: 'www.fujinano.com',
  websiteUrl: 'https://www.fujinano.com',

  /** Địa chỉ giao hàng đã xác nhận từ bảng giá chính thức (Tổng kho Cần Thơ). */
  warehouse: 'Tổng kho Cần Thơ — 77 QL1A, Tổ 61, P. Hưng Phú, TP. Cần Thơ',

  /** [CẦN XÁC NHẬN] — chưa có số hotline/Zalo chính thức của Fujinano trong tài liệu. */
  hotline: process.env.NEXT_PUBLIC_HOTLINE || '[CẦN XÁC NHẬN HOTLINE]',
  hotlineHref:
    'tel:' + (process.env.NEXT_PUBLIC_HOTLINE || '').replace(/[^\d+]/g, ''),
  zaloUrl: process.env.NEXT_PUBLIC_ZALO_URL || '[CẦN XÁC NHẬN ZALO]',

  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3151',
};

/** 4 trụ giá trị Fujinano (theo vật liệu thương hiệu chính thức). */
export const brandPillars = [
  { title: 'Công nghệ Nhật Bản', desc: '日本の技術 — tiêu chuẩn kỹ thuật Nhật Bản.' },
  { title: 'Độ bền cao', desc: 'Bền màu, bảo vệ bề mặt dài lâu.' },
  { title: 'Màu sắc đa dạng', desc: 'Pha được nhiều màu theo nhu cầu.' },
  { title: 'Thân thiện môi trường', desc: 'An toàn sức khỏe, hàm lượng VOC thấp.' },
];

/*
  CHÍNH SÁCH ĐẠI LÝ C1 — miền Nam 2026 (mục 22)
  Nguồn: "CHÍNH SÁCH ĐẠI LÝ PHÂN PHỐI CẤP 1 (1).pdf" + CLAUDE.md.
  Dữ liệu đã xác nhận: hai nhóm chiết khấu 20% / 30%, yêu cầu ký hợp đồng &
  thanh toán trước khi nhận hàng. Chi tiết định mức/điều kiện sâu hơn:
  [CẦN XÁC NHẬN TỪ BẢN PDF ĐẦY ĐỦ].
*/
export const dealerPolicy = {
  southernRegion2026: {
    group1DiscountPercent: 20,
    group2DiscountPercent: 30,
    requiresContract: true,
    prepaymentRequired: true,
    note: '[CẦN XÁC NHẬN] Điều kiện doanh số & phân nhóm sản phẩm chi tiết lấy từ hồ sơ chính sách đầy đủ.',
  },
} as const;

/*
  KHUYẾN MÃI THÁNG 08/2026 (mục 1)
  Nguồn: "CHƯƠNG TRÌNH KHUYẾN MÃI THÁNG 8.2026.pdf" + CLAUDE.md.
  Cơ chế đã xác nhận: mua 10 tặng 1 / mua 7 tặng 1 / mua 11 tặng 1 tuỳ nhóm,
  cùng hỗ trợ phí pha màu một số dòng. Danh mục áp dụng chi tiết:
  [CẦN XÁC NHẬN TỪ BẢN PDF ĐẦY ĐỦ].
*/
export const promotionAug2026 = {
  active: true,
  label: 'Khuyến mãi tháng 08/2026',
  mechanics: ['Mua 10 tặng 1', 'Mua 7 tặng 1', 'Mua 11 tặng 1'],
  extra: 'Hỗ trợ phí pha màu cho một số dòng sản phẩm.',
  note: '[CẦN XÁC NHẬN] Nhóm sản phẩm & điều kiện áp dụng chi tiết theo thể lệ chính thức.',
} as const;
