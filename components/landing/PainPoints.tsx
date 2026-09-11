import { type LandingPageConfig } from '@/types';
import { Section, SectionHeading } from '@/components/ui/Section';

export function PainPoints({ config }: { config: LandingPageConfig }) {
  const { painPoints } = config;
  if (!painPoints?.items?.length) return null;

  return (
    <Section id="pain-points" variant="alt">
      <SectionHeading title={painPoints.title} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {painPoints.items.map((p) => (
          <div
            key={p.title}
            className="rounded bg-surface p-5 shadow-flat"
          >
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-danger/10 text-danger">
              {/* icon cảnh báo */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M12 9v4m0 4h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="font-semibold">{p.title}</h3>
            {p.description && (
              <p className="mt-1 text-sm text-muted">{p.description}</p>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
