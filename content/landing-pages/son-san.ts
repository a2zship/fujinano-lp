import type { LandingPageConfig } from '@/types';
import { getProducts } from '@/content/products';

/* ==========================================================================
   LANDING — /giai-phap/son-san (sơn sàn / sàn PU)
   ========================================================================== */

export const sonSanConfig: LandingPageConfig = {
  slug: 'son-san',

  seo: {
    title: 'Giải pháp sơn sàn cho nhà xưởng, kho và bãi đỗ | Fujinano',
    description:
      'Sơn phủ sàn bê tông cho nhà xưởng, kho, tầng hầm và showroom. Kỹ thuật Fujinano đánh giá mặt sàn và đề xuất hệ sơn PU phù hợp. Nhận tư vấn kỹ thuật miễn phí.',
    canonical: '/giai-phap/son-san',
  },

  breadcrumb: [
    { label: 'Trang chủ', href: '/' },
    { label: 'Giải pháp', href: '/' },
    { label: 'Sơn sàn' },
  ],

  hero: {
    eyebrow: 'Giải pháp sơn sàn Fujinano',
    headline: 'Giải pháp sơn phủ sàn cho nhà xưởng, kho và khu vực chịu tải',
    subheadline:
      'Dành cho sàn bê tông cần bề mặt sạch, dễ vệ sinh và chịu đi lại. Kỹ thuật Fujinano đánh giá mặt sàn trước khi đề xuất hệ sơn phù hợp.',
    image: '/images/cong-trinh/san-cong-nghiep.webp',
    imageAlt: 'Sàn nhà xưởng phủ sơn PU công nghiệp Fujinano',
    primaryCTA: 'Nhận tư vấn kỹ thuật',
    secondaryCTA: 'Nhận báo giá',
    trustNote: 'Kỹ thuật liên hệ tư vấn theo hiện trạng mặt sàn của anh/chị.',
  },

  painPoints: {
    title: 'Mặt sàn của anh/chị có đang gặp tình trạng này?',
    items: [
      { title: 'Sàn bê tông bụi, bong bột', description: 'Bề mặt xuống cấp, phát sinh bụi khi đi lại.' },
      { title: 'Sàn mài mòn, trầy xước', description: 'Chịu xe nâng/đi lại nhiều nên nhanh hỏng.' },
      { title: 'Lớp sơn sàn cũ bong tróc', description: 'Mất bám do xử lý bề mặt chưa đạt.' },
      { title: 'Khó vệ sinh, bám dầu mỡ', description: 'Bề mặt hở khiến vết bẩn ngấm sâu.' },
      { title: 'Sàn trơn, kém an toàn', description: 'Thiếu lớp hoàn thiện phù hợp cho khu vực đi lại.' },
      { title: 'Cần bề mặt đồng đều cho showroom', description: 'Yêu cầu thẩm mỹ và dễ lau chùi.' },
    ],
  },

  solution: {
    title: 'Fujinano chọn hệ sơn theo tải trọng và mục đích sử dụng sàn',
    description:
      'Độ bền của sàn phụ thuộc chất lượng nền, cách xử lý bề mặt và hệ sơn. Quy trình dưới đây giúp chọn đúng giải pháp cho từng loại sàn.',
    steps: [
      { title: 'Đánh giá mặt sàn', description: 'Kiểm tra độ ẩm, độ phẳng và tình trạng nền.' },
      { title: 'Xử lý bề mặt', description: 'Mài, vệ sinh, xử lý nứt và lớp cũ.' },
      { title: 'Chọn hệ sơn phù hợp', description: 'Chọn hệ theo tải trọng và mục đích sử dụng.' },
      { title: 'Thi công đúng lớp', description: 'Thi công theo số lớp và định mức khuyến nghị.' },
      { title: 'Hoàn thiện & nghiệm thu', description: 'Kiểm tra bề mặt trước khi đưa vào sử dụng.' },
    ],
  },

  benefits: {
    title: 'Vì sao chọn giải pháp sơn sàn Fujinano',
    items: [
      { title: 'Hệ sơn PU cho sàn', description: 'Có lựa chọn cho sàn nhà xưởng, kho và khu vực đi lại.', group: 'technology', proof: '[CẦN BỔ SUNG BẰNG CHỨNG]' },
      { title: 'Bề mặt dễ vệ sinh', description: 'Lớp hoàn thiện giúp lau chùi thuận tiện hơn.', group: 'performance', proof: '[CẦN BỔ SUNG BẰNG CHỨNG]' },
      { title: 'Hỗ trợ kỹ thuật thi công', description: 'Hướng dẫn xử lý nền, số lớp và định mức.', group: 'support', proof: '[CẦN BỔ SUNG BẰNG CHỨNG]' },
      { title: 'Tư vấn theo mục đích sử dụng', description: 'Đề xuất bám theo tải trọng và ngân sách.', group: 'application', proof: '[CẦN BỔ SUNG BẰNG CHỨNG]' },
    ],
  },

  evidence: {
    title: 'Ứng dụng & bằng chứng',
    blocks: [
      {
        type: 'image',
        title: 'Sàn bê tông phủ PU công nghiệp',
        content: 'Bề mặt bóng, chịu tải, dễ vệ sinh.',
        image: '/images/cong-trinh/san-cong-nghiep.webp',
        imageAlt: 'Sàn nhà xưởng phủ sơn PU-2K Fujinano',
      },
      {
        type: 'image',
        title: 'Bảo vệ kết cấu kim loại',
        content: 'Sơn lót epoxy chống gỉ + phủ PU cho thép, nhà tiền chế.',
        image: '/images/cong-trinh/kim-loai.webp',
        imageAlt: 'Kết cấu thép sơn hệ epoxy/PU Fujinano',
      },
      { type: 'metric', title: 'Kết quả kiểm tra độ bám / chịu tải tại công trình', pending: true, note: '[CẦN BỔ SUNG SỐ LIỆU TEST ĐÃ XÁC NHẬN]' },
    ],
  },

  products: {
    title: 'Sản phẩm phù hợp cho sơn sàn & kim loại',
    note: 'Kỹ thuật chốt hệ sơn cuối cùng sau khi đánh giá mặt sàn. Thông số/quy cách theo tài liệu chính thức.',
    items: getProducts(['PU-2K SNX', 'PU-700', 'EP-2K CG']),
  },

  process: {
    title: 'Điều gì xảy ra sau khi anh/chị để lại thông tin',
    steps: [
      { title: '1. Gửi nhu cầu', description: 'Điền hiện trạng mặt sàn qua form.' },
      { title: '2. Kỹ thuật liên hệ', description: 'Bộ phận kỹ thuật gọi lại tư vấn.' },
      { title: '3. Đánh giá mặt sàn', description: 'Khảo sát nền, độ ẩm và tải trọng sử dụng.' },
      { title: '4. Đề xuất giải pháp', description: 'Chọn hệ sơn và cách thi công.' },
      { title: '5. Báo giá', description: 'Báo giá vật tư/thi công theo diện tích.' },
      { title: '6. Thi công hoặc cấp vật tư', description: 'Triển khai hoặc giao vật tư kèm hướng dẫn.' },
    ],
  },

  caseStudies: { title: 'Công trình tiêu biểu', items: [] },

  faq: {
    title: 'Câu hỏi thường gặp',
    items: [
      { q: 'Sơn được cho sàn nhà xưởng và bãi xe không?', a: 'Fujinano có hệ sơn PU cho sàn nhà xưởng, kho và khu vực đi lại. Kỹ thuật tư vấn hệ phù hợp theo tải trọng.' },
      { q: 'Sàn cũ bong tróc có sơn lại được không?', a: 'Được, nhưng thường cần mài và xử lý bề mặt để lớp mới bám tốt. Mức độ xử lý tùy hiện trạng.' },
      { q: 'Bao lâu đưa vào sử dụng được?', a: 'Tùy hệ sơn, số lớp và điều kiện thi công. Thông số cụ thể theo TDS — [CẦN XÁC NHẬN THÔNG SỐ].' },
      { q: 'Có cần đóng cửa xưởng khi thi công không?', a: 'Tùy khu vực và tiến độ; kỹ thuật sẽ đề xuất phương án thi công hạn chế gián đoạn.' },
      { q: 'Fujinano có hỗ trợ kỹ thuật không?', a: 'Có. Bộ phận kỹ thuật hỗ trợ xử lý nền, chọn hệ sơn, số lớp và định mức.' },
      { q: 'Có chính sách cho nhà thầu / đại lý không?', a: 'Có. Anh/chị chọn nhu cầu phù hợp trong form để được tư vấn chính sách.' },
    ],
  },

  finalCta: {
    title: 'Gửi hiện trạng mặt sàn để kỹ thuật Fujinano tư vấn',
    description: 'Mô tả loại sàn, diện tích và mục đích sử dụng. Kỹ thuật sẽ liên hệ đề xuất giải pháp và báo giá.',
    primaryCTA: 'Nhận tư vấn giải pháp',
  },

  form: {
    title: 'Nhận tư vấn kỹ thuật sơn sàn',
    description: 'Điền thông tin, kỹ thuật Fujinano sẽ liên hệ trong thời gian sớm nhất.',
    leadType: 'business',
    needOptions: [
      'Sơn sàn nhà xưởng',
      'Sơn sàn kho / logistics',
      'Sơn sàn tầng hầm / bãi xe',
      'Sơn sàn showroom / thương mại',
      'Mở đại lý',
      'Nhu cầu khác',
    ],
    projectTypeOptions: ['Nhà xưởng / kho', 'Tầng hầm / bãi xe', 'Showroom / thương mại', 'Khác'],
  },
};
