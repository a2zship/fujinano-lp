'use client';

import { useEffect } from 'react';
import { captureAttribution } from '@/lib/attribution';
import { track, initScrollDepth } from '@/lib/analytics';

/*
  Khởi tạo ở client: lưu attribution (UTM/click-id), bắn lp_view một lần,
  theo dõi scroll depth. Không render gì ra DOM.
*/
export function AnalyticsProvider({ slug }: { slug: string }) {
  useEffect(() => {
    captureAttribution();
    track('lp_view', { slug });
    const cleanup = initScrollDepth();
    return cleanup;
  }, [slug]);

  return null;
}
