import { describe, it, expect, beforeEach, vi } from 'vitest';

/*
  Test attribution first-touch bằng cách giả lập window/document/localStorage
  trong môi trường node (mục 13, 29).
*/
function mockBrowser(search: string, referrer = '') {
  const store = new Map<string, string>();
  vi.stubGlobal('window', {
    location: { search, pathname: '/giai-phap/chong-tham' },
    localStorage: {
      getItem: (k: string) => store.get(k) ?? null,
      setItem: (k: string, v: string) => void store.set(k, v),
    },
  });
  vi.stubGlobal('document', { referrer });
  // captureAttribution dùng window.localStorage; module đọc qua window.
  (globalThis as any).localStorage = (globalThis as any).window.localStorage;
  (globalThis as any).document = (globalThis as any).document;
  return store;
}

describe('attribution', () => {
  beforeEach(() => {
    vi.resetModules();
    vi.unstubAllGlobals();
  });

  it('lưu UTM lần đầu và không ghi đè lần sau', async () => {
    mockBrowser('?utm_source=facebook&utm_medium=cpc&utm_campaign=chong_tham');
    const mod = await import('@/lib/attribution');
    const first = mod.captureAttribution();
    expect(first.utm_source).toBe('facebook');
    expect(first.utm_campaign).toBe('chong_tham');
    expect(first.firstSeenAt).toBeTruthy();

    // Lần 2 với source khác -> giữ nguyên first-touch.
    (globalThis as any).window.location.search = '?utm_source=google';
    const second = mod.captureAttribution();
    expect(second.utm_source).toBe('facebook');
  });

  it('getAttribution trả về dữ liệu đã lưu', async () => {
    mockBrowser('?utm_source=tiktok&ttclid=abc123');
    const mod = await import('@/lib/attribution');
    mod.captureAttribution();
    const attr = mod.getAttribution();
    expect(attr.utm_source).toBe('tiktok');
    expect(attr.ttclid).toBe('abc123');
  });
});
