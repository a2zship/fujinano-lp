import type { FujinanoLead, LeadSubmitResult } from '@/types';
import { getAttribution } from '@/lib/attribution';

/*
  CRM ABSTRACTION (mục 11)
  ------------------------
  LeadForm KHÔNG bind trực tiếp vào vendor. Mọi provider đều hiện thực
  interface LeadProvider. Đổi provider = đổi 1 dòng, không đụng UI.
*/

export interface LeadProvider {
  submitLead(data: FujinanoLead): Promise<LeadSubmitResult>;
}

/** Provider mặc định: POST về API nội bộ /api/leads (mục 11 - version 1). */
export class InternalApiProvider implements LeadProvider {
  constructor(private endpoint: string = '/api/leads') {}

  async submitLead(data: FujinanoLead): Promise<LeadSubmitResult> {
    try {
      const res = await fetch(this.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        return { ok: false, error: `HTTP ${res.status}` };
      }
      const json = (await res.json()) as LeadSubmitResult;
      return json;
    } catch (e) {
      return { ok: false, error: (e as Error).message };
    }
  }
}

/**
 * Provider cho bản XEM MẪU tĩnh (GitHub Pages) — không có backend.
 * Giả lập gửi thành công để Sếp xem trọn luồng UX. KHÔNG lưu dữ liệu thật.
 */
export class DemoProvider implements LeadProvider {
  async submitLead(data: FujinanoLead): Promise<LeadSubmitResult> {
    await new Promise((r) => setTimeout(r, 600));
    // eslint-disable-next-line no-console
    console.info('[DEMO] Lead (không lưu backend):', data);
    return { ok: true, id: 'demo-' + Date.now().toString(36) };
  }
}

// Bản demo (Pages) dùng DemoProvider; bản đầy đủ dùng API nội bộ.
const isDemo = process.env.NEXT_PUBLIC_DEMO_MODE === 'true';
const provider: LeadProvider = isDemo
  ? new DemoProvider()
  : new InternalApiProvider();

/**
 * Điểm vào duy nhất cho LeadForm ở client.
 * Tự động đính kèm attribution + metadata trước khi gửi qua provider.
 */
export async function submitLead(
  lead: FujinanoLead
): Promise<LeadSubmitResult> {
  const attr = getAttribution();

  const enriched: FujinanoLead = {
    ...lead,
    createdAt: new Date().toISOString(),
    source: lead.source ?? attr.utm_source,
    medium: lead.medium ?? attr.utm_medium,
    campaign: lead.campaign ?? attr.utm_campaign,
    content: lead.content ?? attr.utm_content,
    term: lead.term ?? attr.utm_term,
    landingPage: lead.landingPage ?? attr.landingPage,
    referrer: lead.referrer ?? attr.referrer,
  };

  return provider.submitLead(enriched);
}
