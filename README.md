# Fujinano — Landing Page Engine

Hệ thống landing page bán hàng cho thương hiệu sơn & chống thấm **Fujinano**.
Mục tiêu: biến traffic (Ads/Google/Facebook/TikTok/SEO/referral) thành **lead chất
lượng** và đẩy vào sales/CRM — config-driven, mobile-first, đo lường được.

## Stack
- Next.js 14 (App Router) · TypeScript · Tailwind CSS
- Cổng dev: **3151** (theo `QUY_UOC_CONG_DU_AN.md`)

## Chạy
```bash
npm install
cp .env.example .env.local   # điền hotline/Zalo/tracking khi có
npm run dev                  # http://localhost:3151
npm run build && npm start   # production
npm test                     # unit test (validation, attribution, config)
```

Trang chủ `/` điều hướng về landing V1: **`/giai-phap/chong-tham`**.

## Cấu trúc
```
app/
  giai-phap/[slug]/page.tsx   # 1 route động render mọi landing từ config
  api/leads/route.ts          # nhận lead, chấm điểm, forward webhook / lưu file
  layout.tsx  page.tsx  robots.ts  sitemap.ts
components/
  landing/   # Hero, PainPoints, Solution, Benefits, Evidence, ProductCards,
             # Process, CaseStudies, FAQ, LeadForm, FinalCta, StickyCTA, ...
  ui/        # Container, Section, CtaButton  (+ token trong app/globals.css)
  analytics/ # AnalyticsProvider, MarketingScripts
content/
  brand.ts                    # liên hệ, chính sách đại lý, khuyến mãi (dữ liệu thật)
  products.ts                 # mã sản phẩm (chỉ mã đã có trong tài liệu)
  landing-pages/*             # config từng trang + registry
lib/
  analytics/ attribution/ crm/ validation/
types/  docs/  tests/
```

## Nguyên tắc nội dung (bắt buộc)
- **Không bịa** thông số, số liệu, chứng nhận, testimonial, giá, bảo hành, claim
  hiệu năng. Thiếu dữ liệu → placeholder rõ ràng (`[CẦN XÁC NHẬN...]`), không lorem.
- Chi tiết tạo page mới: xem [`docs/landing-page-guide.md`](docs/landing-page-guide.md).

## Dữ liệu còn thiếu (cập nhật khi có)
- Hotline & Zalo chính thức Fujinano (`.env.local`).
- TDS / quy cách / bề mặt áp dụng cho các mã: CT-502, FJ-108N, FJ-118M, FJ-368C…
- Ảnh công trình thật, before/after, video test, số liệu thử nghiệm chống thấm.
- Case study đã được duyệt.
- Màu thương hiệu chính thức (đang dùng bảng đề xuất trong `app/globals.css`).
- Chi tiết chính sách đại lý C1 & thể lệ khuyến mãi 08/2026 từ bản PDF đầy đủ.
