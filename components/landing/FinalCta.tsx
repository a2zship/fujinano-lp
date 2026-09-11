import { type LandingPageConfig } from '@/types';
import { Section } from '@/components/ui/Section';
import { CtaButton } from '@/components/ui/CtaButton';

export function FinalCta({ config }: { config: LandingPageConfig }) {
  const { finalCta } = config;
  return (
    <Section id="final-cta" variant="brand">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-bold md:text-[28px]">{finalCta.title}</h2>
        {finalCta.description && (
          <p className="mt-3 text-brand-fg/85">{finalCta.description}</p>
        )}
        <div className="mt-7 flex justify-center">
          <CtaButton kind="primary" location="final">
            {finalCta.primaryCTA}
          </CtaButton>
        </div>
      </div>
    </Section>
  );
}
