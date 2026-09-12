import type { LandingPageConfig } from '@/types';
import { getProducts } from '@/content/products';

/* ==========================================================================
   LANDING — /dai-ly (mục 22)
   Mục tiêu: thu lead ĐỐI TÁC PHÂN PHỐI, không bán trực tiếp cho người tiêu dùng.
   Chính sách chiết khấu render từ content/brand.ts (không hard-code UI).
   ========================================================================== */

export const daiLyConfig: LandingPageConfig = {
  slug: 'dai-ly',

  seo: {
    title: 'Trở thành đối tác phân phối Fujinano — Chính sách đại lý cấp 1 | Fujinano',
    description:
      'Cơ hội phân phối sơn & chống thấm Fujinano: chính sách chiết khấu theo nhóm, hỗ trợ marketing, đào tạo kỹ thuật và tư vấn khu vực. Đăng ký làm đại lý.',
    canonical: '/dai-ly',
  },

  breadcrumb: [
    { label: 'Trang chủ', href: '/' },
    { label: 'Đại lý' },
  ],

  hero: {
    eyebrow: 'Đối tác phân phối Fujinano',
    headline: 'Trở thành đối tác phân phối sơn & chống thấm Fujinano',
    subheadline:
      'Dành cho cửa hàng vật liệu xây dựng, đại lý sơn, nhà thầu và nhà phân phối khu vực. Chính sách chiết khấu theo nhóm, hỗ trợ marketing và đào tạo kỹ thuật.',
    imageAlt: 'Danh mục sản phẩm sơn và chống thấm Fujinano cho đại lý',
    primaryCTA: 'Đăng ký làm đại lý',
    secondaryCTA: 'Nhận chính sách chi tiết',
    trustNote: 'Bộ phận phát triển đại lý sẽ liên hệ tư vấn theo khu vực của anh/chị.',
  },

  painPoints: {
    title: 'Kinh doanh sơn & chống thấm, anh/chị có đang gặp?',
    items: [
      { title: 'Chiết khấu mỏng, biên lợi nhuận thấp', description: 'Khó tối ưu lợi nhuận trên mỗi đơn hàng.' },
      { title: 'Nguồn hàng thất thường', description: 'Ảnh hưởng khả năng giao hàng cho khách.' },
      { title: 'Thiếu hỗ trợ marketing tại điểm bán', description: 'Khó thu hút và giữ khách hàng.' },
      { title: 'Không được đào tạo kỹ thuật sản phẩm', description: 'Khó tư vấn đúng cho khách và nhà thầu.' },
      { title: 'Thiếu hỗ trợ khi có công trình lớn', description: 'Cần đội kỹ thuật đứng sau khi khách hỏi sâu.' },
      { title: 'Danh mục chưa đủ rộng để bán chéo', description: 'Bỏ lỡ nhu cầu chống thấm, chống nóng, sơn sàn…' },
    ],
  },

  solution: {
    title: 'Fujinano đồng hành cùng đối tác từ hàng hoá đến bán hàng',
    description:
      'Không chỉ cấp hàng — Fujinano hỗ trợ đối tác về kỹ thuật, marketing và chính sách để bán được nhiều hơn.',
    steps: [
      { title: 'Cấp hàng theo chính sách nhóm', description: 'Chiết khấu rõ ràng theo nhóm sản phẩm.' },
      { title: 'Hỗ trợ kỹ thuật', description: 'Đội kỹ thuật hỗ trợ tư vấn khi có công trình.' },
      { title: 'Hỗ trợ marketing điểm bán', description: 'Vật phẩm và nội dung hỗ trợ bán hàng.' },
      { title: 'Đào tạo sản phẩm', description: 'Hướng dẫn kiến thức và cách tư vấn sản phẩm.' },
      { title: 'Tư vấn khu vực', description: 'Phối hợp phát triển thị trường theo khu vực.' },
    ],
  },

  benefits: {
    title: 'Quyền lợi khi làm đối tác Fujinano',
    items: [
      { title: 'Chính sách chiết khấu theo nhóm', description: 'Mức chiết khấu công bố rõ ràng theo nhóm sản phẩm.', group: 'performance', proof: 'Xem bảng chính sách bên dưới' },
      { title: 'Hỗ trợ kỹ thuật đứng sau', description: 'Đội kỹ thuật hỗ trợ đối tác khi tư vấn công trình.', group: 'support', proof: '[CẦN BỔ SUNG BẰNG CHỨNG]' },
      { title: 'Hỗ trợ marketing điểm bán', description: 'Vật phẩm/nội dung hỗ trợ trưng bày và bán hàng.', group: 'application', proof: '[CẦN BỔ SUNG CHI TIẾT]' },
      { title: 'Danh mục đa dạng để bán chéo', description: 'Chống thấm, chống nóng, sơn sàn, nano ceramic, sân pickleball…', group: 'technology', proof: undefined },
    ],
  },

  products: {
    title: 'Danh mục sản phẩm cho đối tác',
    note: 'Danh mục đầy đủ và bảng giá đối tác được cung cấp sau khi ký hợp đồng. Thông số/quy cách theo TDS đã xác nhận.',
    items: getProducts(['CT-502', 'PU-600', 'PU-680', 'FJ-368C']),
  },

  policy: {
    title: 'Chính sách đại lý cấp 1 — khu vực miền Nam 2026',
    description:
      'Mức chiết khấu theo nhóm sản phẩm. Điều kiện và chi tiết đầy đủ theo hồ sơ chính sách chính thức.',
    showPromotion: true,
  },

  process: {
    title: 'Quy trình trở thành đối tác',
    steps: [
      { title: '1. Đăng ký thông tin', description: 'Điền thông tin và khu vực qua form.' },
      { title: '2. Bộ phận đại lý liên hệ', description: 'Trao đổi nhu cầu và khu vực phân phối.' },
      { title: '3. Trao đổi chính sách', description: 'Thống nhất nhóm sản phẩm và chiết khấu.' },
      { title: '4. Ký hợp đồng đại lý', description: 'Hoàn tất hợp đồng phân phối.' },
      { title: '5. Đặt hàng & nhận hỗ trợ', description: 'Thanh toán, nhận hàng và bộ hỗ trợ bán hàng.' },
    ],
  },

  faq: {
    title: 'Câu hỏi thường gặp',
    items: [
      { q: 'Điều kiện để làm đại lý là gì?', a: 'Cần ký hợp đồng đại lý và thanh toán trước khi nhận hàng. Điều kiện doanh số và phân nhóm sản phẩm chi tiết theo hồ sơ chính sách chính thức — [CẦN XÁC NHẬN].' },
      { q: 'Mức chiết khấu là bao nhiêu?', a: 'Chiết khấu công bố theo nhóm sản phẩm (xem bảng chính sách trên trang). Mức áp dụng cụ thể tuỳ nhóm và thoả thuận hợp đồng.' },
      { q: 'Fujinano hỗ trợ đại lý những gì?', a: 'Hỗ trợ kỹ thuật, marketing điểm bán và đào tạo sản phẩm. Chi tiết trao đổi khi làm việc với bộ phận đại lý.' },
      { q: 'Có giới hạn khu vực không?', a: 'Fujinano phối hợp phát triển thị trường theo khu vực. Bộ phận đại lý sẽ tư vấn cụ thể theo địa bàn của anh/chị.' },
      { q: 'Có chương trình khuyến mãi cho đối tác không?', a: 'Có các chương trình theo từng thời điểm (xem mục khuyến mãi trên trang). Điều kiện áp dụng theo thể lệ chính thức.' },
      { q: 'Tôi chưa có cửa hàng thì làm đại lý được không?', a: 'Anh/chị vẫn có thể đăng ký; bộ phận đại lý sẽ tư vấn hình thức hợp tác phù hợp với năng lực và khu vực.' },
    ],
  },

  finalCta: {
    title: 'Đăng ký làm đối tác phân phối Fujinano',
    description: 'Để lại thông tin và khu vực. Bộ phận phát triển đại lý sẽ liên hệ trao đổi chính sách chi tiết.',
    primaryCTA: 'Đăng ký làm đại lý',
  },

  form: {
    title: 'Đăng ký làm đại lý Fujinano',
    description: 'Điền thông tin, bộ phận đại lý sẽ liên hệ trong thời gian sớm nhất.',
    leadType: 'dealer',
    needOptions: [
      'Mở đại lý phân phối',
      'Làm điểm bán / cửa hàng VLXD',
      'Nhà thầu lấy hàng số lượng',
      'Nhà phân phối khu vực',
      'Nhu cầu khác',
    ],
    projectTypeLabel: 'Loại hình kinh doanh',
    projectTypeOptions: [
      'Cửa hàng vật liệu xây dựng',
      'Đại lý sơn',
      'Nhà thầu thi công',
      'Nhà phân phối khu vực',
      'Khác',
    ],
    showArea: false,
    descriptionLabel: 'Khu vực mong muốn / ghi chú',
    descriptionPlaceholder: 'VD: khu vực Cần Thơ và các huyện lân cận, đã có cửa hàng VLXD.',
  },
};
