import type { LandingPageConfig } from '@/types';
import { chongThamConfig } from './chong-tham';
import { chongNongConfig } from './chong-nong';
import { nanoCeramicConfig } from './nano-ceramic';
import { sonSanConfig } from './son-san';
import { pickleballConfig } from './pickleball';

/*
  REGISTRY landing page (mục 4, 7).
  Thêm page mới = thêm 1 config + 1 dòng ở đây. Không copy component.
*/
export const landingPages: Record<string, LandingPageConfig> = {
  'chong-tham': chongThamConfig,
  'chong-nong': chongNongConfig,
  'nano-ceramic': nanoCeramicConfig,
  'son-san': sonSanConfig,
  'pickleball': pickleballConfig,
};

export function getLandingPage(slug: string): LandingPageConfig | undefined {
  return landingPages[slug];
}

export function getAllLandingSlugs(): string[] {
  return Object.keys(landingPages);
}
