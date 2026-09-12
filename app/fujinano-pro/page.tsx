import type { Metadata } from 'next';
import { fujinanoProConfig } from '@/content/landing-pages/fujinano-pro';
import { LandingPage } from '@/components/landing/LandingPage';
import { brand } from '@/content/brand';

const canonical = fujinanoProConfig.seo.canonical ?? '/fujinano-pro';

export const metadata: Metadata = {
  title: fujinanoProConfig.seo.title,
  description: fujinanoProConfig.seo.description,
  alternates: { canonical },
  robots: fujinanoProConfig.seo.noindex
    ? { index: false, follow: false }
    : { index: true, follow: true },
  openGraph: {
    title: fujinanoProConfig.seo.title,
    description: fujinanoProConfig.seo.description,
    url: brand.siteUrl + canonical,
    siteName: brand.name,
    locale: 'vi_VN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: fujinanoProConfig.seo.title,
    description: fujinanoProConfig.seo.description,
  },
};

export default function FujinanoProPage() {
  return <LandingPage config={fujinanoProConfig} />;
}
