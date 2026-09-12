import type { ProductCard } from '@/types';

/* ==========================================================================
   FUJINANO — Danh mục sản phẩm
   Dữ liệu (mã, quy cách, định mức, công dụng) lấy từ BẢNG GIÁ ĐẠI LÝ CHÍNH THỨC
   của Fujinano (ảnh trong "Ảnh sản phẩm"). KHÔNG hiển thị GIÁ trên trang công khai
   (giá đại lý). Ảnh bao bì cắt từ tài liệu thật.
   Câu "độ bền trên X năm" là tuyên bố trên tài liệu chính thức của Fujinano.
   ========================================================================== */

const IMG = '/images/products';

export const products: Record<string, ProductCard> = {
  /* ---------------- Chống thấm ---------------- */
  'CT-502': {
    name: 'Fujinano CT-502 Nano',
    code: 'CT-502',
    usage: 'Chống thấm nano tinh thể thẩm thấu (Nano Clear / Nano Smart).',
    surfaces: ['Bê tông', 'Tường', 'Gạch', 'Đá', 'Xi măng', 'Tường ngầm / bể nước (Nano Smart)'],
    packaging: 'Lon 5 lít (30–40 m²/lớp) · Lon 1 lít (6–8 m²/lớp)',
    features: [
      'Thấm sâu tạo lớp bảo vệ vô hình, giữ nguyên bề mặt vật liệu',
      'Chống thấm, chống rêu mốc, ngăn muối hóa',
      'Nano Smart: chống thấm ngược cho tường ngầm, tầng hầm, ven biển',
      'Độ bền trên 15 năm (theo tài liệu Fujinano)',
    ],
    image: `${IMG}/ct502-chong-tham.webp`,
    cta: 'Nhận tư vấn kỹ thuật',
  },
  'PU-380': {
    name: 'Fujinano PU-380 Nano PU Coloshield',
    code: 'PU-380',
    usage: 'Sơn nano PU chống thấm pha màu cho tường, màng sơn siêu bóng.',
    surfaces: ['Tường ngoài', 'Tường tiếp xúc ẩm ướt'],
    packaging: 'Thùng 15 lít (165–195 m²/lớp) · Lon 5 lít (55–65 m²/lớp)',
    features: [
      'Màng siêu bóng, bảo vệ mặt tường trước tia UV, chống rêu mốc',
      'Chống thấm tuyệt đối, chống kiềm – chống muối hóa',
      'Đàn hồi, che lấp khe nứt nhỏ, pha được nhiều màu',
      'Độ bền trên 15 năm (theo tài liệu Fujinano)',
    ],
    image: `${IMG}/pu380-tuong.webp`,
    cta: 'Nhận tư vấn kỹ thuật',
  },
  'PU-700': {
    name: 'Fujinano PU-700 Nano PU (sàn lộ thiên)',
    code: 'PU-700',
    usage: 'Sơn chống thấm PU polyurethane lộ thiên cho sàn, sân thượng, mái.',
    surfaces: ['Sân thượng', 'Mái', 'Ban công', 'Sàn bê tông', 'Sàn nhà xưởng'],
    packaging: 'Thùng 15 kg (75–90 m²/lớp) · Lon 5 kg (25–30 m²/lớp)',
    features: [
      'Chống thấm, chịu tia UV và thời tiết khắc nghiệt',
      'Đàn hồi cao, chống nứt; siêu bền, chịu mài mòn',
      'Độ bám dính cao, dễ thi công',
      'Độ bền trên 15 năm (theo tài liệu Fujinano)',
    ],
    cta: 'Nhận tư vấn kỹ thuật',
  },
  'PU-180': {
    name: 'Fujinano PU-180 Nano PU Colorshield',
    code: 'PU-180',
    usage: 'Sơn PU bóng chống thấm pha màu cao cấp (công nghệ Nano Polymer).',
    surfaces: ['Tường ngoài', 'Bề mặt cần chống thấm & thẩm mỹ'],
    packaging: 'Thùng 15 lít (150–180 m²/lớp) · Lon 5 lít (50–80 m²/lớp)',
    features: [
      'Màng sơn liền mạch, ngăn thấm hiệu quả',
      'Kháng kiềm, kháng muối, chống ăn mòn — phù hợp vùng ven biển',
      'Siêu đàn hồi, che lấp vết nứt nhỏ',
      'Độ bền trên 10 năm (theo tài liệu Fujinano)',
    ],
    cta: 'Nhận tư vấn kỹ thuật',
  },
  'FJ-118M': {
    name: 'Fujinano FJ-118M Ultra Primer',
    code: 'FJ-118M',
    usage: 'Sơn lót chống muối hóa nội & ngoại thất cao cấp (all in 1).',
    surfaces: ['Tường nội thất', 'Tường ngoại thất', 'Khu vực ven biển'],
    packaging: 'Thùng 15 lít (170–180 m²/lớp) · Lon 5 lít (55–60 m²/lớp)',
    features: [
      'Ngăn tác động của muối từ trong tường, kháng muối biển',
      'Bám dính cao, tạo độ nhám mịn cho lớp sơn phủ',
      'Tăng độ bền màu, bảo vệ lớp sơn phủ',
    ],
    cta: 'Nhận tư vấn kỹ thuật',
  },

  /* ---------------- Chống nóng ---------------- */
  'PU-600': {
    name: 'Fujinano PU-600 Nano PU Roofcool',
    code: 'PU-600',
    usage: 'Sơn nano PU chống nóng mái tole — giảm nhiệt bề mặt.',
    surfaces: ['Mái tole', 'Kim loại', 'Bê tông', 'Gỗ'],
    packaging: 'Thùng 15 kg (105–120 m²/lớp) · Lon 5 kg (35–40 m²/lớp)',
    features: [
      'Giảm nhiệt bề mặt mái tole trên 25°C (theo tài liệu Fujinano)',
      'Màng sơn bóng mờ, co giãn, siêu bám dính',
      'Chống bám bụi, kháng kiềm & muối biển',
      'Sơn được trên nhiều chất liệu: kim loại, bê tông, gỗ',
    ],
    image: `${IMG}/pu600-chong-nong.webp`,
    cta: 'Nhận tư vấn kỹ thuật',
  },

  /* ---------------- Nội thất ---------------- */
  'FJ-D22': {
    name: 'Fujinano FJ-D22 (siêu mịn nội thất)',
    code: 'FJ-D22',
    usage: 'Sơn siêu mịn nội thất tiêu chuẩn.',
    surfaces: ['Tường nội thất'],
    packaging: 'Thùng 15 lít (135–150 m²/lớp) · Lon 5 lít (45–50 m²/lớp)',
    features: ['Màng sơn siêu mịn, bền màu, chống bám bụi', 'Độ che phủ cao, chống kiềm, chống rêu mốc'],
    cta: 'Nhận tư vấn kỹ thuật',
  },
  'FJ-D26': {
    name: 'Fujinano FJ-D26 (lau chùi & bền màu)',
    code: 'FJ-D26',
    usage: 'Sơn lau chùi & bền màu cao cấp, màng sơn bóng ngọc trai.',
    surfaces: ['Tường nội thất'],
    packaging: 'Thùng 15 lít (150–180 m²/lớp) · Lon 5 lít (50–60 m²/lớp)',
    features: ['Lau chùi thoải mái, độ che phủ cao, chống bám bụi', 'Độ bền trên 15 năm (theo tài liệu Fujinano)'],
    cta: 'Nhận tư vấn kỹ thuật',
  },
  'FJ-D28': {
    name: 'Fujinano FJ-D28 (nano siêu bóng nội thất)',
    code: 'FJ-D28',
    usage: 'Sơn nano siêu bóng nội thất cao cấp (all in 1).',
    surfaces: ['Tường nội thất'],
    packaging: 'Thùng 15 lít (180–220 m²/lớp) · Lon 5 lít (60–75 m²/lớp)',
    features: [
      'Chùi rửa vượt trội, độ che phủ cao, chống nấm mốc',
      'Che lấp khe nứt nhỏ, hàm lượng VOC thấp, thân thiện môi trường',
      'Độ bền trên 20 năm (theo tài liệu Fujinano)',
    ],
    cta: 'Nhận tư vấn kỹ thuật',
  },
  'FJ-108N': {
    name: 'Fujinano FJ-108N PLUS Super Primer',
    code: 'FJ-108N PLUS',
    usage: 'Sơn lót chống kiềm nano nội & ngoại thất cao cấp (all in 1).',
    surfaces: ['Tường nội thất', 'Tường ngoại thất'],
    packaging: 'Thùng 18 lít (160–180 m²/lớp) · Lon 5 lít (55–60 m²/lớp)',
    features: ['Bám dính cao, tạo độ mịn cho lớp phủ', 'Cải thiện độ bám, tăng độ bền màu lớp sơn phủ'],
    cta: 'Nhận tư vấn kỹ thuật',
  },

  /* ---------------- Ngoại thất ---------------- */
  'FJ-168': {
    name: 'Fujinano FJ-168 Nano Coat (ngoại thất)',
    code: 'FJ-168',
    usage: 'Sơn nano ngoại thất siêu mịn cao cấp.',
    surfaces: ['Tường ngoại thất'],
    packaging: 'Thùng 18 lít (165–195 m²/lớp) · Lon 5 lít (55–65 m²/lớp)',
    features: [
      'Màng siêu mịn, bảo vệ trước tia UV, chống rêu mốc & bám bụi',
      'Chống thấm, chống kiềm – chống muối hóa, pha được nhiều màu',
    ],
    cta: 'Nhận tư vấn kỹ thuật',
  },
  'PU-680': {
    name: 'Fujinano PU-680 Nano PU (ngoại thất siêu cao cấp)',
    code: 'PU-680',
    usage: 'Sơn nano PU ngoại thất siêu cao cấp, màng siêu bóng kính.',
    surfaces: ['Tường ngoại thất'],
    packaging: 'Thùng 15 lít (180–200 m²/lớp) · Lon 5 lít (60–75 m²/lớp)',
    features: [
      'Màng siêu bóng kính, bảo vệ trước tia UV, chống rêu mốc & bám bụi',
      'Chống thấm tuyệt đối, chống kiềm – chống muối hóa',
      'Siêu đàn hồi & chống nứt, pha được nhiều màu',
      'Độ bền trên 20 năm (theo tài liệu Fujinano)',
    ],
    image: `${IMG}/pu680-ngoai-that.webp`,
    cta: 'Nhận tư vấn kỹ thuật',
  },

  /* ---------------- Công nghiệp / sàn ---------------- */
  'EP-2K CG': {
    name: 'Fujinano EP-2K CG (lót epoxy chống gỉ)',
    code: 'EP-2K CG',
    usage: 'Sơn lót epoxy chống gỉ giàu kẽm cho kim loại.',
    surfaces: ['Kim loại', 'Sắt công nghiệp', 'Tàu thuyền', 'Nhà tiền chế', 'Sắt mạ kẽm'],
    packaging: 'Bộ 5 kg (30–40 m²/lớp)',
    features: ['Chống gỉ giàu kẽm, tăng độ bám cho sơn phủ', 'Kháng kiềm & muối biển, phù hợp khí hậu ven biển'],
    cta: 'Nhận tư vấn kỹ thuật',
  },
  'PU-2K KL': {
    name: 'Fujinano PU-2K KL (phủ kim loại)',
    code: 'PU-2K KL',
    usage: 'Sơn phủ kim loại PU 2 thành phần.',
    surfaces: ['Kim loại', 'Kết cấu thép', 'Nhà tiền chế'],
    packaging: 'Bộ 5 kg (30–40 m²/lớp)',
    features: ['Màng siêu bóng, siêu bám dính, che phủ cao', 'Kháng UV, kháng kiềm & muối biển — công trình ngoài trời'],
    cta: 'Nhận tư vấn kỹ thuật',
  },
  'PU-2K SNX': {
    name: 'Fujinano PU-2K SNX (phủ sàn bê tông)',
    code: 'PU-2K SNX',
    usage: 'Sơn phủ sàn bê tông PU 2 thành phần.',
    surfaces: ['Sàn bê tông', 'Sàn công nghiệp', 'Nhà xưởng', 'Khu vực tiếp xúc nước / hóa chất'],
    packaging: 'Bộ 5 kg (30–40 m²/lớp)',
    features: ['Màng siêu bóng, siêu bám dính, che phủ cao', 'Kháng UV, kháng kiềm & muối biển; chịu tải, chịu mài mòn'],
    cta: 'Nhận tư vấn kỹ thuật',
  },

  /* ---------------- Nano Ceramic ---------------- */
  'FJ-368C': {
    name: 'Fujinano Nano Ceramic (FJ-368C)',
    code: 'FJ-368C',
    usage: 'Sơn siêu bóng men kính nội & ngoại thất — công nghệ Nano Ceramic.',
    surfaces: ['Tường nội thất', 'Tường ngoại thất'],
    packaging: 'Thùng 15 lít (150–180 m²/lớp) · Lon 5 lít (50–80 m²/lớp)',
    features: [
      'Bề mặt siêu bóng men kính, sáng trong',
      'Bảo vệ toàn diện trước thời tiết; chống thấm, chống tia UV bền màu',
      'Lau chùi dễ dàng, chống bám bụi',
      'Bảo hành 20 năm (theo tài liệu Fujinano)',
    ],
    image: `${IMG}/nano-ceramic.webp`,
    cta: 'Nhận tư vấn kỹ thuật',
  },

  /* ---------------- Sân Pickleball ---------------- */
  'PU-888 PICK': {
    name: 'Fujinano PU-888 PICK',
    code: 'PU-888 PICK',
    usage: 'Dòng sơn cho sân Pickleball.',
    surfaces: ['[CẦN XÁC NHẬN THÔNG SỐ]'],
    packaging: '[CẦN XÁC NHẬN QUY CÁCH]',
    features: ['[CẦN BỔ SUNG CÔNG DỤNG TỪ TDS]'],
    cta: 'Nhận tư vấn kỹ thuật',
  },
};

/** Lấy nhiều sản phẩm theo mã, bỏ qua mã không tồn tại. */
export function getProducts(codes: string[]): ProductCard[] {
  return codes.map((c) => products[c]).filter(Boolean);
}
