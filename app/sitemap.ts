import type { MetadataRoute } from 'next';
import { brand } from '@/content/brand';
import { getAllLandingSlugs, getLandingPage } from '@/content/landing-pages';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const solutions = getAllLandingSlugs()
    .filter((slug) => !getLandingPage(slug)?.seo.noindex)
    .map((slug) => ({
      url: `${brand.siteUrl}/giai-phap/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }));

  const others = [
    { url: `${brand.siteUrl}/`, lastModified: now, changeFrequency: 'monthly' as const, priority: 1 },
    { url: `${brand.siteUrl}/dai-ly`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${brand.siteUrl}/fujinano-pro`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${brand.siteUrl}/giai-phap-doanh-nghiep`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 },
  ];

  return [...others, ...solutions];
}
