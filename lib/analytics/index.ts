/*
  ANALYTICS (mục 12)
  ------------------
  Một hàm track() duy nhất, đẩy event tới mọi kênh đang bật:
  GTM dataLayer, GA4 (gtag), Meta Pixel (fbq), TikTok Pixel (ttq).
  - Không phụ thuộc vendor nào cụ thể: kênh nào chưa cấu hình thì bỏ qua.
  - Chống gửi trùng khi re-render (mục 12) bằng tập hợp các event "once".
*/

export type AnalyticsEvent =
  | 'lp_view'
  | 'cta_primary_click'
  | 'cta_secondary_click'
  | 'cta_phone_click'
  | 'cta_zalo_click'
  | 'lead_form_start'
  | 'lead_form_step_1_complete'
  | 'lead_submit'
  | 'video_demo_play'
  | 'case_study_view'
  | 'scroll_depth';

type Props = Record<string, unknown>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    ttq?: { track?: (event: string, props?: Props) => void };
  }
}

// Các event chỉ nên bắn đúng một lần trong vòng đời trang.
const ONCE_EVENTS = new Set<AnalyticsEvent>([
  'lp_view',
  'lead_form_start',
  'lead_form_step_1_complete',
  'lead_submit',
]);
const firedOnce = new Set<string>();

// Ánh xạ sang tên chuẩn của Meta Pixel khi phù hợp.
const META_MAP: Partial<Record<AnalyticsEvent, string>> = {
  lead_submit: 'Lead',
  lead_form_start: 'InitiateCheckout',
};

export function track(event: AnalyticsEvent, props: Props = {}): void {
  if (typeof window === 'undefined') return;

  if (ONCE_EVENTS.has(event)) {
    const dedupeKey = `${event}:${JSON.stringify(props)}`;
    if (firedOnce.has(dedupeKey)) return;
    firedOnce.add(dedupeKey);
  }

  const payload = { event, ...props };

  try {
    // GTM
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(payload);

    // GA4
    if (typeof window.gtag === 'function') {
      window.gtag('event', event, props);
    }

    // Meta Pixel
    if (typeof window.fbq === 'function') {
      const metaName = META_MAP[event];
      if (metaName) window.fbq('track', metaName, props);
      else window.fbq('trackCustom', event, props);
    }

    // TikTok Pixel
    if (window.ttq && typeof window.ttq.track === 'function') {
      window.ttq.track(event, props);
    }
  } catch {
    /* Không để lỗi tracking làm hỏng trải nghiệm người dùng. */
  }
}

/** Theo dõi scroll depth 25/50/75/100 — mỗi mốc bắn một lần. */
export function initScrollDepth(): () => void {
  if (typeof window === 'undefined') return () => {};
  const milestones = [25, 50, 75, 100];
  const seen = new Set<number>();

  const onScroll = () => {
    const doc = document.documentElement;
    const scrollable = doc.scrollHeight - doc.clientHeight;
    if (scrollable <= 0) return;
    const pct = Math.round((doc.scrollTop / scrollable) * 100);
    for (const m of milestones) {
      if (pct >= m && !seen.has(m)) {
        seen.add(m);
        track('scroll_depth', { percent: m });
      }
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  return () => window.removeEventListener('scroll', onScroll);
}
