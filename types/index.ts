/* ==========================================================================
   FUJINANO — Kiểu dữ liệu dùng chung cho toàn hệ thống landing page
   ========================================================================== */

export type CustomerType =
  | 'homeowner'
  | 'dealer'
  | 'contractor'
  | 'worker'
  | 'architect'
  | 'business'
  | 'other';

export type LeadStatus =
  | 'new'
  | 'contacted'
  | 'qualified'
  | 'survey'
  | 'quotation'
  | 'won'
  | 'lost';

/** Attribution thu thập từ URL / phiên truy cập (mục 13). */
export interface Attribution {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  gclid?: string;
  fbclid?: string;
  ttclid?: string;
  landingPage?: string;
  referrer?: string;
  firstSeenAt?: string;
}

/** Schema lead tối thiểu (mục 10). */
export interface FujinanoLead {
  id?: string;
  createdAt?: string;

  source?: string;
  medium?: string;
  campaign?: string;
  content?: string;
  term?: string;

  landingPage?: string;
  referrer?: string;

  fullName: string;
  phone: string;
  province?: string;

  customerType?: CustomerType;

  need?: string;
  productInterest?: string[];

  projectType?: string;
  estimatedArea?: number;
  description?: string;

  leadScore?: number;
  status?: LeadStatus;

  consentMarketing?: boolean;
}

export interface LeadSubmitResult {
  ok: boolean;
  id?: string;
  error?: string;
}

/* -------------------------- Cấu hình landing page ------------------------- */

export interface ProductCard {
  name: string;
  code?: string;
  usage?: string;
  surfaces?: string[];
  packaging?: string;
  tdsUrl?: string;
  /** [CẦN XÁC NHẬN] chỉ hiển thị khi có ảnh thật */
  image?: string;
  cta?: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface CaseStudy {
  name: string;
  location?: string;
  problem: string;
  area?: string;
  solution: string;
  products?: string[];
  images?: string[];
  implementationTime?: string;
  result?: string;
  testimonial?: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface EvidenceBlock {
  type: 'image' | 'video' | 'metric' | 'before_after';
  title?: string;
  /** Nội dung tuỳ type. Nếu chưa có dữ liệu thật -> để pending = true. */
  content?: unknown;
  /** true = đang chờ bằng chứng thật; render placeholder nội bộ. */
  pending?: boolean;
  note?: string;
}

export interface LandingPageConfig {
  slug: string;

  seo: {
    title: string;
    description: string;
    canonical?: string;
    noindex?: boolean;
    ogImage?: string;
  };

  breadcrumb?: Array<{ label: string; href?: string }>;

  hero: {
    eyebrow?: string;
    headline: string;
    subheadline: string;
    image?: string;
    imageAlt?: string;
    primaryCTA: string;
    secondaryCTA?: string;
    /** badge tin cậy ngắn hiển thị dưới CTA (chỉ dữ liệu đã xác nhận) */
    trustNote?: string;
  };

  painPoints: {
    title: string;
    items: Array<{ title: string; description?: string; icon?: string }>;
  };

  solution: {
    title: string;
    description?: string;
    steps: ProcessStep[];
  };

  benefits: {
    title: string;
    items: Array<{
      title: string;
      description: string;
      group?: 'technology' | 'performance' | 'application' | 'support';
      proof?: string; // nếu chưa có -> '[CẦN BỔ SUNG BẰNG CHỨNG]'
    }>;
  };

  evidence?: {
    title: string;
    blocks: EvidenceBlock[];
  };

  products?: {
    title: string;
    note?: string;
    items: ProductCard[];
  };

  process?: {
    title: string;
    steps: ProcessStep[];
  };

  caseStudies?: {
    title: string;
    items: CaseStudy[];
  };

  faq?: {
    title: string;
    items: FAQItem[];
  };

  /** Section chính sách (trang đại lý). Số liệu lấy từ content/brand.ts (mục 22). */
  policy?: {
    title: string;
    description?: string;
    showPromotion?: boolean;
  };

  finalCta: {
    title: string;
    description?: string;
    primaryCTA: string;
  };

  form: {
    title: string;
    description?: string;
    leadType: CustomerType | string;
    needOptions?: string[];
    projectTypeOptions?: string[];
    /** Tuỳ biến nhãn trường "Nhu cầu" bước 1 (vd trang tuyển thợ: "Nghề chính"). */
    needLabel?: string;
    /** Tuỳ biến nhãn bước 2 (mặc định theo công trình xây dựng). */
    projectTypeLabel?: string;
    areaLabel?: string;
    showArea?: boolean; // false -> ẩn ô diện tích (vd trang đại lý)
    descriptionLabel?: string;
    descriptionPlaceholder?: string;
  };
}
