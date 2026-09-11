'use client';

import { track } from '@/lib/analytics';
import { brand } from '@/content/brand';

/*
  STICKY CTA MOBILE (mục 14) — luôn hiển thị lối liên hệ ở đáy màn hình mobile.
  Ẩn trên desktop (md:hidden). Tap target >= 48px.
*/
export function StickyCTA() {
  const hasHotline = !brand.hotline.startsWith('[');
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-surface/95 backdrop-blur md:hidden">
      <div className="grid grid-cols-2 gap-2 p-2">
        <a
          href={hasHotline ? brand.hotlineHref : '#lead-form'}
          onClick={() => track('cta_phone_click', { location: 'sticky' })}
          className="fjn-btn-ghost text-[15px]"
        >
          Gọi tư vấn
        </a>
        <a
          href="#lead-form"
          onClick={() => track('cta_primary_click', { location: 'sticky' })}
          className="fjn-btn-primary text-[15px]"
        >
          Nhận báo giá
        </a>
      </div>
    </div>
  );
}
