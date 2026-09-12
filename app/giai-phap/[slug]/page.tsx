import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getLandingPage, getAllLandingSlugs } from '@/content/landing-pages';
import { LandingPage } from '@/components/landing/LandingPage';
import { brand, OG_IMAGE } from '@/content/brand';

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllLandingSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: Params;
}): Metadata {
  const config = getLandingPage(params.slug);
  if (!config) return {};

  const canonical = config.seo.canonical ?? `/giai-phap/${config.slug}`;
  return {
    title: config.seo.title,
    description: config.seo.description,
    alternates: { canonical },
    robots: config.seo.noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title: config.seo.title,
      description: config.seo.description,
      url: brand.siteUrl + canonical,
      siteName: brand.name,
      locale: 'vi_VN',
      type: 'website',
      images: [{ url: config.seo.ogImage ?? OG_IMAGE }],
    },
    twitter: {
      card: 'summary_large_image',
      title: config.seo.title,
      description: config.seo.description,
      images: [config.seo.ogImage ?? OG_IMAGE],
    },
  };
}

export default function Page({ params }: { params: Params }) {
  const config = getLandingPage(params.slug);
  if (!config) notFound();
  return <LandingPage config={config} />;
}
