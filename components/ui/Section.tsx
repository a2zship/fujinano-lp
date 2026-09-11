import { type ReactNode } from 'react';
import { Container } from './Container';

export function Section({
  children,
  id,
  variant = 'default',
  className = '',
}: {
  children: ReactNode;
  id?: string;
  variant?: 'default' | 'alt' | 'brand';
  className?: string;
}) {
  const bg =
    variant === 'alt'
      ? 'bg-surface-alt'
      : variant === 'brand'
        ? 'bg-brand text-brand-fg'
        : 'bg-surface';
  return (
    <section id={id} className={`py-12 md:py-20 ${bg} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  onBrand = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  onBrand?: boolean;
}) {
  return (
    <div className="mx-auto mb-8 max-w-2xl text-center md:mb-12">
      {eyebrow && (
        <p
          className={`mb-2 text-sm font-semibold uppercase tracking-wide ${
            onBrand ? 'text-accent' : 'text-support'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-bold leading-tight md:text-[28px]">{title}</h2>
      {description && (
        <p className={`mt-3 ${onBrand ? 'text-brand-fg/80' : 'text-muted'}`}>
          {description}
        </p>
      )}
    </div>
  );
}
