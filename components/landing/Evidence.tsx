import { type LandingPageConfig } from '@/types';
import { Section, SectionHeading } from '@/components/ui/Section';

/*
  EVIDENCE (mục 8.5) — section quan trọng nhất.
  Không bịa số liệu. Block "pending" hiển thị placeholder rõ ràng để đội
  Fujinano biết cần bổ sung gì; block có dữ liệu thật mới render nội dung.
*/
export function Evidence({ config }: { config: LandingPageConfig }) {
  const ev = config.evidence;
  if (!ev?.blocks?.length) return null;

  return (
    <Section id="evidence">
      <SectionHeading
        title={ev.title}
        description="Fujinano chỉ công bố bằng chứng đã được xác minh. Các hạng mục dưới đây sẽ cập nhật khi có dữ liệu thực tế."
      />
      <div className="grid gap-4 md:grid-cols-3">
        {ev.blocks.map((b, i) => (
          <div
            key={i}
            className="flex min-h-[180px] flex-col rounded border border-dashed border-border bg-surface-alt p-5"
          >
            <span className="text-xs font-semibold uppercase tracking-wide text-support">
              {labelForType(b.type)}
            </span>
            <h3 className="mt-1 font-semibold">{b.title}</h3>
            {b.pending ? (
              <p className="mt-auto pt-4 text-sm italic text-muted/70">
                {b.note ?? '[CẦN BỔ SUNG BẰNG CHỨNG]'}
              </p>
            ) : (
              <div className="mt-auto pt-4 text-sm text-muted">
                {String(b.content ?? '')}
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}

function labelForType(t: string): string {
  switch (t) {
    case 'before_after':
      return 'Trước / Sau';
    case 'video':
      return 'Video test';
    case 'metric':
      return 'Kết quả thử nghiệm';
    default:
      return 'Hình ảnh';
  }
}
