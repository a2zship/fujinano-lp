import type { LandingPageConfig } from '@/types';
import { chongThamConfig } from './chong-tham';

/*
  REGISTRY landing page (mục 4, 7).
  Thêm page mới = thêm 1 config + 1 dòng ở đây. Không copy component.
*/
export const landingPages: Record<string, LandingPageConfig> = {
  'chong-tham': chongThamConfig,
  // 'chong-nong': chongNongConfig,   <- nhân bản sau khi template được duyệt
  // 'nano-ceramic': nanoCeramicConfig,
  // 'son-san': sonSanConfig,
  // 'pickleball': pickleballConfig,
};

export function getLandingPage(slug: string): LandingPageConfig | undefined {
  return landingPages[slug];
}

export function getAllLandingSlugs(): string[] {
  return Object.keys(landingPages);
}
