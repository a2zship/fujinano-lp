import { type LandingPageConfig } from '@/types';
import { Section, SectionHeading } from '@/components/ui/Section';
import { dealerPolicy, promotionAug2026 } from '@/content/brand';

/*
  DEALER POLICY (mục 22) — số liệu chiết khấu/điều kiện lấy từ content/brand.ts,
  KHÔNG hard-code trong UI. Ẩn nếu config không bật.
*/
export function DealerPolicy({ config }: { config: LandingPageConfig }) {
  if (!config.policy) return null;
  const p = dealerPolicy.southernRegion2026;

  const tiers = [
    { label: 'Nhóm 1', value: p.group1DiscountPercent },
    { label: 'Nhóm 2', value: p.group2DiscountPercent },
  ];

  const conditions = [
    p.requiresContract ? 'Ký hợp đồng đại lý phân phối' : null,
    p.prepaymentRequired ? 'Thanh toán trước khi nhận hàng' : null,
  ].filter(Boolean) as string[];

  return (
    <Section id="policy">
      <SectionHeading title={config.policy.title} description={config.policy.description} />

      <div className="mx-auto max-w-3xl">
        <div className="grid gap-4 sm:grid-cols-2">
          {tiers.map((t) => (
            <div
              key={t.label}
              className="rounded-lg border border-border bg-surface p-6 text-center shadow-flat"
            >
              <p className="text-sm font-semibold text-support">{t.label}</p>
              <p className="mt-1 text-4xl font-bold text-brand">{t.value}%</p>
              <p className="mt-1 text-sm text-muted">chiết khấu</p>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-lg bg-surface-alt p-5">
          <p className="font-semibold">Điều kiện áp dụng</p>
          <ul className="mt-2 space-y-1 text-sm text-muted">
            {conditions.map((c) => (
              <li key={c} className="flex gap-2">
                <span className="text-success">✓</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs italic text-muted/70">{p.note}</p>
        </div>

        {config.policy.showPromotion && promotionAug2026.active && (
          <div className="mt-5 rounded-lg border border-accent/30 bg-accent/5 p-5">
            <p className="font-semibold text-accent">{promotionAug2026.label}</p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {promotionAug2026.mechanics.map((m) => (
                <li
                  key={m}
                  className="rounded-sm bg-surface px-2 py-1 text-sm font-medium text-text shadow-flat"
                >
                  {m}
                </li>
              ))}
            </ul>
            <p className="mt-2 text-sm text-muted">{promotionAug2026.extra}</p>
            <p className="mt-2 text-xs italic text-muted/70">{promotionAug2026.note}</p>
          </div>
        )}
      </div>
    </Section>
  );
}
