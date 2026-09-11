import { type LandingPageConfig } from '@/types';
import { Section, SectionHeading } from '@/components/ui/Section';

export function Process({ config }: { config: LandingPageConfig }) {
  const process = config.process;
  if (!process?.steps?.length) return null;

  return (
    <Section id="process">
      <SectionHeading title={process.title} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {process.steps.map((s) => (
          <div key={s.title} className="rounded bg-surface-alt p-5">
            <h3 className="font-semibold text-brand">{s.title}</h3>
            <p className="mt-1 text-sm text-muted">{s.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
