import { type LandingPageConfig } from '@/types';
import { Container } from '@/components/ui/Container';
import { CtaButton } from '@/components/ui/CtaButton';
import { Logo } from '@/components/ui/Logo';

export function Hero({ config }: { config: LandingPageConfig }) {
  const { hero } = config;
  return (
    <header className="relative overflow-hidden bg-brand text-brand-fg">
      {/* Nền kỹ thuật nhẹ, không dùng gradient lạm dụng (mục 17) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '22px 22px',
        }}
      />
      <Container className="relative py-12 md:py-20">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <Logo variant="dark" className="mb-6" />
            {hero.eyebrow && (
              <p className="mb-3 inline-block rounded-sm bg-white/10 px-3 py-1 text-sm font-semibold text-gold">
                {hero.eyebrow}
              </p>
            )}
            <h1 className="text-3xl font-bold leading-[1.15] md:text-[40px]">
              {hero.headline}
            </h1>
            <p className="mt-4 max-w-xl text-lg text-brand-fg/85">
              {hero.subheadline}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <CtaButton kind="primary" location="hero">
                {hero.primaryCTA}
              </CtaButton>
              {hero.secondaryCTA && (
                <CtaButton
                  kind="secondary"
                  location="hero"
                  className="!text-brand-fg !border-white/40 hover:!border-white"
                >
                  {hero.secondaryCTA}
                </CtaButton>
              )}
            </div>

            {hero.trustNote && (
              <p className="mt-4 text-sm text-brand-fg/70">{hero.trustNote}</p>
            )}
          </div>

          {/* Ảnh hero: chỉ hiển thị khung thật khi có ảnh; nếu chưa có -> placeholder rõ ràng (mục 18) */}
          <div className="relative">
            {hero.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={hero.image}
                alt={hero.imageAlt ?? config.hero.headline}
                className="w-full rounded-lg shadow-card"
                loading="eager"
              />
            ) : (
              <div className="flex aspect-[1.3/1] w-full items-center justify-center rounded-lg border border-white/20 bg-white/5 p-6 text-center text-sm text-brand-fg/60">
                [CẦN BỔ SUNG HÌNH ẢNH THỰC TẾ CÔNG TRÌNH FUJINANO]
              </div>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
}
