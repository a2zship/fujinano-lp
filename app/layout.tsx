import type { Metadata } from 'next';
import './globals.css';
import { MarketingScripts } from '@/components/analytics/MarketingScripts';
import { brand, OG_IMAGE } from '@/content/brand';

export const metadata: Metadata = {
  metadataBase: new URL(brand.siteUrl),
  title: {
    default: `${brand.name} — ${brand.tagline}`,
    template: `%s`,
  },
  description:
    'Fujinano — sơn và giải pháp chống thấm. Nhận tư vấn kỹ thuật và báo giá theo công trình thực tế.',
  robots: { index: true, follow: true },
  openGraph: {
    siteName: brand.name,
    locale: 'vi_VN',
    type: 'website',
    images: [{ url: OG_IMAGE, width: 1200, height: 675 }],
  },
  twitter: { card: 'summary_large_image', images: [OG_IMAGE] },
};

export const viewport = {
  themeColor: '#0f2f5e',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <MarketingScripts />
      </body>
    </html>
  );
}
