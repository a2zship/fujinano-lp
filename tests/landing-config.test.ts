import { describe, it, expect } from 'vitest';
import { getLandingPage, getAllLandingSlugs } from '@/content/landing-pages';

/*
  Kiểm tra dynamic page rendering ở mức dữ liệu (mục 29):
  registry phân giải đúng slug và config có đủ trường tối thiểu để render.
*/
describe('landing registry', () => {
  it('phân giải slug chong-tham', () => {
    expect(getAllLandingSlugs()).toContain('chong-tham');
    const cfg = getLandingPage('chong-tham');
    expect(cfg).toBeDefined();
  });

  it('trả về undefined với slug không tồn tại', () => {
    expect(getLandingPage('khong-ton-tai')).toBeUndefined();
  });

  it('config chống thấm có đủ khối tối thiểu để render', () => {
    const cfg = getLandingPage('chong-tham')!;
    expect(cfg.hero.headline.length).toBeGreaterThan(10);
    expect(cfg.hero.primaryCTA).toBeTruthy();
    expect(cfg.painPoints.items.length).toBeGreaterThanOrEqual(3);
    expect(cfg.solution.steps.length).toBeGreaterThan(0);
    expect(cfg.faq?.items.length).toBeGreaterThan(0);
    expect(cfg.form.needOptions?.length).toBeGreaterThan(0);
    expect(cfg.seo.title).toBeTruthy();
    expect(cfg.seo.description.length).toBeGreaterThan(30);
  });

  it('không chứa claim cấm (số 1, 100% chống thấm, giảm X độ...)', () => {
    const raw = JSON.stringify(getLandingPage('chong-tham')).toLowerCase();
    const banned = ['số 1', 'tốt nhất thị trường', '100% chống thấm', 'bền vĩnh viễn'];
    for (const b of banned) expect(raw).not.toContain(b);
  });
});
