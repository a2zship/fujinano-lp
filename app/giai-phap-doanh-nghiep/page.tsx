import type { Metadata } from 'next';
import { doanhNghiepConfig } from '@/content/landing-pages/giai-phap-doanh-nghiep';
import { LandingPage } from '@/components/landing/LandingPage';
import { brand } from '@/content/brand';

const canonical = doanhNghiepConfig.seo.canonical ?? '/giai-phap-doanh-nghiep';

export const metadata: Metadata = {
  title: doanhNghiepConfig.seo.title,
  description: doanhNghiepConfig.seo.description,
  alternates: { canonical },
  robots: doanhNghiepConfig.seo.noindex
    ? { index: false, follow: false }
    : { index: true, follow: true },
  openGraph: {
    title: doanhNghiepConfig.seo.title,
    description: doanhNghiepConfig.seo.description,
    url: brand.siteUrl + canonical,
    siteName: brand.name,
    locale: 'vi_VN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: doanhNghiepConfig.seo.title,
    description: doanhNghiepConfig.seo.description,
  },
};

export default function DoanhNghiepPage() {
  return <LandingPage config={doanhNghiepConfig} />;
}
