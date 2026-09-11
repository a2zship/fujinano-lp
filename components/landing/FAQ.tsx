'use client';

import { useState } from 'react';
import { type LandingPageConfig } from '@/types';
import { Section, SectionHeading } from '@/components/ui/Section';

export function FAQ({ config }: { config: LandingPageConfig }) {
  const faq = config.faq;
  const [open, setOpen] = useState<number | null>(0);
  if (!faq?.items?.length) return null;

  return (
    <Section id="faq">
      <SectionHeading title={faq.title} />
      <div className="mx-auto max-w-3xl divide-y divide-border rounded-lg border border-border bg-surface">
        {faq.items.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={i}>
              <h3>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex min-h-[56px] w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold"
                >
                  <span>{item.q}</span>
                  <span
                    aria-hidden
                    className={`flex-none text-support transition-transform ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
              </h3>
              {isOpen && (
                <div className="px-5 pb-5 text-muted">{item.a}</div>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
