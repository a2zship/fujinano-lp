'use client';

import { type ReactNode } from 'react';
import { track, type AnalyticsEvent } from '@/lib/analytics';

type Kind = 'primary' | 'secondary' | 'phone' | 'zalo';

const EVENT_BY_KIND: Record<Kind, AnalyticsEvent> = {
  primary: 'cta_primary_click',
  secondary: 'cta_secondary_click',
  phone: 'cta_phone_click',
  zalo: 'cta_zalo_click',
};

const STYLE_BY_KIND: Record<Kind, string> = {
  primary:
    'bg-accent text-accent-fg hover:bg-accent-hover shadow-flat',
  secondary:
    'bg-transparent text-brand border border-brand/30 hover:border-brand',
  phone: 'bg-support text-white hover:brightness-95',
  zalo: 'bg-[#0068ff] text-white hover:brightness-95',
};

export function CtaButton({
  kind,
  children,
  href,
  location,
  className = '',
}: {
  kind: Kind;
  children: ReactNode;
  /** Với phone/zalo là URL đích. Với primary/secondary mặc định cuộn tới form. */
  href?: string;
  /** Nhãn vị trí đặt CTA để phân biệt trong analytics (hero/final/sticky…). */
  location?: string;
  className?: string;
}) {
  const target = href ?? '#lead-form';

  const onClick = () => {
    track(EVENT_BY_KIND[kind], { location: location ?? 'unknown' });
  };

  const base =
    'inline-flex min-h-[48px] items-center justify-center gap-2 rounded px-6 py-3 text-base font-semibold transition-colors focus-visible:outline';

  // Cuộn mượt tới form với CTA nội bộ, giữ cập nhật URL hash.
  return (
    <a
      href={target}
      onClick={onClick}
      className={`${base} ${STYLE_BY_KIND[kind]} ${className}`}
    >
      {children}
    </a>
  );
}
