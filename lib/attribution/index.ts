import type { Attribution } from '@/types';

/*
  ATTRIBUTION (mục 13)
  --------------------
  - Lưu UTM/click-id ngay lần đầu khách vào site (first-touch), không ghi đè.
  - Bền qua điều hướng nội bộ nhờ localStorage; kèm session hiện tại.
  - Khi submit form, attribution đi cùng lead.
*/

const KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'gclid',
  'fbclid',
  'ttclid',
] as const;

const STORAGE_KEY = 'fjn_attribution';

function safeGetStore(): Attribution {
  if (typeof window === 'undefined') return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Attribution) : {};
  } catch {
    return {};
  }
}

function safeSetStore(data: Attribution) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    /* localStorage bị chặn — bỏ qua, không làm hỏng trang */
  }
}

/**
 * Đọc UTM/click-id từ URL hiện tại và merge vào store (first-touch wins).
 * Gọi một lần khi trang load ở client.
 */
export function captureAttribution(): Attribution {
  if (typeof window === 'undefined') return {};

  const params = new URLSearchParams(window.location.search);
  const stored = safeGetStore();
  const next: Attribution = { ...stored };

  let hasNew = false;
  for (const key of KEYS) {
    const val = params.get(key);
    // Chỉ set nếu chưa có (giữ nguồn đầu tiên) và URL thực sự có giá trị.
    if (val && !next[key]) {
      next[key] = val;
      hasNew = true;
    }
  }

  if (!next.firstSeenAt) {
    next.firstSeenAt = new Date().toISOString();
    hasNew = true;
  }
  if (!next.referrer && document.referrer) {
    next.referrer = document.referrer;
    hasNew = true;
  }
  // landingPage luôn cập nhật theo trang hiện tại đang xem.
  next.landingPage = window.location.pathname;

  if (hasNew) safeSetStore(next);
  return next;
}

/** Lấy attribution đã lưu (để đính kèm vào lead khi submit). */
export function getAttribution(): Attribution {
  const stored = safeGetStore();
  if (typeof window !== 'undefined') {
    stored.landingPage = stored.landingPage || window.location.pathname;
  }
  return stored;
}
