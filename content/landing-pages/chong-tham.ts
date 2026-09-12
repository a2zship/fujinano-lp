import type { LandingPageConfig } from '@/types';
import { getProducts } from '@/content/products';

/* ==========================================================================
   LANDING PAGE V1 — /giai-phap/chong-tham (mục 34)
   Template chuẩn. Mọi nội dung render từ config này (mục 7).
   Nguyên tắc: Vấn đề -> hậu quả -> giải pháp -> bằng chứng -> sản phẩm ->
   tư vấn -> báo giá -> lead (mục 2.1). Không claim chưa được chứng minh (mục 19).
   ========================================================================== */

export const chongThamConfig: LandingPageConfig = {
  slug: 'chong-tham',

  seo: {
    title: 'Giải pháp chống thấm cho sân thượng, tường ngoài & khu vực tiếp xúc nước | Fujinano',
    description:
      'Xử lý thấm sân thượng, tường ngoài, nhà vệ sinh và khu vực tiếp xúc nước. Kỹ thuật Fujinano khảo sát nguyên nhân và đề xuất hệ sản phẩm phù hợp. Nhận tư vấn kỹ thuật miễn phí.',
    canonical: '/giai-phap/chong-tham',
  },

  breadcrumb: [
    { label: 'Trang chủ', href: '/' },
    { label: 'Giải pháp', href: '/' },
    { label: 'Chống thấm' },
  ],

  hero: {
    eyebrow: 'Giải pháp chống thấm Fujinano',
    headline: 'Xử lý dứt điểm thấm sân thượng, tường ngoài và khu vực tiếp xúc nước',
    subheadline:
      'Dành cho nhà ở, công trình đã thấm hoặc cần chống thấm mới. Kỹ thuật Fujinano khảo sát nguyên nhân trước khi chọn hệ sản phẩm — không xử lý theo kiểu chắp vá.',
    image: '/images/cong-trinh/villa.webp',
    imageAlt: 'Ngôi nhà được bảo vệ bằng giải pháp sơn & chống thấm Fujinano',
    primaryCTA: 'Nhận tư vấn kỹ thuật',
    secondaryCTA: 'Nhận báo giá',
    trustNote:
      'Kỹ thuật liên hệ tư vấn theo tình trạng công trình của anh/chị.',
  },

  painPoints: {
    title: 'Công trình của anh/chị có đang gặp tình trạng này?',
    items: [
      { title: 'Tường xuất hiện vết ẩm, loang màu', description: 'Ẩm thấm từ ngoài vào hoặc từ sàn dâng lên.' },
      { title: 'Sơn bong tróc, phồng rộp', description: 'Lớp sơn mất bám do bề mặt còn ẩm.' },
      { title: 'Mốc đen tái phát nhiều lần', description: 'Xử lý bề mặt nhưng chưa xử lý nguyên nhân.' },
      { title: 'Trần bị ố nước, thấm dột', description: 'Nước ngấm qua sàn sân thượng, ban công.' },
      { title: 'Lớp chống thấm cũ nhanh xuống cấp', description: 'Vật liệu không phù hợp hoặc thi công sai lớp.' },
      { title: 'Đã sửa nhiều lần nhưng vẫn thấm', description: 'Thiếu bước đánh giá và xử lý gốc.' },
    ],
  },

  solution: {
    title: 'Fujinano xử lý theo nguyên nhân, không chỉ che bề mặt',
    description:
      'Thấm là hậu quả — nguyên nhân nằm ở bề mặt, khe nứt, cổ ống hoặc chân tường. Quy trình dưới đây giúp chọn đúng hệ sản phẩm cho từng tình trạng.',
    steps: [
      { title: 'Đánh giá bề mặt', description: 'Xác định vị trí, mức độ và đường đi của nước.' },
      { title: 'Xử lý nguyên nhân', description: 'Vệ sinh, trám khe nứt, xử lý cổ ống và chân tường.' },
      { title: 'Chọn hệ sản phẩm phù hợp', description: 'Chọn vật liệu theo bề mặt và điều kiện tiếp xúc nước.' },
      { title: 'Thi công đúng lớp', description: 'Thi công theo số lớp và định mức khuyến nghị.' },
      { title: 'Hoàn thiện & kiểm tra', description: 'Kiểm tra khả năng ngăn nước trước khi bàn giao.' },
    ],
  },

  benefits: {
    title: 'Vì sao chọn giải pháp chống thấm Fujinano',
    items: [
      {
        title: 'Xử lý theo nguyên nhân',
        description: 'Khảo sát trước khi đề xuất, hạn chế tình trạng thấm lại.',
        group: 'technology',
        proof: '[CẦN BỔ SUNG BẰNG CHỨNG]',
      },
      {
        title: 'Hệ sản phẩm cho nhiều bề mặt',
        description: 'Có lựa chọn cho sân thượng, tường ngoài và khu vực ẩm ướt.',
        group: 'performance',
        proof: '[CẦN BỔ SUNG BẰNG CHỨNG]',
      },
      {
        title: 'Hỗ trợ kỹ thuật thi công',
        description: 'Hướng dẫn xử lý bề mặt, số lớp và định mức theo từng dòng.',
        group: 'support',
        proof: '[CẦN BỔ SUNG BẰNG CHỨNG]',
      },
      {
        title: 'Tư vấn theo công trình thực tế',
        description: 'Đề xuất bám theo tình trạng và ngân sách của khách.',
        group: 'application',
        proof: '[CẦN BỔ SUNG BẰNG CHỨNG]',
      },
    ],
  },

  evidence: {
    title: 'Bằng chứng thực tế',
    blocks: [
      { type: 'before_after', title: 'Trước / sau khi xử lý thấm', pending: true, note: '[CẦN BỔ SUNG HÌNH ẢNH THỰC TẾ]' },
      { type: 'video', title: 'Video test ngăn nước', pending: true, note: '[CẦN BỔ SUNG VIDEO TEST THẬT]' },
      { type: 'metric', title: 'Kết quả thử nghiệm chống thấm', pending: true, note: '[CẦN BỔ SUNG SỐ LIỆU TEST ĐÃ XÁC NHẬN]' },
    ],
  },

  products: {
    title: 'Sản phẩm phù hợp cho nhu cầu chống thấm',
    note: 'Kỹ thuật sẽ chốt sản phẩm cuối cùng sau khi đánh giá bề mặt. Thông số quy cách hiển thị theo TDS đã xác nhận.',
    items: getProducts(['CT-502', 'PU-380', 'PU-700']),
  },

  process: {
    title: 'Điều gì xảy ra sau khi anh/chị để lại thông tin',
    steps: [
      { title: '1. Gửi nhu cầu', description: 'Điền tình trạng công trình qua form.' },
      { title: '2. Kỹ thuật liên hệ', description: 'Bộ phận kỹ thuật gọi lại tư vấn.' },
      { title: '3. Đánh giá công trình', description: 'Khảo sát bề mặt và nguyên nhân thấm.' },
      { title: '4. Đề xuất giải pháp', description: 'Chọn hệ sản phẩm và cách thi công.' },
      { title: '5. Báo giá', description: 'Báo giá vật tư/thi công theo thực tế.' },
      { title: '6. Thi công hoặc cấp vật tư', description: 'Triển khai hoặc giao vật tư kèm hướng dẫn.' },
    ],
  },

  caseStudies: {
    title: 'Công trình tiêu biểu',
    items: [], // [CẦN BỔ SUNG CASE STUDY ĐÃ ĐƯỢC DUYỆT] — ẩn khi rỗng.
  },

  faq: {
    title: 'Câu hỏi thường gặp',
    items: [
      { q: 'Sản phẩm dùng được cho bề mặt nào?', a: 'Fujinano có các dòng cho sân thượng, tường ngoài và khu vực tiếp xúc nước. Kỹ thuật sẽ tư vấn dòng phù hợp sau khi đánh giá bề mặt.' },
      { q: 'Có cần xử lý lớp chống thấm/sơn cũ không?', a: 'Thông thường cần vệ sinh và xử lý bề mặt cũ để lớp mới bám tốt. Mức độ xử lý tuỳ tình trạng thực tế của công trình.' },
      { q: 'Bao lâu thì khô và dùng được?', a: 'Thời gian khô phụ thuộc dòng sản phẩm, số lớp và điều kiện thời tiết. Thông số cụ thể theo TDS của từng sản phẩm — [CẦN XÁC NHẬN THÔNG SỐ].' },
      { q: 'Có cần thợ chuyên nghiệp không?', a: 'Một số hạng mục có thể tự thi công theo hướng dẫn; hạng mục phức tạp nên có thợ. Fujinano hỗ trợ hướng dẫn kỹ thuật.' },
      { q: 'Fujinano có hỗ trợ kỹ thuật không?', a: 'Có. Bộ phận kỹ thuật hỗ trợ tư vấn xử lý bề mặt, chọn sản phẩm, số lớp và định mức.' },
      { q: 'Mua ở đâu và có giao hàng không?', a: 'Anh/chị để lại thông tin, Fujinano sẽ tư vấn kênh mua và phương án giao hàng phù hợp khu vực — [CẦN XÁC NHẬN CHÍNH SÁCH GIAO HÀNG].' },
      { q: 'Có chính sách cho đại lý không?', a: 'Có chương trình đại lý phân phối. Anh/chị quan tâm có thể chọn nhu cầu "Mở đại lý" trong form để được tư vấn.' },
    ],
  },

  finalCta: {
    title: 'Gửi tình trạng công trình để kỹ thuật Fujinano tư vấn',
    description:
      'Mô tả ngắn vị trí bị thấm và diện tích ước tính. Kỹ thuật sẽ liên hệ đề xuất giải pháp và báo giá.',
    primaryCTA: 'Nhận tư vấn giải pháp',
  },

  form: {
    title: 'Nhận tư vấn kỹ thuật chống thấm',
    description: 'Điền thông tin, kỹ thuật Fujinano sẽ liên hệ trong thời gian sớm nhất.',
    leadType: 'homeowner',
    needOptions: [
      'Chống thấm sân thượng',
      'Chống thấm tường ngoài',
      'Chống thấm nhà vệ sinh / khu vực ẩm',
      'Chống thấm ban công / sê nô',
      'Xử lý thấm dột / trần ố nước',
      'Mở đại lý',
      'Nhu cầu khác',
    ],
    projectTypeOptions: [
      'Nhà ở gia đình',
      'Nhà xưởng / kho',
      'Công trình thương mại',
      'Khác',
    ],
  },
};
