import { type LandingPageConfig } from '@/types';
import { Section, SectionHeading } from '@/components/ui/Section';

const GROUP_LABEL: Record<string, string> = {
  technology: 'Công nghệ',
  performance: 'Hiệu quả',
  application: 'Thi công',
  support: 'Hỗ trợ',
};

export function Benefits({ config }: { config: LandingPageConfig }) {
  const { benefits } = config;
  if (!benefits?.items?.length) return null;

  return (
    <Section id="benefits" variant="alt">
      <SectionHeading title={benefits.title} />
      <div className="grid gap-4 sm:grid-cols-2">
        {benefits.items.map((b) => {
          const proofPending =
            !b.proof || b.proof.trim().startsWith('[CẦN');
          return (
            <div key={b.title} className="rounded bg-surface p-6 shadow-flat">
              {b.group && (
                <span className="mb-2 inline-block rounded-sm bg-support/10 px-2 py-0.5 text-xs font-semibold text-support">
                  {GROUP_LABEL[b.group] ?? b.group}
                </span>
              )}
              <h3 className="text-lg font-semibold">{b.title}</h3>
              <p className="mt-1 text-muted">{b.description}</p>
              {/* Bằng chứng: chỉ tô đậm khi là dữ liệu thật; placeholder giữ mờ (mục 8.4) */}
              <p
                className={`mt-3 text-sm ${
                  proofPending
                    ? 'italic text-muted/70'
                    : 'font-medium text-success'
                }`}
              >
                {b.proof}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
