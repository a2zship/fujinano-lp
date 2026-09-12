import type { LandingPageConfig } from '@/types';
import { getProducts } from '@/content/products';

/* ==========================================================================
   LANDING — /giai-phap/nano-ceramic
   Nano Ceramic là DÒNG SẢN PHẨM đã có (FJ-368C). Chưa có hồ sơ xác nhận cơ chế
   / công dụng chi tiết -> viết trung tính, mọi công dụng cụ thể để placeholder,
   KHÔNG bịa (mục 19, 31, 36).
   ========================================================================== */

export const nanoCeramicConfig: LandingPageConfig = {
  slug: 'nano-ceramic',

  seo: {
    title: 'Lớp phủ Nano Ceramic Fujinano — bảo vệ & hoàn thiện bề mặt | Fujinano',
    description:
      'Lớp phủ Nano Ceramic Fujinano (FJ-368C) cho nhu cầu bảo vệ và hoàn thiện bề mặt. Kỹ thuật tư vấn phạm vi ứng dụng phù hợp. Nhận tư vấn kỹ thuật miễn phí.',
    canonical: '/giai-phap/nano-ceramic',
  },

  breadcrumb: [
    { label: 'Trang chủ', href: '/' },
    { label: 'Giải pháp', href: '/' },
    { label: 'Nano Ceramic' },
  ],

  hero: {
    eyebrow: 'Nano Ceramic Fujinano',
    headline: 'Lớp phủ Nano Ceramic Fujinano cho nhu cầu bảo vệ và hoàn thiện bề mặt',
    subheadline:
      'Dành cho khách hàng quan tâm dòng phủ Nano Ceramic (FJ-368C). Kỹ thuật Fujinano tư vấn phạm vi ứng dụng và cách thi công phù hợp với bề mặt của anh/chị.',
    image: '/images/products/nano-ceramic.webp',
    imageAlt: 'Sản phẩm lớp phủ Nano Ceramic Fujinano FJ-368C',
    primaryCTA: 'Nhận tư vấn kỹ thuật',
    secondaryCTA: 'Nhận báo giá',
    trustNote: 'Kỹ thuật liên hệ tư vấn theo bề mặt và nhu cầu của anh/chị.',
  },

  painPoints: {
    title: 'Anh/chị đang quan tâm điều gì?',
    items: [
      { title: 'Bề mặt cần lớp bảo vệ hoàn thiện', description: 'Muốn tăng độ bền và thẩm mỹ cho bề mặt.' },
      { title: 'Chưa rõ Nano Ceramic dùng cho bề mặt nào', description: 'Cần tư vấn phạm vi ứng dụng phù hợp.' },
      { title: 'Bề mặt hiện tại nhanh xuống cấp', description: 'Muốn giải pháp hoàn thiện bền hơn.' },
      { title: 'Cần tư vấn quy trình & định mức', description: 'Chưa rõ cách thi công và chi phí.' },
    ],
  },

  solution: {
    title: 'Fujinano tư vấn ứng dụng Nano Ceramic theo từng bề mặt',
    description:
      'Hiệu quả của lớp phủ phụ thuộc loại bề mặt và cách thi công. Quy trình dưới đây giúp xác định Nano Ceramic có phù hợp với nhu cầu của anh/chị hay không.',
    steps: [
      { title: 'Đánh giá bề mặt & nhu cầu', description: 'Xác định loại bề mặt và mục tiêu sử dụng.' },
      { title: 'Xử lý bề mặt', description: 'Vệ sinh và chuẩn bị bề mặt trước khi phủ.' },
      { title: 'Xác nhận phương án', description: 'Kỹ thuật xác nhận Nano Ceramic có phù hợp không.' },
      { title: 'Thi công đúng lớp', description: 'Thi công theo số lớp và định mức khuyến nghị.' },
      { title: 'Hoàn thiện & kiểm tra', description: 'Kiểm tra bề mặt sau khi phủ.' },
    ],
  },

  benefits: {
    title: 'Về dòng Nano Ceramic Fujinano',
    items: [
      { title: 'Bề mặt siêu bóng men kính', description: 'Sơn siêu bóng men kính nội & ngoại thất, sáng trong.', group: 'technology', proof: 'Theo tài liệu Fujinano' },
      { title: 'Bảo vệ toàn diện', description: 'Chống thấm, chống tia UV bền màu, chống bám bụi.', group: 'performance', proof: 'Theo tài liệu Fujinano' },
      { title: 'Lau chùi dễ dàng', description: 'Bề mặt dễ vệ sinh, sạch sẽ như mới.', group: 'application', proof: 'Theo tài liệu Fujinano' },
      { title: 'Bảo hành dài hạn', description: 'Dòng Nano Ceramic bảo hành theo chính sách Fujinano.', group: 'support', proof: 'Bảo hành 20 năm (theo tài liệu Fujinano)' },
    ],
  },

  evidence: {
    title: 'Bằng chứng thực tế',
    blocks: [
      { type: 'metric', title: 'Thông số kỹ thuật (TDS)', pending: true, note: '[CẦN BỔ SUNG TDS ĐÃ XÁC NHẬN]' },
      { type: 'image', title: 'Ảnh ứng dụng thực tế', pending: true, note: '[CẦN BỔ SUNG ẢNH CÔNG TRÌNH THẬT]' },
      { type: 'before_after', title: 'Bề mặt trước / sau khi phủ', pending: true, note: '[CẦN BỔ SUNG HÌNH ẢNH THỰC TẾ]' },
    ],
  },

  products: {
    title: 'Sản phẩm',
    note: 'Thông số/quy cách và phạm vi ứng dụng hiển thị theo TDS đã xác nhận.',
    items: getProducts(['FJ-368C']),
  },

  process: {
    title: 'Điều gì xảy ra sau khi anh/chị để lại thông tin',
    steps: [
      { title: '1. Gửi nhu cầu', description: 'Điền bề mặt và nhu cầu qua form.' },
      { title: '2. Kỹ thuật liên hệ', description: 'Bộ phận kỹ thuật gọi lại tư vấn.' },
      { title: '3. Đánh giá bề mặt', description: 'Xác định Nano Ceramic có phù hợp không.' },
      { title: '4. Đề xuất giải pháp', description: 'Đề xuất phương án và cách thi công.' },
      { title: '5. Báo giá', description: 'Báo giá vật tư/thi công theo thực tế.' },
      { title: '6. Thi công hoặc cấp vật tư', description: 'Triển khai hoặc giao vật tư kèm hướng dẫn.' },
    ],
  },

  caseStudies: { title: 'Công trình tiêu biểu', items: [] },

  faq: {
    title: 'Câu hỏi thường gặp',
    items: [
      { q: 'Nano Ceramic Fujinano dùng cho bề mặt nào?', a: 'Sơn siêu bóng men kính dùng cho tường nội thất và ngoại thất. Kỹ thuật sẽ tư vấn phương án phù hợp sau khi đánh giá bề mặt.' },
      { q: 'Công dụng chính của sản phẩm là gì?', a: 'Theo tài liệu Fujinano: bề mặt siêu bóng men kính, chống thấm, chống tia UV bền màu, chống bám bụi và lau chùi dễ dàng. Quy cách Thùng 15 lít (150–180 m²/lớp) / Lon 5 lít.' },
      { q: 'Thi công như thế nào?', a: 'Cần xử lý bề mặt trước khi phủ; số lớp và định mức theo hướng dẫn kỹ thuật của sản phẩm.' },
      { q: 'Fujinano có hỗ trợ kỹ thuật không?', a: 'Có. Bộ phận kỹ thuật hỗ trợ đánh giá bề mặt, chọn phương án và hướng dẫn thi công.' },
      { q: 'Mua ở đâu và có giao hàng không?', a: 'Anh/chị để lại thông tin, Fujinano tư vấn kênh mua và giao hàng phù hợp khu vực — [CẦN XÁC NHẬN CHÍNH SÁCH GIAO HÀNG].' },
    ],
  },

  finalCta: {
    title: 'Gửi nhu cầu để kỹ thuật Fujinano tư vấn về Nano Ceramic',
    description: 'Mô tả bề mặt và mục tiêu sử dụng. Kỹ thuật sẽ liên hệ tư vấn phương án và báo giá.',
    primaryCTA: 'Nhận tư vấn giải pháp',
  },

  form: {
    title: 'Nhận tư vấn về Nano Ceramic Fujinano',
    description: 'Điền thông tin, kỹ thuật Fujinano sẽ liên hệ trong thời gian sớm nhất.',
    leadType: 'homeowner',
    needOptions: [
      'Tư vấn Nano Ceramic (FJ-368C)',
      'Bảo vệ / hoàn thiện bề mặt',
      'Mở đại lý',
      'Nhu cầu khác',
    ],
    projectTypeOptions: ['Nhà ở gia đình', 'Công trình thương mại', 'Khác'],
  },
};
