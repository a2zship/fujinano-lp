import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Logo } from '@/components/ui/Logo';
import { SiteFooter } from '@/components/landing/SiteFooter';
import { landingPages } from '@/content/landing-pages';
import { brand } from '@/content/brand';

/*
  Trang chủ = hub liệt kê các giải pháp (mục 2.2 — khách hàng là trung tâm,
  vào theo "cửa vào" nhu cầu). Tĩnh, chạy được trên GitHub Pages.
*/
export const metadata = {
  title: `${brand.name} — ${brand.tagline}`,
  description:
    'Chọn giải pháp theo nhu cầu: chống thấm, chống nóng, nano ceramic, sơn sàn, sân pickleball. Kỹ thuật Fujinano tư vấn và báo giá theo công trình thực tế.',
};

const isDemo = process.env.NEXT_PUBLIC_DEMO_MODE === 'true';

export default function Home() {
  const items = Object.values(landingPages);

  return (
    <main>
      {isDemo && (
        <div className="bg-warning/15 px-4 py-2 text-center text-sm text-text">
          <strong>Bản xem mẫu</strong> — giao diện &amp; trải nghiệm demo. Form gửi
          thử không lưu dữ liệu; hotline/ảnh/thông số thật sẽ bổ sung sau.
        </div>
      )}

      <header className="bg-brand text-brand-fg">
        <Container className="py-14 md:py-20">
          <Logo variant="dark" className="mb-6" />
          <p className="mb-3 inline-block rounded-sm bg-white/10 px-3 py-1 text-sm font-semibold text-gold">
            {brand.slogan} — {brand.sloganSub}
          </p>
          <h1 className="max-w-2xl text-3xl font-bold leading-tight md:text-[40px]">
            Chọn giải pháp theo nhu cầu công trình của anh/chị
          </h1>
          <p className="mt-4 max-w-xl text-lg text-brand-fg/85">
            Kỹ thuật Fujinano khảo sát hiện trạng trước khi đề xuất hệ sản phẩm và
            báo giá — không tư vấn theo kiểu bán mã sản phẩm.
          </p>
        </Container>
      </header>

      <section className="bg-surface-alt py-12 md:py-16">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((cfg) => {
              const label =
                cfg.breadcrumb?.[cfg.breadcrumb.length - 1]?.label ?? cfg.slug;
              return (
                <Link
                  key={cfg.slug}
                  href={`/giai-phap/${cfg.slug}`}
                  className="flex flex-col rounded-lg bg-surface p-6 shadow-flat transition-shadow hover:shadow-card"
                >
                  <h2 className="text-xl font-semibold text-brand">{label}</h2>
                  <p className="mt-2 flex-1 text-sm text-muted">
                    {cfg.hero.subheadline}
                  </p>
                  <span className="mt-4 text-sm font-semibold text-accent">
                    Xem giải pháp →
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="mt-10 rounded-lg bg-brand p-6 text-brand-fg md:p-8">
            <h2 className="text-xl font-semibold">Hợp tác cùng Fujinano</h2>
            <p className="mt-1 text-sm text-brand-fg/80">
              Dành cho đối tác phân phối, thợ thi công và doanh nghiệp / dự án.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {[
                { href: '/dai-ly', label: 'Trở thành đại lý', desc: 'Chính sách chiết khấu, hỗ trợ marketing.' },
                { href: '/fujinano-pro', label: 'Fujinano Pro (thợ)', desc: 'Kết nối công trình, đào tạo kỹ thuật.' },
                { href: '/giai-phap-doanh-nghiep', label: 'Giải pháp doanh nghiệp', desc: 'Tư vấn dự án, mẫu thử, báo giá khối lượng.' },
              ].map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  className="flex flex-col rounded bg-white/5 p-4 ring-1 ring-white/15 transition-colors hover:bg-white/10"
                >
                  <span className="font-semibold text-gold">{c.label} →</span>
                  <span className="mt-1 text-sm text-brand-fg/75">{c.desc}</span>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <SiteFooter />
    </main>
  );
}
