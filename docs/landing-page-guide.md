# Hướng dẫn tạo landing page mới (Fujinano)

Tài liệu này giúp marketer tạo một landing page mới **chỉ bằng config**, không cần
copy component. Toàn bộ trang render từ dữ liệu (`content/landing-pages/*`).

> Nguyên tắc bất biến: **không bịa** thông số, số liệu, chứng nhận, testimonial,
> giá, bảo hành. Thiếu dữ liệu -> để placeholder rõ ràng: `[CẦN XÁC NHẬN THÔNG SỐ]`,
> `[CẦN BỔ SUNG BẰNG CHỨNG]`, `[CẦN BỔ SUNG CASE STUDY]`, `[CẦN BỔ SUNG HÌNH ẢNH THỰC TẾ]`.

## 5 bước

### 1. Tạo config
- Copy `content/landing-pages/chong-tham.ts` thành file mới, ví dụ `chong-nong.ts`.
- Đổi `slug`, `seo`, `hero`, `painPoints`, `solution`, `benefits`, `faq`, `form`.
- Giữ đúng cấu trúc conversion: Vấn đề → hậu quả → giải pháp → bằng chứng →
  sản phẩm → tư vấn → báo giá → lead.

### 2. Thêm ảnh
- Bỏ ảnh thật vào `public/images/...` và trỏ `hero.image`, `products[].image`,
  `evidence` vào đường dẫn đó.
- Chưa có ảnh → để trống, hệ thống tự hiện placeholder. **Không dùng ảnh stock giả
  làm công trình Fujinano.**

### 3. Thêm sản phẩm
- Khai báo mã sản phẩm trong `content/products.ts` (chỉ mã đã có trong tài liệu).
- Trong config, dùng `getProducts(['CT-502', ...])`. Mỗi page chỉ nên 1–3 sản phẩm.
- Thông số/quy cách/giá: chỉ điền khi có TDS/chiến lược giá đã duyệt.

### 4. Chọn CTA / loại form
- CTA mặc định: `Nhận tư vấn kỹ thuật` (primary), `Nhận báo giá` (secondary).
- `form.leadType` chọn theo đối tượng: `homeowner`, `dealer`, `contractor`,
  `worker`, `architect`, `business`.
- Tuỳ biến `form.needOptions`, `form.projectTypeOptions` theo ngữ cảnh.

### 5. Đăng ký & deploy
- Thêm 1 dòng vào `content/landing-pages/index.ts`:
  ```ts
  'chong-nong': chongNongConfig,
  ```
- Trang tự có tại `/giai-phap/chong-nong`, tự vào `sitemap.xml`.
- Muốn chỉ chạy quảng cáo, không index: đặt `seo.noindex = true`.
- Deploy: `npm run build && npm start` (cổng 3151) hoặc nền tảng hosting của bạn.

## Kiểm tra trước khi bật (Conversion QA — mục 30)
- [ ] Hiểu trang giải quyết vấn đề gì trong 5 giây?
- [ ] CTA đầu tiên nằm above the fold?
- [ ] Bằng chứng đặt trước CTA cuối?
- [ ] Form ngắn, thao tác 1 tay trên mobile?
- [ ] Tracking (lp_view, cta_click, lead_submit) hoạt động?
- [ ] UTM được lưu và đi cùng lead?
- [ ] Không có claim chưa được chứng minh?

## Tracking & lead
- Event bắn qua `lib/analytics` → GTM/GA4/Meta/TikTok (kênh nào có ID mới nạp).
- Attribution first-touch lưu ở `localStorage`, tự đính vào lead khi submit.
- Lead gửi qua `lib/crm` → `/api/leads`. Đổi đích đến bằng `LEAD_WEBHOOK_URL`
  (webhook/CRM/Sheet/Supabase) mà không sửa UI.
