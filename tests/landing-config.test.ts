import { describe, it, expect } from 'vitest';
import { getLandingPage, getAllLandingSlugs } from '@/content/landing-pages';
import { daiLyConfig } from '@/content/landing-pages/dai-ly';
import { fujinanoProConfig } from '@/content/landing-pages/fujinano-pro';
import { doanhNghiepConfig } from '@/content/landing-pages/giai-phap-doanh-nghiep';

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

  it('có đủ 5 trang giải pháp đã đăng ký', () => {
    for (const slug of ['chong-tham', 'chong-nong', 'nano-ceramic', 'son-san', 'pickleball']) {
      expect(getAllLandingSlugs()).toContain(slug);
    }
  });

  it('MỌI trang đều đủ khối tối thiểu để render', () => {
    for (const slug of getAllLandingSlugs()) {
      const cfg = getLandingPage(slug)!;
      expect(cfg.slug, slug).toBe(slug);
      expect(cfg.hero.headline.length, slug).toBeGreaterThan(10);
      expect(cfg.hero.primaryCTA, slug).toBeTruthy();
      expect(cfg.painPoints.items.length, slug).toBeGreaterThanOrEqual(3);
      expect(cfg.solution.steps.length, slug).toBeGreaterThan(0);
      expect(cfg.finalCta.primaryCTA, slug).toBeTruthy();
      expect(cfg.form.needOptions?.length, slug).toBeGreaterThan(0);
      expect(cfg.seo.title, slug).toBeTruthy();
      expect(cfg.seo.description.length, slug).toBeGreaterThan(30);
    }
  });

  it('KHÔNG trang nào chứa claim cấm (số 1, 100% chống thấm, giảm X độ...)', () => {
    // Các claim TỰ BỊA bị cấm. ("giảm nhiệt trên 25°C" KHÔNG cấm vì là claim
    //  chính thức của Fujinano, luôn kèm dẫn nguồn "theo tài liệu Fujinano".)
    const banned = [
      'số 1',
      'tốt nhất thị trường',
      '100% chống thấm',
      'bền vĩnh viễn',
      'độc quyền',
    ];
    for (const slug of getAllLandingSlugs()) {
      const raw = JSON.stringify(getLandingPage(slug)).toLowerCase();
      for (const b of banned) expect(raw, `${slug} chứa "${b}"`).not.toContain(b);
    }
  });
});

describe('trang đại lý (/dai-ly)', () => {
  it('cấu hình đúng loại lead & form đối tác', () => {
    expect(daiLyConfig.slug).toBe('dai-ly');
    expect(daiLyConfig.form.leadType).toBe('dealer');
    expect(daiLyConfig.form.showArea).toBe(false); // ẩn ô diện tích công trình
    expect(daiLyConfig.policy).toBeDefined();
    expect(daiLyConfig.finalCta.primaryCTA).toBeTruthy();
    expect(daiLyConfig.products?.items.length).toBeGreaterThan(0);
  });

  it('KHÔNG hard-code % chiết khấu trong config (lấy từ brand.ts)', () => {
    const raw = JSON.stringify(daiLyConfig);
    expect(raw).not.toMatch(/20\s*%|30\s*%/);
  });
});

describe('trang đối tác đứng riêng (pro, doanh nghiệp)', () => {
  const standalone = [
    { name: 'fujinano-pro', cfg: fujinanoProConfig, leadType: 'worker' },
    { name: 'giai-phap-doanh-nghiep', cfg: doanhNghiepConfig, leadType: 'business' },
  ];

  for (const { name, cfg, leadType } of standalone) {
    it(`${name}: đủ khối tối thiểu + leadType đúng`, () => {
      expect(cfg.slug).toBe(name);
      expect(cfg.form.leadType).toBe(leadType);
      expect(cfg.hero.headline.length).toBeGreaterThan(10);
      expect(cfg.painPoints.items.length).toBeGreaterThanOrEqual(3);
      expect(cfg.finalCta.primaryCTA).toBeTruthy();
      expect(cfg.form.needOptions?.length).toBeGreaterThan(0);
      expect(cfg.seo.description.length).toBeGreaterThan(30);
    });

    it(`${name}: không chứa claim cấm`, () => {
      const raw = JSON.stringify(cfg).toLowerCase();
      for (const b of ['số 1', 'tốt nhất thị trường', 'bền vĩnh viễn', 'độc quyền']) {
        expect(raw, `${name} chứa "${b}"`).not.toContain(b);
      }
    });
  }
});
