import type { LandingPageConfig } from '@/types';
import { getProducts } from '@/content/products';

/* ==========================================================================
   LANDING — /giai-phap-doanh-nghiep (mục 24)
   Đối tượng: nhà thầu, công ty xây dựng, chủ đầu tư, xưởng, KTS, doanh nghiệp.
   Tone: chuyên nghiệp, thiên tài liệu kỹ thuật, mẫu thử, tư vấn dự án. KHÔNG tone bán lẻ.
   ========================================================================== */

export const doanhNghiepConfig: LandingPageConfig = {
  slug: 'giai-phap-doanh-nghiep',

  seo: {
    title: 'Giải pháp sơn & chống thấm cho dự án và doanh nghiệp | Fujinano',
    description:
      'Fujinano cung cấp giải pháp vật liệu sơn, chống thấm, sơn sàn cho nhà thầu, chủ đầu tư, xưởng và kiến trúc sư: tư vấn kỹ thuật, mẫu thử và báo giá theo dự án.',
    canonical: '/giai-phap-doanh-nghiep',
  },

  breadcrumb: [
    { label: 'Trang chủ', href: '/' },
    { label: 'Giải pháp doanh nghiệp' },
  ],

  hero: {
    eyebrow: 'Giải pháp cho dự án & doanh nghiệp',
    headline: 'Giải pháp vật liệu sơn & chống thấm cho nhà thầu và chủ đầu tư',
    subheadline:
      'Dành cho nhà thầu, công ty xây dựng, chủ đầu tư, xưởng và kiến trúc sư. Tư vấn kỹ thuật theo hồ sơ, hỗ trợ mẫu thử và báo giá theo khối lượng dự án.',
    image: '/images/cong-trinh/kim-loai.webp',
    imageAlt: 'Kết cấu thép công trình sơn hệ Fujinano cho dự án doanh nghiệp',
    primaryCTA: 'Nhận giải pháp kỹ thuật',
    secondaryCTA: 'Nhận báo giá dự án',
    trustNote: 'Bộ phận dự án sẽ liên hệ tư vấn theo yêu cầu kỹ thuật của công trình.',
  },

  painPoints: {
    title: 'Với dự án của doanh nghiệp, anh/chị có đang cần?',
    items: [
      { title: 'Giải pháp đúng yêu cầu kỹ thuật', description: 'Vật liệu phù hợp hạng mục và điều kiện thi công.' },
      { title: 'Tư vấn theo hồ sơ/spec', description: 'Cần đối chiếu với yêu cầu kỹ thuật của dự án.' },
      { title: 'Mẫu thử trước khi quyết định', description: 'Cần kiểm chứng trên bề mặt thực tế.' },
      { title: 'Báo giá theo khối lượng', description: 'Cần phương án giá cho số lượng lớn.' },
      { title: 'Nguồn cung ổn định theo tiến độ', description: 'Đảm bảo cấp hàng đúng tiến độ thi công.' },
      { title: 'Hỗ trợ kỹ thuật tại công trình', description: 'Cần hướng dẫn thi công đúng quy trình.' },
    ],
  },

  solution: {
    title: 'Fujinano đồng hành theo vòng đời dự án',
    description:
      'Từ khảo sát yêu cầu kỹ thuật đến mẫu thử, báo giá và hỗ trợ thi công — Fujinano phối hợp cùng đội dự án của doanh nghiệp.',
    steps: [
      { title: 'Tiếp nhận yêu cầu kỹ thuật', description: 'Đối chiếu hạng mục, bề mặt và điều kiện thi công.' },
      { title: 'Đề xuất hệ sản phẩm', description: 'Chọn hệ phù hợp yêu cầu và ngân sách dự án.' },
      { title: 'Mẫu thử & nghiệm thu mẫu', description: 'Thử trên bề mặt thực tế trước khi triển khai.' },
      { title: 'Báo giá theo khối lượng', description: 'Phương án giá và cung ứng theo tiến độ.' },
      { title: 'Hỗ trợ thi công & giám sát kỹ thuật', description: 'Hướng dẫn quy trình, số lớp và định mức.' },
    ],
  },

  benefits: {
    title: 'Vì sao doanh nghiệp chọn Fujinano',
    items: [
      { title: 'Tư vấn theo yêu cầu kỹ thuật', description: 'Đề xuất bám hồ sơ và điều kiện công trình.', group: 'technology', proof: '[CẦN BỔ SUNG BẰNG CHỨNG]' },
      { title: 'Hỗ trợ mẫu thử', description: 'Kiểm chứng trên bề mặt thực tế trước khi quyết định.', group: 'application', proof: '[CẦN BỔ SUNG CHI TIẾT]' },
      { title: 'Danh mục đa hạng mục', description: 'Chống thấm, chống nóng, sơn sàn, nano ceramic, sân thể thao.', group: 'performance', proof: undefined },
      { title: 'Hỗ trợ kỹ thuật tại công trình', description: 'Đồng hành trong quá trình thi công.', group: 'support', proof: '[CẦN BỔ SUNG CHI TIẾT]' },
    ],
  },

  evidence: {
    title: 'Hồ sơ & ứng dụng kỹ thuật',
    blocks: [
      {
        type: 'image',
        title: 'Sàn công nghiệp',
        content: 'Hệ sơn phủ sàn bê tông PU cho nhà xưởng.',
        image: '/images/cong-trinh/san-cong-nghiep.webp',
        imageAlt: 'Sàn nhà xưởng phủ sơn PU Fujinano',
      },
      {
        type: 'image',
        title: 'Kết cấu kim loại',
        content: 'Hệ epoxy chống gỉ + phủ PU cho thép, nhà tiền chế.',
        image: '/images/cong-trinh/kim-loai.webp',
        imageAlt: 'Kết cấu thép sơn hệ Fujinano',
      },
      { type: 'metric', title: 'Hồ sơ dự án & chứng nhận đã được duyệt', pending: true, note: '[CẦN BỔ SUNG DỰ ÁN & CHỨNG NHẬN ĐÃ XÁC NHẬN]' },
    ],
  },

  products: {
    title: 'Danh mục giải pháp theo hạng mục',
    note: 'Hệ sản phẩm cuối cùng xác nhận theo yêu cầu kỹ thuật của dự án. Thông số/quy cách theo tài liệu chính thức.',
    items: getProducts(['CT-502', 'PU-700', 'PU-2K SNX', 'PU-600']),
  },

  process: {
    title: 'Quy trình làm việc với dự án',
    steps: [
      { title: '1. Gửi yêu cầu', description: 'Mô tả hạng mục và yêu cầu kỹ thuật.' },
      { title: '2. Bộ phận dự án liên hệ', description: 'Trao đổi hồ sơ và phạm vi công việc.' },
      { title: '3. Khảo sát & đề xuất', description: 'Đề xuất hệ sản phẩm và phương án.' },
      { title: '4. Mẫu thử', description: 'Thử trên bề mặt thực tế nếu cần.' },
      { title: '5. Báo giá & hợp đồng', description: 'Báo giá theo khối lượng và tiến độ.' },
      { title: '6. Cung ứng & hỗ trợ thi công', description: 'Giao hàng theo tiến độ, hỗ trợ kỹ thuật.' },
    ],
  },

  faq: {
    title: 'Câu hỏi thường gặp',
    items: [
      { q: 'Fujinano có tư vấn theo hồ sơ kỹ thuật dự án không?', a: 'Có. Bộ phận dự án tiếp nhận yêu cầu kỹ thuật và đề xuất hệ sản phẩm phù hợp hạng mục.' },
      { q: 'Có hỗ trợ mẫu thử không?', a: 'Fujinano hỗ trợ mẫu thử theo dự án để kiểm chứng trên bề mặt thực tế; phạm vi cụ thể trao đổi theo từng công trình.' },
      { q: 'Báo giá cho khối lượng lớn thế nào?', a: 'Báo giá theo khối lượng và tiến độ dự án. Bộ phận dự án sẽ tư vấn phương án cung ứng phù hợp.' },
      { q: 'Có tài liệu kỹ thuật (TDS) không?', a: 'Có TDS theo từng sản phẩm; tài liệu cung cấp theo hồ sơ đã xác nhận — [CẦN XÁC NHẬN].' },
      { q: 'Có hỗ trợ kỹ thuật tại công trình không?', a: 'Có. Fujinano hỗ trợ hướng dẫn quy trình, số lớp và định mức trong quá trình thi công.' },
      { q: 'Fujinano cung cấp cho những hạng mục nào?', a: 'Chống thấm, chống nóng, sơn sàn, nano ceramic và sân thể thao. Kỹ thuật tư vấn theo yêu cầu dự án.' },
    ],
  },

  finalCta: {
    title: 'Gửi yêu cầu kỹ thuật dự án cho Fujinano',
    description: 'Mô tả hạng mục, khối lượng và yêu cầu kỹ thuật. Bộ phận dự án sẽ liên hệ tư vấn và báo giá.',
    primaryCTA: 'Nhận giải pháp kỹ thuật',
  },

  form: {
    title: 'Nhận giải pháp kỹ thuật cho dự án',
    description: 'Điền thông tin, bộ phận dự án Fujinano sẽ liên hệ trong thời gian sớm nhất.',
    leadType: 'business',
    needLabel: 'Nhu cầu dự án',
    needOptions: [
      'Chống thấm công trình',
      'Chống nóng công trình',
      'Sơn sàn công nghiệp',
      'Sơn hoàn thiện dự án',
      'Sân thể thao / Pickleball',
      'Tư vấn kỹ thuật / mẫu thử',
      'Nhu cầu khác',
    ],
    projectTypeLabel: 'Loại hình doanh nghiệp',
    projectTypeOptions: [
      'Nhà thầu thi công',
      'Công ty xây dựng',
      'Chủ đầu tư',
      'Xưởng / nhà máy',
      'Kiến trúc sư / tư vấn thiết kế',
      'Khác',
    ],
    areaLabel: 'Quy mô dự án ước tính (m²)',
    descriptionLabel: 'Mô tả hạng mục / yêu cầu kỹ thuật',
    descriptionPlaceholder: 'VD: chống thấm tầng hầm 1.200m², cần mẫu thử và báo giá theo tiến độ.',
  },
};
