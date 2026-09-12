import { type LandingPageConfig } from '@/types';
import { brand } from '@/content/brand';
import { AnalyticsProvider } from '@/components/analytics/AnalyticsProvider';
import { Hero } from './Hero';
import { PainPoints } from './PainPoints';
import { Solution } from './Solution';
import { Benefits } from './Benefits';
import { Evidence } from './Evidence';
import { ProductCards } from './ProductCards';
import { DealerPolicy } from './DealerPolicy';
import { Process } from './Process';
import { CaseStudies } from './CaseStudies';
import { FAQ } from './FAQ';
import { LeadForm } from './LeadForm';
import { FinalCta } from './FinalCta';
import { StickyCTA } from './StickyCTA';
import { SiteFooter } from './SiteFooter';

export function LandingPage({ config }: { config: LandingPageConfig }) {
  const isDemo = process.env.NEXT_PUBLIC_DEMO_MODE === 'true';

  return (
    <main className="pb-20 md:pb-0">
      <AnalyticsProvider slug={config.slug} />
      <StructuredData config={config} />

      {isDemo && (
        <div className="bg-warning/15 px-4 py-2 text-center text-sm text-text">
          <strong>Bản xem mẫu</strong> — giao diện &amp; trải nghiệm demo. Form gửi
          thử không lưu dữ liệu; hotline/ảnh/thông số thật sẽ bổ sung sau.
        </div>
      )}

      <Hero config={config} />
      <PainPoints config={config} />
      <Solution config={config} />
      <Benefits config={config} />
      <Evidence config={config} />
      <ProductCards config={config} />
      <DealerPolicy config={config} />
      <Process config={config} />
      <CaseStudies config={config} />
      <FAQ config={config} />
      {/* Bằng chứng đặt trước CTA cuối; form là điểm chuyển đổi chính */}
      <FinalCta config={config} />
      <LeadForm config={config} />
      <SiteFooter />

      <StickyCTA />
    </main>
  );
}

/* JSON-LD: FAQPage + BreadcrumbList (mục 16) — chỉ khi nội dung thật xuất hiện trên trang */
function StructuredData({ config }: { config: LandingPageConfig }) {
  const graphs: object[] = [];

  if (config.faq?.items?.length) {
    graphs.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: config.faq.items.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    });
  }

  if (config.breadcrumb?.length) {
    graphs.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: config.breadcrumb.map((b, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: b.label,
        ...(b.href ? { item: brand.siteUrl + b.href } : {}),
      })),
    });
  }

  if (!graphs.length) return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graphs) }}
    />
  );
}
