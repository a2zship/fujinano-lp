'use client';

import { useState } from 'react';
import { type FujinanoLead, type LandingPageConfig } from '@/types';
import { Section } from '@/components/ui/Section';
import { validateLeadStep1 } from '@/lib/validation';
import { submitLead } from '@/lib/crm';
import { track } from '@/lib/analytics';
import { brand } from '@/content/brand';

type FieldErrors = Partial<Record<string, string>>;

export function LeadForm({ config }: { config: LandingPageConfig }) {
  const { form, slug } = config;
  const [step, setStep] = useState<1 | 2>(1);
  const [started, setStarted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [errors, setErrors] = useState<FieldErrors>({});

  const [data, setData] = useState<Partial<FujinanoLead>>({
    fullName: '',
    phone: '',
    province: '',
    need: '',
    customerType: (form.leadType as FujinanoLead['customerType']) ?? 'homeowner',
  });
  // Honeypot chống spam (mục 25) — người thật không điền field ẩn này.
  const [company, setCompany] = useState('');

  const update = (patch: Partial<FujinanoLead>) => {
    if (!started) {
      setStarted(true);
      track('lead_form_start', { slug });
    }
    setData((d) => ({ ...d, ...patch }));
  };

  const goStep2 = () => {
    const res = validateLeadStep1(data);
    if (!res.ok) {
      setErrors(res.errors);
      return;
    }
    setErrors({});
    setData((d) => ({ ...d, ...res.normalized }));
    track('lead_form_step_1_complete', { slug });
    setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (company.trim() !== '') return; // bot: im lặng bỏ qua.

    const res = validateLeadStep1(data);
    if (!res.ok) {
      setErrors(res.errors);
      setStep(1);
      return;
    }

    setSubmitting(true);
    setSubmitError(null);
    const payload: FujinanoLead = {
      ...(data as FujinanoLead),
      ...res.normalized,
      landingPage: `/giai-phap/${slug}`,
    };

    const result = await submitLead(payload);
    setSubmitting(false);

    if (result.ok) {
      track('lead_submit', { slug, id: result.id });
      setDone(true);
    } else {
      // mục 26: không xoá dữ liệu, hiện lỗi rõ, cho retry, có hotline/zalo.
      setSubmitError(
        'Chưa gửi được thông tin. Anh/chị vui lòng thử lại hoặc liên hệ trực tiếp Fujinano.'
      );
    }
  };

  return (
    <Section id="lead-form" variant="alt">
      <div className="mx-auto max-w-xl">
        <div className="rounded-lg bg-surface p-6 shadow-card md:p-8">
          {done ? (
            <SuccessPanel />
          ) : (
            <>
              <h2 className="text-2xl font-bold">{form.title}</h2>
              {form.description && (
                <p className="mt-2 text-muted">{form.description}</p>
              )}

              {/* Chỉ báo bước */}
              <div className="mt-5 flex items-center gap-2 text-sm">
                <StepDot active={step >= 1} label="1. Thông tin" />
                <span className="h-px flex-1 bg-border" />
                <StepDot active={step >= 2} label="2. Chi tiết (tuỳ chọn)" />
              </div>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
                {/* Honeypot */}
                <div className="hidden" aria-hidden>
                  <label>
                    Công ty
                    <input
                      tabIndex={-1}
                      autoComplete="off"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                    />
                  </label>
                </div>

                {step === 1 && (
                  <>
                    <Field label="Họ và tên" error={errors.fullName} required>
                      <input
                        type="text"
                        autoComplete="name"
                        className="fjn-input"
                        value={data.fullName ?? ''}
                        onChange={(e) => update({ fullName: e.target.value })}
                      />
                    </Field>

                    <Field label="Số điện thoại" error={errors.phone} required>
                      <input
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        placeholder="VD: 0912 345 678"
                        className="fjn-input"
                        value={data.phone ?? ''}
                        onChange={(e) => update({ phone: e.target.value })}
                      />
                    </Field>

                    <Field label="Tỉnh / Thành phố" error={errors.province} required>
                      <input
                        type="text"
                        autoComplete="address-level1"
                        placeholder="VD: TP. Hồ Chí Minh"
                        className="fjn-input"
                        value={data.province ?? ''}
                        onChange={(e) => update({ province: e.target.value })}
                      />
                    </Field>

                    <Field label="Nhu cầu" error={errors.need} required>
                      <select
                        className="fjn-input"
                        value={data.need ?? ''}
                        onChange={(e) => update({ need: e.target.value })}
                      >
                        <option value="">— Chọn nhu cầu —</option>
                        {(form.needOptions ?? []).map((n) => (
                          <option key={n} value={n}>
                            {n}
                          </option>
                        ))}
                      </select>
                    </Field>

                    <button
                      type="button"
                      onClick={goStep2}
                      className="fjn-btn-primary w-full"
                    >
                      Tiếp tục
                    </button>
                    <p className="text-center text-sm text-muted">
                      Chỉ mất 30 giây. Kỹ thuật sẽ liên hệ lại với anh/chị.
                    </p>
                  </>
                )}

                {step === 2 && (
                  <>
                    <Field label={form.projectTypeLabel ?? 'Loại công trình'}>
                      <select
                        className="fjn-input"
                        value={data.projectType ?? ''}
                        onChange={(e) => update({ projectType: e.target.value })}
                      >
                        <option value="">— Không bắt buộc —</option>
                        {(form.projectTypeOptions ?? []).map((n) => (
                          <option key={n} value={n}>
                            {n}
                          </option>
                        ))}
                      </select>
                    </Field>

                    {form.showArea !== false && (
                      <Field label={form.areaLabel ?? 'Diện tích ước tính (m²)'}>
                        <input
                          type="number"
                          inputMode="numeric"
                          min={0}
                          className="fjn-input"
                          value={data.estimatedArea ?? ''}
                          onChange={(e) =>
                            update({
                              estimatedArea: e.target.value
                                ? Number(e.target.value)
                                : undefined,
                            })
                          }
                        />
                      </Field>
                    )}

                    <Field label={form.descriptionLabel ?? 'Mô tả tình trạng công trình'}>
                      <textarea
                        rows={3}
                        className="fjn-input"
                        placeholder={
                          form.descriptionPlaceholder ??
                          'VD: sân thượng 40m² bị thấm xuống trần, đã xử lý 1 lần.'
                        }
                        value={data.description ?? ''}
                        onChange={(e) => update({ description: e.target.value })}
                      />
                    </Field>

                    <label className="flex items-start gap-2 text-sm text-muted">
                      <input
                        type="checkbox"
                        className="mt-1"
                        checked={data.consentMarketing ?? false}
                        onChange={(e) =>
                          update({ consentMarketing: e.target.checked })
                        }
                      />
                      <span>
                        Đồng ý nhận tư vấn và thông tin khuyến mãi từ Fujinano.
                      </span>
                    </label>

                    {submitError && (
                      <div className="rounded border border-danger/30 bg-danger/5 p-3 text-sm text-danger">
                        {submitError}
                        <div className="mt-2 flex flex-wrap gap-3">
                          <a className="font-semibold underline" href={brand.hotlineHref}>
                            Gọi {brand.hotline}
                          </a>
                          <a
                            className="font-semibold underline"
                            href={brand.zaloUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Chat Zalo
                          </a>
                        </div>
                      </div>
                    )}

                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="fjn-btn-ghost"
                      >
                        Quay lại
                      </button>
                      <button
                        type="submit"
                        disabled={submitting}
                        className="fjn-btn-primary flex-1 disabled:opacity-60"
                      >
                        {submitting ? 'Đang gửi…' : config.finalCta.primaryCTA}
                      </button>
                    </div>
                  </>
                )}
              </form>
            </>
          )}
        </div>
      </div>
    </Section>
  );
}

function SuccessPanel() {
  return (
    <div className="py-4 text-center">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-success/10 text-success">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
          <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <h2 className="text-2xl font-bold">Fujinano đã nhận thông tin</h2>
      <p className="mt-2 text-muted">
        Bộ phận tư vấn sẽ liên hệ với anh/chị trong thời gian sớm nhất.
      </p>
      <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
        <a href={brand.hotlineHref} className="fjn-btn-primary">
          Gọi {brand.hotline}
        </a>
        <a
          href={brand.zaloUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="fjn-btn-ghost"
        >
          Chat Zalo
        </a>
      </div>
    </div>
  );
}

function StepDot({ active, label }: { active: boolean; label: string }) {
  return (
    <span
      className={`font-medium ${active ? 'text-brand' : 'text-muted/60'}`}
    >
      {label}
    </span>
  );
}

function Field({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm font-medium text-text">
        {label}
        {required && <span className="text-danger"> *</span>}
      </span>
      {children}
      {error && <span className="mt-1 block text-sm text-danger">{error}</span>}
    </label>
  );
}
