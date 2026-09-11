import type { MetadataRoute } from 'next';
import { brand } from '@/content/brand';
import { getAllLandingSlugs, getLandingPage } from '@/content/landing-pages';

export default function sitemap(): MetadataRoute.Sitemap {
  return getAllLandingSlugs()
    .filter((slug) => !getLandingPage(slug)?.seo.noindex)
    .map((slug) => ({
      url: `${brand.siteUrl}/giai-phap/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }));
}
