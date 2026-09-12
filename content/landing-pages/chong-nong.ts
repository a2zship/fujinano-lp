import type { LandingPageConfig } from '@/types';
import { getProducts } from '@/content/products';

/* ==========================================================================
   LANDING — /giai-phap/chong-nong (nhân bản từ template chống thấm)
   KHÔNG claim "giảm X°C" nếu chưa có số liệu xác nhận (mục 19, 31).
   ========================================================================== */

export const chongNongConfig: LandingPageConfig = {
  slug: 'chong-nong',

  seo: {
    title: 'Giải pháp chống nóng cho mái tôn và tường ngoài trời | Fujinano',
    description:
      'Giảm hấp nhiệt cho mái tôn, mái bê tông và tường hướng nắng. Kỹ thuật Fujinano khảo sát bề mặt và đề xuất hệ sản phẩm phù hợp. Nhận tư vấn kỹ thuật miễn phí.',
    canonical: '/giai-phap/chong-nong',
  },

  breadcrumb: [
    { label: 'Trang chủ', href: '/' },
    { label: 'Giải pháp', href: '/' },
    { label: 'Chống nóng' },
  ],

  hero: {
    eyebrow: 'Giải pháp chống nóng Fujinano',
    headline: 'Giải pháp chống nóng cho mái tôn, mái bê tông và tường ngoài trời',
    subheadline:
      'Dành cho nhà ở, nhà xưởng và công trình chịu nắng trực tiếp. Kỹ thuật Fujinano đánh giá bề mặt trước khi đề xuất hệ sản phẩm phù hợp.',
    image: '/images/cong-trinh/mai-chong-nong.webp',
    imageAlt: 'Mái tole nhà xưởng, nhà dân dụng và khu công nghiệp thi công sơn chống nóng Fujinano',
    primaryCTA: 'Nhận tư vấn kỹ thuật',
    secondaryCTA: 'Nhận báo giá',
    trustNote: 'Kỹ thuật liên hệ tư vấn theo hiện trạng công trình của anh/chị.',
  },

  painPoints: {
    title: 'Công trình của anh/chị có đang gặp tình trạng này?',
    items: [
      { title: 'Mái tôn hấp nhiệt, nóng hầm buổi trưa', description: 'Nhiệt truyền xuống không gian bên dưới.' },
      { title: 'Tầng trên / gác mái nóng khó ở', description: 'Trần và tường tích nhiệt vào buổi chiều.' },
      { title: 'Tường hướng tây nóng kéo dài', description: 'Bề mặt phơi nắng lâu, tỏa nhiệt vào tối.' },
      { title: 'Chi phí làm mát tăng cao', description: 'Điều hòa/quạt phải chạy nhiều hơn.' },
      { title: 'Nhà xưởng nóng ảnh hưởng sản xuất', description: 'Môi trường làm việc và hàng hóa chịu nhiệt.' },
      { title: 'Lớp phủ cũ xuống cấp, bong tróc', description: 'Mất tác dụng bảo vệ bề mặt theo thời gian.' },
    ],
  },

  solution: {
    title: 'Fujinano xử lý theo bề mặt và hướng nắng, không làm đại trà',
    description:
      'Hiệu quả chống nóng phụ thuộc loại bề mặt (tôn/bê tông), hướng nắng và cách thi công. Quy trình dưới đây giúp chọn đúng hệ sản phẩm.',
    steps: [
      { title: 'Đánh giá bề mặt & hướng nắng', description: 'Xác định loại mái/tường và mức phơi nắng.' },
      { title: 'Xử lý bề mặt', description: 'Vệ sinh, xử lý gỉ/rêu mốc và lớp phủ cũ.' },
      { title: 'Chọn hệ sản phẩm phù hợp', description: 'Chọn lớp phủ theo bề mặt và điều kiện thực tế.' },
      { title: 'Thi công đúng lớp', description: 'Thi công theo số lớp và định mức khuyến nghị.' },
      { title: 'Hoàn thiện & nghiệm thu', description: 'Kiểm tra độ phủ trước khi bàn giao.' },
    ],
  },

  benefits: {
    title: 'Vì sao chọn giải pháp chống nóng Fujinano',
    items: [
      { title: 'Giảm nhiệt bề mặt mái tole', description: 'Dòng PU-600 Roofcool giảm nhiệt bề mặt mái tole.', group: 'performance', proof: 'Giảm nhiệt bề mặt trên 25°C (theo tài liệu Fujinano)' },
      { title: 'Bảo vệ bề mặt phơi nắng', description: 'Màng co giãn, chống bám bụi, kháng kiềm & muối biển.', group: 'technology', proof: 'Sơn được trên kim loại, bê tông, gỗ (theo tài liệu Fujinano)' },
      { title: 'Hỗ trợ kỹ thuật thi công', description: 'Hướng dẫn xử lý bề mặt, số lớp và định mức.', group: 'support', proof: '[CẦN BỔ SUNG BẰNG CHỨNG]' },
      { title: 'Tư vấn theo công trình thực tế', description: 'Đề xuất bám theo hiện trạng và ngân sách.', group: 'application', proof: '[CẦN BỔ SUNG BẰNG CHỨNG]' },
    ],
  },

  evidence: {
    title: 'Ứng dụng & bằng chứng',
    blocks: [
      {
        type: 'image',
        title: 'Ứng dụng trên mái công trình',
        content: 'Mái tole nhà xưởng · nhà dân dụng · khu công nghiệp.',
        image: '/images/cong-trinh/mai-chong-nong.webp',
        imageAlt: 'Các công trình mái thi công sơn chống nóng Fujinano PU-600',
      },
      { type: 'metric', title: 'Số liệu đo nhiệt tại công trình cụ thể', pending: true, note: '[CẦN BỔ SUNG SỐ LIỆU ĐO NHIỆT THỰC TẾ TẠI CÔNG TRÌNH]' },
      { type: 'video', title: 'Video thi công thực tế', pending: true, note: '[CẦN BỔ SUNG VIDEO THẬT]' },
    ],
  },

  products: {
    title: 'Sản phẩm phù hợp cho chống nóng',
    note: 'Dòng chống nóng chuyên dụng của Fujinano. Thông số theo tài liệu chính thức; kỹ thuật tư vấn phương án theo bề mặt.',
    items: getProducts(['PU-600']),
  },

  process: {
    title: 'Điều gì xảy ra sau khi anh/chị để lại thông tin',
    steps: [
      { title: '1. Gửi nhu cầu', description: 'Điền hiện trạng công trình qua form.' },
      { title: '2. Kỹ thuật liên hệ', description: 'Bộ phận kỹ thuật gọi lại tư vấn.' },
      { title: '3. Đánh giá công trình', description: 'Khảo sát bề mặt và hướng nắng.' },
      { title: '4. Đề xuất giải pháp', description: 'Chọn hệ sản phẩm và cách thi công.' },
      { title: '5. Báo giá', description: 'Báo giá vật tư/thi công theo thực tế.' },
      { title: '6. Thi công hoặc cấp vật tư', description: 'Triển khai hoặc giao vật tư kèm hướng dẫn.' },
    ],
  },

  caseStudies: { title: 'Công trình tiêu biểu', items: [] },

  faq: {
    title: 'Câu hỏi thường gặp',
    items: [
      { q: 'Dùng được cho mái tôn và mái bê tông không?', a: 'Fujinano có lựa chọn cho cả mái tôn và mái bê tông. Kỹ thuật tư vấn dòng phù hợp sau khi đánh giá bề mặt.' },
      { q: 'Có giảm được nhiệt độ không?', a: 'Theo tài liệu Fujinano, dòng PU-600 Roofcool giảm nhiệt bề mặt mái tole trên 25°C. Mức cải thiện thực tế còn phụ thuộc bề mặt, hướng nắng, số lớp và điều kiện công trình; kỹ thuật sẽ tư vấn cụ thể sau khảo sát.' },
      { q: 'Có cần xử lý lớp cũ / gỉ sét không?', a: 'Thông thường cần vệ sinh và xử lý bề mặt (gỉ, rêu mốc, lớp cũ) để lớp phủ mới bám tốt.' },
      { q: 'Thi công mất bao lâu?', a: 'Tùy diện tích, số lớp và thời tiết. Kỹ thuật ước tính cụ thể sau khảo sát.' },
      { q: 'Fujinano có hỗ trợ kỹ thuật không?', a: 'Có. Bộ phận kỹ thuật hỗ trợ xử lý bề mặt, chọn sản phẩm, số lớp và định mức.' },
      { q: 'Mua ở đâu và có giao hàng không?', a: 'Anh/chị để lại thông tin, Fujinano tư vấn kênh mua và phương án giao hàng phù hợp khu vực — [CẦN XÁC NHẬN CHÍNH SÁCH GIAO HÀNG].' },
    ],
  },

  finalCta: {
    title: 'Gửi hiện trạng công trình để kỹ thuật Fujinano tư vấn chống nóng',
    description: 'Mô tả loại mái/tường và diện tích ước tính. Kỹ thuật sẽ liên hệ đề xuất giải pháp và báo giá.',
    primaryCTA: 'Nhận tư vấn giải pháp',
  },

  form: {
    title: 'Nhận tư vấn kỹ thuật chống nóng',
    description: 'Điền thông tin, kỹ thuật Fujinano sẽ liên hệ trong thời gian sớm nhất.',
    leadType: 'homeowner',
    needOptions: [
      'Chống nóng mái tôn',
      'Chống nóng mái bê tông',
      'Chống nóng tường ngoài',
      'Chống nóng nhà xưởng',
      'Mở đại lý',
      'Nhu cầu khác',
    ],
    projectTypeOptions: ['Nhà ở gia đình', 'Nhà xưởng / kho', 'Công trình thương mại', 'Khác'],
  },
};
