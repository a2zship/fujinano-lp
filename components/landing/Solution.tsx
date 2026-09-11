import { type LandingPageConfig } from '@/types';
import { Section, SectionHeading } from '@/components/ui/Section';

export function Solution({ config }: { config: LandingPageConfig }) {
  const { solution } = config;
  if (!solution?.steps?.length) return null;

  return (
    <Section id="solution">
      <SectionHeading title={solution.title} description={solution.description} />
      <ol className="mx-auto grid max-w-3xl gap-0">
        {solution.steps.map((s, i) => (
          <li key={s.title} className="relative flex gap-4 pb-6 last:pb-0">
            {/* đường nối dọc */}
            {i < solution.steps.length - 1 && (
              <span
                aria-hidden
                className="absolute left-[18px] top-9 h-full w-px bg-border"
              />
            )}
            <span className="z-10 flex h-9 w-9 flex-none items-center justify-center rounded-full bg-brand text-sm font-bold text-brand-fg">
              {i + 1}
            </span>
            <div className="pt-1">
              <h3 className="font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm text-muted">{s.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
