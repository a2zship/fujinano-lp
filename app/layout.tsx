import type { Metadata } from 'next';
import './globals.css';
import { MarketingScripts } from '@/components/analytics/MarketingScripts';
import { brand } from '@/content/brand';

export const metadata: Metadata = {
  metadataBase: new URL(brand.siteUrl),
  title: {
    default: `${brand.name} — ${brand.tagline}`,
    template: `%s`,
  },
  description:
    'Fujinano — sơn và giải pháp chống thấm. Nhận tư vấn kỹ thuật và báo giá theo công trình thực tế.',
  robots: { index: true, follow: true },
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
      <body>
        {children}
        <MarketingScripts />
      </body>
    </html>
  );
}
