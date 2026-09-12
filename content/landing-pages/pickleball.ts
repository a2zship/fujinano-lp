import type { LandingPageConfig } from '@/types';
import { getProducts } from '@/content/products';

/* ==========================================================================
   LANDING — /giai-phap/pickleball (sơn sân Pickleball)
   KHÔNG tự khẳng định "đạt chuẩn thi đấu quốc tế" nếu chưa có chứng nhận (mục 19, 31).
   ========================================================================== */

export const pickleballConfig: LandingPageConfig = {
  slug: 'pickleball',

  seo: {
    title: 'Giải pháp sơn sân Pickleball cho chủ sân và nhà đầu tư | Fujinano',
    description:
      'Sơn phủ mặt sân Pickleball cho sân làm mới và sân cần cải tạo. Kỹ thuật Fujinano khảo sát mặt nền và đề xuất hệ sơn phù hợp. Nhận tư vấn kỹ thuật miễn phí.',
    canonical: '/giai-phap/pickleball',
  },

  breadcrumb: [
    { label: 'Trang chủ', href: '/' },
    { label: 'Giải pháp', href: '/' },
    { label: 'Sân Pickleball' },
  ],

  hero: {
    eyebrow: 'Giải pháp sân Pickleball Fujinano',
    headline: 'Giải pháp sơn phủ mặt sân Pickleball cho sân mới và sân cải tạo',
    subheadline:
      'Dành cho chủ sân, nhà đầu tư và nhà thầu thi công. Kỹ thuật Fujinano khảo sát mặt nền trước khi đề xuất hệ sơn và cách thi công.',
    image: '/images/cong-trinh/pickleball-poster.webp',
    imageAlt: 'Giải pháp sơn sân Pickleball Fujinano — dòng PU-888 PICK',
    primaryCTA: 'Nhận tư vấn kỹ thuật',
    secondaryCTA: 'Nhận báo giá',
    trustNote: 'Kỹ thuật liên hệ tư vấn theo hiện trạng mặt nền của anh/chị.',
  },

  painPoints: {
    title: 'Dự án sân của anh/chị có đang gặp tình trạng này?',
    items: [
      { title: 'Cần làm mới mặt sân Pickleball', description: 'Chuẩn bị đầu tư sân và cần chọn hệ sơn phù hợp.' },
      { title: 'Mặt sân cũ bong tróc, phai màu', description: 'Lớp phủ xuống cấp sau thời gian sử dụng.' },
      { title: 'Nền nứt, đọng nước sau mưa', description: 'Thoát nước kém ảnh hưởng thi đấu.' },
      { title: 'Bề mặt không đều, độ bám kém', description: 'Ảnh hưởng trải nghiệm và an toàn người chơi.' },
      { title: 'Cần kẻ line và hoàn thiện đồng bộ', description: 'Yêu cầu thẩm mỹ và bố trí sân rõ ràng.' },
      { title: 'Chưa rõ quy trình & chi phí', description: 'Cần tư vấn vật tư và cách thi công.' },
    ],
  },

  solution: {
    title: 'Fujinano chọn hệ sơn theo mặt nền và điều kiện sử dụng sân',
    description:
      'Chất lượng mặt sân phụ thuộc nền, xử lý bề mặt và hệ sơn phủ. Quy trình dưới đây giúp chọn đúng giải pháp cho sân mới hoặc sân cải tạo.',
    steps: [
      { title: 'Khảo sát mặt nền', description: 'Đánh giá nền, độ phẳng và khả năng thoát nước.' },
      { title: 'Xử lý bề mặt', description: 'Vệ sinh, xử lý nứt và lớp phủ cũ.' },
      { title: 'Chọn hệ sơn phù hợp', description: 'Chọn hệ theo điều kiện sân và ngân sách.' },
      { title: 'Thi công lớp phủ & kẻ line', description: 'Thi công theo số lớp khuyến nghị, hoàn thiện line.' },
      { title: 'Nghiệm thu mặt sân', description: 'Kiểm tra bề mặt trước khi đưa vào sử dụng.' },
    ],
  },

  benefits: {
    title: 'Vì sao chọn giải pháp sân Pickleball Fujinano',
    items: [
      { title: 'Hệ sơn chuyên cho mặt sân', description: 'Có dòng sản phẩm dành cho sân Pickleball.', group: 'technology', proof: '[CẦN BỔ SUNG BẰNG CHỨNG]' },
      { title: 'Phù hợp sân mới & cải tạo', description: 'Có phương án cho cả làm mới và xử lý sân cũ.', group: 'performance', proof: '[CẦN BỔ SUNG BẰNG CHỨNG]' },
      { title: 'Hỗ trợ kỹ thuật thi công', description: 'Hướng dẫn xử lý nền, số lớp và hoàn thiện line.', group: 'support', proof: '[CẦN BỔ SUNG BẰNG CHỨNG]' },
      { title: 'Tư vấn theo dự án thực tế', description: 'Đề xuất bám theo hiện trạng và ngân sách đầu tư.', group: 'application', proof: '[CẦN BỔ SUNG BẰNG CHỨNG]' },
    ],
  },

  evidence: {
    title: 'Bằng chứng thực tế',
    blocks: [
      { type: 'image', title: 'Ảnh sân Pickleball đã thi công', pending: true, note: '[CẦN BỔ SUNG ẢNH CÔNG TRÌNH THẬT]' },
      { type: 'before_after', title: 'Mặt sân trước / sau cải tạo', pending: true, note: '[CẦN BỔ SUNG HÌNH ẢNH THỰC TẾ]' },
      { type: 'metric', title: 'Chứng nhận / kết quả kiểm tra bề mặt', pending: true, note: '[CẦN BỔ SUNG CHỨNG NHẬN / SỐ LIỆU ĐÃ XÁC NHẬN]' },
    ],
  },

  products: {
    title: 'Sản phẩm cho sân Pickleball',
    note: 'Kỹ thuật xác nhận hệ sơn cuối cùng sau khảo sát mặt nền. Thông số/quy cách hiển thị theo TDS đã xác nhận.',
    items: getProducts(['PU-888 PICK']),
  },

  process: {
    title: 'Điều gì xảy ra sau khi anh/chị để lại thông tin',
    steps: [
      { title: '1. Gửi nhu cầu', description: 'Điền thông tin dự án sân qua form.' },
      { title: '2. Kỹ thuật liên hệ', description: 'Bộ phận kỹ thuật gọi lại tư vấn.' },
      { title: '3. Khảo sát mặt nền', description: 'Đánh giá nền và điều kiện thi công.' },
      { title: '4. Đề xuất giải pháp', description: 'Chọn hệ sơn và phương án thi công.' },
      { title: '5. Báo giá', description: 'Báo giá vật tư/thi công theo diện tích sân.' },
      { title: '6. Thi công hoặc cấp vật tư', description: 'Triển khai hoặc giao vật tư kèm hướng dẫn.' },
    ],
  },

  caseStudies: { title: 'Công trình tiêu biểu', items: [] },

  faq: {
    title: 'Câu hỏi thường gặp',
    items: [
      { q: 'Làm được cả sân mới và sân cải tạo không?', a: 'Được. Fujinano có phương án cho cả sân làm mới và sân cần xử lý lại bề mặt.' },
      { q: 'Có thi công trọn gói kèm kẻ line không?', a: 'Kỹ thuật sẽ tư vấn phạm vi thi công (lớp phủ, hoàn thiện, kẻ line) theo nhu cầu dự án.' },
      { q: 'Mặt sân có đạt chuẩn thi đấu không?', a: 'Yêu cầu kỹ thuật và tiêu chuẩn cụ thể sẽ được tư vấn theo dự án; chứng nhận/thông số công bố khi đã xác nhận — [CẦN XÁC NHẬN].' },
      { q: 'Chi phí tính thế nào?', a: 'Chi phí phụ thuộc diện tích, hiện trạng nền và hệ sơn. Kỹ thuật báo giá sau khảo sát.' },
      { q: 'Fujinano có hỗ trợ kỹ thuật không?', a: 'Có. Bộ phận kỹ thuật hỗ trợ xử lý nền, chọn hệ sơn, số lớp và hoàn thiện.' },
      { q: 'Có chính sách cho nhà thầu / đại lý không?', a: 'Có. Anh/chị chọn nhu cầu phù hợp trong form để được tư vấn chính sách.' },
    ],
  },

  finalCta: {
    title: 'Gửi thông tin dự án sân để kỹ thuật Fujinano tư vấn',
    description: 'Mô tả hiện trạng nền, diện tích và số sân dự kiến. Kỹ thuật sẽ liên hệ đề xuất giải pháp và báo giá.',
    primaryCTA: 'Nhận tư vấn giải pháp',
  },

  form: {
    title: 'Nhận tư vấn kỹ thuật sân Pickleball',
    description: 'Điền thông tin, kỹ thuật Fujinano sẽ liên hệ trong thời gian sớm nhất.',
    leadType: 'business',
    needOptions: [
      'Làm mới mặt sân Pickleball',
      'Cải tạo mặt sân cũ',
      'Tư vấn vật tư cho nhà thầu',
      'Mở đại lý',
      'Nhu cầu khác',
    ],
    projectTypeOptions: ['Chủ sân / nhà đầu tư', 'Nhà thầu thi công', 'Khác'],
  },
};
