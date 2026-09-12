import { type LandingPageConfig } from '@/types';
import { Section, SectionHeading } from '@/components/ui/Section';
import { CtaButton } from '@/components/ui/CtaButton';

export function ProductCards({ config }: { config: LandingPageConfig }) {
  const products = config.products;
  if (!products?.items?.length) return null;

  return (
    <Section id="products" variant="alt">
      <SectionHeading title={products.title} description={products.note} />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {products.items.map((p) => (
          <div
            key={p.code ?? p.name}
            className="flex flex-col overflow-hidden rounded-lg bg-surface shadow-card"
          >
            {/* Ảnh bao bì thật (object-contain trên nền trắng); placeholder nếu chưa có */}
            <div className="flex aspect-[4/3] items-center justify-center border-b border-border bg-white p-3 text-center text-xs text-muted/70">
              {p.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={p.image} alt={p.name} className="h-full w-full object-contain" loading="lazy" />
              ) : (
                <span className="px-4">[CẦN BỔ SUNG HÌNH BAO BÌ THẬT]</span>
              )}
            </div>
            <div className="flex flex-1 flex-col p-5">
              {p.code && (
                <span className="text-xs font-semibold text-support">
                  {p.code}
                </span>
              )}
              <h3 className="mt-0.5 text-lg font-semibold">{p.name}</h3>
              {p.usage && <p className="mt-1 text-sm text-muted">{p.usage}</p>}

              <dl className="mt-3 space-y-1 text-sm">
                {p.surfaces && p.surfaces.length > 0 && (
                  <div className="flex gap-2">
                    <dt className="font-medium text-text">Bề mặt:</dt>
                    <dd className="text-muted">{p.surfaces.join(', ')}</dd>
                  </div>
                )}
                {p.packaging && (
                  <div className="flex gap-2">
                    <dt className="font-medium text-text">Quy cách:</dt>
                    <dd className="text-muted">{p.packaging}</dd>
                  </div>
                )}
              </dl>

              {p.features && p.features.length > 0 && (
                <ul className="mt-3 space-y-1 text-sm text-muted">
                  {p.features.map((f) => {
                    const pending = f.trim().startsWith('[CẦN');
                    return (
                      <li key={f} className="flex gap-2">
                        <span className={pending ? 'text-muted/50' : 'text-accent'}>
                          {pending ? '•' : '✓'}
                        </span>
                        <span className={pending ? 'italic text-muted/60' : ''}>{f}</span>
                      </li>
                    );
                  })}
                </ul>
              )}

              <div className="mt-4 flex flex-1 flex-col justify-end gap-2">
                {p.tdsUrl && (
                  <a
                    href={p.tdsUrl}
                    className="text-sm font-medium text-support underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Xem thông số kỹ thuật (TDS)
                  </a>
                )}
                <CtaButton kind="primary" location={`product_${p.code ?? p.name}`} className="w-full">
                  {p.cta ?? 'Nhận tư vấn kỹ thuật'}
                </CtaButton>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Không hiển thị giá nếu chưa có chiến lược giá công khai (mục 8.6) */}
    </Section>
  );
}
