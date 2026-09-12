# Brief thiết kế bộ hình ảnh còn thiếu — Fujinano Landing (Canva)

> Dùng khi Canva đã kết nối. Mọi ảnh phải theo nhận diện Fujinano bên dưới.
> **Không dựng ảnh giả** kiểu before/after, kết quả test, "công trình thật" —
> những ảnh đó chờ Fujinano cung cấp ảnh thật (giữ placeholder).

## 1. Nhận diện thương hiệu (bắt buộc bám theo)

| Yếu tố | Giá trị |
| :-- | :-- |
| Navy (chủ đạo) | `#0E2C63` |
| Đỏ mặt trời (CTA/nhấn) | `#DA251D` |
| Gold (nhấn cao cấp) | `#C9A24B` |
| Xanh nước (kỹ thuật) | `#1670C9` |
| Trắng / nền | `#FFFFFF` |
| Font | **Be Vietnam Pro** (tiêu đề 700/800, nội dung 400/500) |
| Logo | Wordmark "Fujinano" + **mặt trời đỏ / núi Phú Sĩ** + `日本の技術` |
| Slogan | "Nâng tầm không gian sống" · "Chất lượng Nhật Bản cho ngôi nhà Việt" |
| Phong cách | Kỹ thuật, tin cậy, sạch, cao cấp vừa phải; chấm phá Phú Sĩ + hoa anh đào; tránh gradient loè loẹt, shadow nặng |

## 2. Danh sách ảnh cần tạo

### A. Ảnh chia sẻ mạng xã hội — OG image (ưu tiên cao)
- **Kích thước:** 1200 × 630 px, xuất **WebP + PNG**.
- **Bố cục:** nền navy, logo Fujinano góc trên trái, tiêu đề trang lớn (trắng), 1 dải màu đỏ/gold, ảnh/khối minh hoạ phải, slogan nhỏ dưới.
- **Cần 8 file** (mỗi trang 1 tiêu đề):
  - `og-home` — "Sơn & Chống thấm — Công nghệ Nhật Bản"
  - `og-chong-tham` — "Giải pháp chống thấm"
  - `og-chong-nong` — "Giải pháp chống nóng mái tôn"
  - `og-nano-ceramic` — "Nano Ceramic — siêu bóng men kính"
  - `og-son-san` — "Sơn sàn nhà xưởng & kim loại"
  - `og-pickleball` — "Sơn sân Pickleball"
  - `og-dai-ly` — "Trở thành đại lý Fujinano"
  - `og-doanh-nghiep` — "Giải pháp cho dự án & doanh nghiệp"
- **Gắn vào code:** `content/landing-pages/*.ts` → `seo.ogImage`; trang chủ/route → metadata `openGraph.images`.

### B. Minh hoạ sân Pickleball
- **Kích thước:** 1000 × 750 px, WebP.
- **Nội dung:** sân Pickleball nhìn phối cảnh/từ trên; mặt sân xanh navy + line trắng/vàng; nhắc dòng **PU-888 PICK**. Là **đồ hoạ minh hoạ** (không phải ảnh chụp giả).
- **Gắn vào:** `content/landing-pages/pickleball.ts` → `hero.image`.

### C. Card sản phẩm PU-888 PICK
- **Kích thước:** 600 × 450 px, WebP.
- **Nội dung:** mockup thùng sơn nhãn "Fujinano PU-888 PICK" trên nền trắng/nhạt (đồ hoạ, ghi rõ là hình minh hoạ tới khi có bao bì thật).
- **Gắn vào:** `content/products.ts` → `PU-888 PICK`.image (map `PRODUCT_IMAGES`).

### D. Favicon / brand mark
- **Kích thước:** 512 × 512 px (PNG) + 32×32.
- **Nội dung:** mặt trời đỏ + chữ "F" hoặc núi Phú Sĩ trên nền navy/trắng.
- **Gắn vào:** `app/icon.png` (Next tự nhận).

### E. (Tuỳ chọn) Banner đối tác
- `hero-dai-ly` 1200×800 (cửa hàng/đại lý), `hero-fujinano-pro` (thợ thi công) — đồ hoạ minh hoạ, nếu muốn thay panel trụ giá trị.

## 3. Sau khi có file
- Bỏ WebP vào `public/images/` (og → `public/images/og/`, sản phẩm → `public/images/products/`).
- Gắn `seo.ogImage` / `hero.image` / `PRODUCT_IMAGES` như mục trên.
- Build + deploy (tự động khi push `main`).

## 4. Ảnh KHÔNG tự thiết kế (chờ ảnh thật Fujinano)
- Before/after xử lý thấm/chống nóng.
- Video test ngăn nước / đo nhiệt.
- Ảnh công trình thật, case study.
- Số liệu kiểm nghiệm.
