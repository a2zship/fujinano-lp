'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

/*
  V1 chỉ có 1 landing page được duyệt (chống thấm — mục 34).
  Trang chủ điều hướng về đó. Dùng client redirect để hoạt động cả trên
  static export (GitHub Pages) lẫn bản server; router tự thêm basePath.
*/
export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/giai-phap/chong-tham');
  }, [router]);

  return (
    <main
      style={{
        minHeight: '60vh',
        display: 'grid',
        placeItems: 'center',
        color: 'hsl(215 16% 42%)',
        fontFamily: 'system-ui, sans-serif',
      }}
    >
      <p>
        Đang chuyển tới{' '}
        <a href="giai-phap/chong-tham" style={{ color: 'hsl(18 89% 54%)' }}>
          giải pháp chống thấm
        </a>
        …
      </p>
    </main>
  );
}
