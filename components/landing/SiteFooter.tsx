import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Logo } from '@/components/ui/Logo';
import { brand } from '@/content/brand';
import { landingPages } from '@/content/landing-pages';

export function SiteFooter() {
  const hasHotline = !brand.hotline.startsWith('[');
  const solutions = Object.values(landingPages);
  return (
    <footer className="bg-brand text-brand-fg/80">
      <Container className="py-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row">
          <div className="max-w-xs">
            <Logo variant="dark" />
            <p className="mt-3 text-sm">{brand.slogan} — {brand.sloganSub}</p>
            <p className="mt-2 text-xs text-brand-fg/60">{brand.warehouse}</p>
            <p className="mt-1 text-xs">
              <a href={brand.websiteUrl} className="text-gold" target="_blank" rel="noopener noreferrer">
                {brand.website}
              </a>
            </p>
          </div>

          <nav aria-label="Giải pháp" className="text-sm">
            <p className="mb-2 font-semibold text-brand-fg">Giải pháp</p>
            <ul className="space-y-1">
              {solutions.map((cfg) => (
                <li key={cfg.slug}>
                  <Link
                    href={`/giai-phap/${cfg.slug}`}
                    className="hover:text-gold"
                  >
                    {cfg.breadcrumb?.[cfg.breadcrumb.length - 1]?.label ??
                      cfg.slug}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link href="/dai-ly" className="font-semibold text-brand-fg hover:text-gold">
                  Trở thành đại lý
                </Link>
              </li>
              <li>
                <Link href="/fujinano-pro" className="font-semibold text-brand-fg hover:text-gold">
                  Fujinano Pro (thợ)
                </Link>
              </li>
              <li>
                <Link href="/giai-phap-doanh-nghiep" className="font-semibold text-brand-fg hover:text-gold">
                  Giải pháp doanh nghiệp
                </Link>
              </li>
            </ul>
          </nav>

          <div className="text-sm">
            <p>
              Hotline:{' '}
              {hasHotline ? (
                <a href={brand.hotlineHref} className="font-semibold text-gold">
                  {brand.hotline}
                </a>
              ) : (
                <span className="italic text-brand-fg/50">{brand.hotline}</span>
              )}
            </p>
            <p className="mt-1">
              Zalo:{' '}
              {brand.zaloUrl.startsWith('[') ? (
                <span className="italic text-brand-fg/50">{brand.zaloUrl}</span>
              ) : (
                <a href={brand.zaloUrl} className="font-semibold text-gold">
                  Chat Zalo
                </a>
              )}
            </p>
          </div>
        </div>
        <p className="mt-8 border-t border-white/10 pt-6 text-xs text-brand-fg/50">
          © {new Date().getFullYear()} {brand.name}. Thông tin sản phẩm và chính
          sách hiển thị theo dữ liệu đã được xác nhận.
        </p>
      </Container>
    </footer>
  );
}
