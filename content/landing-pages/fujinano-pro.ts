import type { LandingPageConfig } from '@/types';

/* ==========================================================================
   LANDING — /fujinano-pro (mục 23)
   Mục tiêu: tuyển thợ vào mạng lưới Fujinano Pro.
   ========================================================================== */

export const fujinanoProConfig: LandingPageConfig = {
  slug: 'fujinano-pro',

  seo: {
    title: 'Fujinano Pro — Mạng lưới thợ & đội thi công sơn, chống thấm | Fujinano',
    description:
      'Tham gia Fujinano Pro: nhận công trình, hỗ trợ kỹ thuật và đào tạo sản phẩm cho thợ và đội thi công sơn, chống thấm, sơn sàn. Đăng ký Fujinano Pro.',
    canonical: '/fujinano-pro',
  },

  breadcrumb: [
    { label: 'Trang chủ', href: '/' },
    { label: 'Fujinano Pro' },
  ],

  hero: {
    eyebrow: 'Mạng lưới thợ Fujinano Pro',
    headline: 'Tham gia mạng lưới thợ & đội thi công Fujinano Pro',
    subheadline:
      'Dành cho thợ sơn, thợ chống thấm, thợ sơn sàn và đội thi công. Kết nối công trình, được hỗ trợ kỹ thuật và đào tạo sản phẩm.',
    imageAlt: 'Đội thi công trong mạng lưới Fujinano Pro',
    primaryCTA: 'Đăng ký Fujinano Pro',
    secondaryCTA: 'Tìm hiểu quyền lợi',
    trustNote: 'Bộ phận Fujinano Pro sẽ liên hệ theo khu vực hoạt động của anh/chị.',
  },

  painPoints: {
    title: 'Làm nghề thi công, anh/chị có đang gặp?',
    items: [
      { title: 'Công trình không đều', description: 'Lúc nhiều lúc ít, khó chủ động thu nhập.' },
      { title: 'Thiếu hỗ trợ kỹ thuật khi gặp ca khó', description: 'Không có ai đứng sau khi khách hỏi sâu.' },
      { title: 'Khó tiếp cận vật tư giá tốt', description: 'Mua lẻ nên chi phí cao, khó cạnh tranh.' },
      { title: 'Chưa được đào tạo sản phẩm mới', description: 'Khó nhận việc dùng dòng sản phẩm mới.' },
      { title: 'Thiếu uy tín/nhận diện với khách', description: 'Khó tạo niềm tin khi báo giá.' },
    ],
  },

  solution: {
    title: 'Fujinano Pro hỗ trợ thợ từ công trình đến kỹ thuật',
    description:
      'Tham gia mạng lưới để nhận kết nối công trình, hỗ trợ kỹ thuật và đào tạo — chủ động hơn trong công việc.',
    steps: [
      { title: 'Kết nối công trình', description: 'Ưu tiên giới thiệu công trình theo khu vực.' },
      { title: 'Hỗ trợ kỹ thuật', description: 'Đội kỹ thuật hỗ trợ khi gặp ca khó.' },
      { title: 'Vật tư thuận tiện', description: 'Tiếp cận sản phẩm Fujinano cho công trình.' },
      { title: 'Đào tạo sản phẩm', description: 'Hướng dẫn thi công đúng dòng sản phẩm.' },
      { title: 'Xây uy tín trong mạng lưới', description: 'Được ghi nhận khi làm tốt.' },
    ],
  },

  benefits: {
    title: 'Quyền lợi khi tham gia Fujinano Pro',
    items: [
      { title: 'Kết nối công trình theo khu vực', description: 'Tăng cơ hội nhận việc phù hợp năng lực.', group: 'support', proof: '[CẦN BỔ SUNG CHI TIẾT]' },
      { title: 'Hỗ trợ kỹ thuật đứng sau', description: 'Được tư vấn khi gặp bề mặt/ca thi công khó.', group: 'technology', proof: '[CẦN BỔ SUNG BẰNG CHỨNG]' },
      { title: 'Đào tạo thi công sản phẩm', description: 'Nắm đúng cách thi công từng dòng.', group: 'application', proof: '[CẦN BỔ SUNG CHI TIẾT]' },
      { title: 'Chính sách cho thành viên', description: 'Quyền lợi cụ thể sẽ trao đổi khi tham gia.', group: 'performance', proof: '[CẦN XÁC NHẬN CHÍNH SÁCH]' },
    ],
  },

  process: {
    title: 'Quy trình tham gia Fujinano Pro',
    steps: [
      { title: '1. Đăng ký thông tin', description: 'Điền nghề, kinh nghiệm và khu vực.' },
      { title: '2. Fujinano Pro liên hệ', description: 'Trao đổi năng lực và nhu cầu công việc.' },
      { title: '3. Xác nhận tham gia', description: 'Hướng dẫn quyền lợi và cách phối hợp.' },
      { title: '4. Nhận đào tạo & kết nối', description: 'Tham gia đào tạo và nhận kết nối công trình.' },
    ],
  },

  faq: {
    title: 'Câu hỏi thường gặp',
    items: [
      { q: 'Ai có thể tham gia Fujinano Pro?', a: 'Thợ sơn, thợ chống thấm, thợ sơn sàn và đội thi công. Bộ phận Fujinano Pro sẽ trao đổi cụ thể theo năng lực và khu vực.' },
      { q: 'Tham gia có mất phí không?', a: 'Điều kiện tham gia và chính sách cụ thể sẽ được trao đổi khi đăng ký — [CẦN XÁC NHẬN].' },
      { q: 'Có được đảm bảo công trình đều không?', a: 'Fujinano ưu tiên kết nối công trình theo khu vực, nhưng số lượng phụ thuộc nhu cầu thực tế từng thời điểm.' },
      { q: 'Có được đào tạo không?', a: 'Có. Thành viên được hướng dẫn thi công đúng cách cho từng dòng sản phẩm.' },
      { q: 'Đăng ký rồi thì bao lâu được liên hệ?', a: 'Bộ phận Fujinano Pro sẽ liên hệ trong thời gian sớm nhất sau khi nhận thông tin.' },
    ],
  },

  finalCta: {
    title: 'Đăng ký tham gia mạng lưới Fujinano Pro',
    description: 'Để lại nghề, kinh nghiệm và khu vực hoạt động. Bộ phận Fujinano Pro sẽ liên hệ trao đổi.',
    primaryCTA: 'Đăng ký Fujinano Pro',
  },

  form: {
    title: 'Đăng ký Fujinano Pro',
    description: 'Điền thông tin, bộ phận Fujinano Pro sẽ liên hệ trong thời gian sớm nhất.',
    leadType: 'worker',
    needLabel: 'Nghề chính',
    needOptions: [
      'Thợ sơn',
      'Thợ chống thấm',
      'Thợ sơn sàn / PU',
      'Thợ thi công sân thể thao',
      'Đội thi công',
      'Khác',
    ],
    projectTypeLabel: 'Số năm kinh nghiệm',
    projectTypeOptions: ['Dưới 1 năm', '1–3 năm', '3–5 năm', 'Trên 5 năm'],
    showArea: false,
    descriptionLabel: 'Khu vực hoạt động, quy mô đội, Zalo/Facebook',
    descriptionPlaceholder: 'VD: nhận công trình ở Cần Thơ, đội 4 người, Zalo 09xx…',
  },
};
