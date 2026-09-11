import { Container } from '@/components/ui/Container';
import { brand } from '@/content/brand';

export function SiteFooter() {
  const hasHotline = !brand.hotline.startsWith('[');
  return (
    <footer className="bg-brand text-brand-fg/80">
      <Container className="py-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-lg font-bold text-brand-fg">{brand.name}</p>
            <p className="text-sm">{brand.tagline}</p>
          </div>
          <div className="text-sm">
            <p>
              Hotline:{' '}
              {hasHotline ? (
                <a href={brand.hotlineHref} className="font-semibold text-accent">
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
                <a href={brand.zaloUrl} className="font-semibold text-accent">
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
