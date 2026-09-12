/*
  Logo Fujinano — tái hiện nhận diện thật: wordmark "Fujinano" + mặt trời đỏ
  (núi Phú Sĩ / mặt trời Nhật) + 日本の技術. Dùng token màu thương hiệu.
  variant "light": chữ navy (đặt trên nền sáng). variant "dark": chữ trắng (nền tối).
*/
export function Logo({
  variant = 'dark',
  className = '',
  showJp = true,
}: {
  variant?: 'light' | 'dark';
  className?: string;
  showJp?: boolean;
}) {
  const wordColor = variant === 'dark' ? 'text-brand-fg' : 'text-brand';
  const jpColor = variant === 'dark' ? 'text-brand-fg/70' : 'text-muted';
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      {/* Mặt trời đỏ / núi Phú Sĩ */}
      <svg
        width="30"
        height="30"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden
        className="flex-none"
      >
        <path d="M4 26a16 16 0 0 1 32 0Z" fill="hsl(var(--accent))" />
        <path
          d="M20 12l4.2 8.5H15.8L20 12Z"
          fill="hsl(var(--brand-fg))"
          opacity="0.9"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span className={`text-xl font-extrabold tracking-tight ${wordColor}`}>
          Fujinano
        </span>
        {showJp && (
          <span className={`mt-0.5 text-[10px] font-medium tracking-[0.2em] ${jpColor}`}>
            日本の技術
          </span>
        )}
      </span>
    </span>
  );
}
