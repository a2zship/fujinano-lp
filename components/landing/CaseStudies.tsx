import { type LandingPageConfig } from '@/types';
import { Section, SectionHeading } from '@/components/ui/Section';

/*
  CASE STUDIES (mục 8.8) — KHÔNG tạo testimonial/công trình giả.
  Nếu chưa có dữ liệu duyệt: ẩn hoàn toàn ở production; ở development hiện
  placeholder nội bộ để nhắc đội bổ sung.
*/
export function CaseStudies({ config }: { config: LandingPageConfig }) {
  const cs = config.caseStudies;
  const items = cs?.items ?? [];

  if (items.length === 0) {
    if (process.env.NODE_ENV === 'production') return null;
    return (
      <Section id="case-studies" variant="alt">
        <div className="rounded border border-dashed border-border p-6 text-center text-sm italic text-muted/70">
          [CẦN BỔ SUNG CASE STUDY ĐÃ ĐƯỢC DUYỆT] — section này tự ẩn ở bản
          production khi chưa có dữ liệu.
        </div>
      </Section>
    );
  }

  return (
    <Section id="case-studies" variant="alt">
      <SectionHeading title={cs!.title} />
      <div className="grid gap-5 md:grid-cols-2">
        {items.map((c) => (
          <article key={c.name} className="rounded-lg bg-surface p-6 shadow-flat">
            <h3 className="text-lg font-semibold">{c.name}</h3>
            {c.location && <p className="text-sm text-muted">{c.location}</p>}
            <dl className="mt-3 space-y-2 text-sm">
              <div>
                <dt className="font-medium">Vấn đề</dt>
                <dd className="text-muted">{c.problem}</dd>
              </div>
              <div>
                <dt className="font-medium">Giải pháp</dt>
                <dd className="text-muted">{c.solution}</dd>
              </div>
              {c.result && (
                <div>
                  <dt className="font-medium">Kết quả</dt>
                  <dd className="text-muted">{c.result}</dd>
                </div>
              )}
            </dl>
            {c.testimonial && (
              <blockquote className="mt-4 border-l-2 border-accent pl-3 text-sm italic text-text">
                “{c.testimonial}”
              </blockquote>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
