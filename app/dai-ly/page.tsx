import type { Metadata } from 'next';
import { daiLyConfig } from '@/content/landing-pages/dai-ly';
import { LandingPage } from '@/components/landing/LandingPage';
import { brand } from '@/content/brand';

const canonical = daiLyConfig.seo.canonical ?? '/dai-ly';

export const metadata: Metadata = {
  title: daiLyConfig.seo.title,
  description: daiLyConfig.seo.description,
  alternates: { canonical },
  robots: daiLyConfig.seo.noindex
    ? { index: false, follow: false }
    : { index: true, follow: true },
  openGraph: {
    title: daiLyConfig.seo.title,
    description: daiLyConfig.seo.description,
    url: brand.siteUrl + canonical,
    siteName: brand.name,
    locale: 'vi_VN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: daiLyConfig.seo.title,
    description: daiLyConfig.seo.description,
  },
};

export default function DaiLyPage() {
  return <LandingPage config={daiLyConfig} />;
}
