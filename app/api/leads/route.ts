import { NextResponse } from 'next/server';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import type { FujinanoLead } from '@/types';
import { normalizeVNPhone } from '@/lib/validation';

/*
  API LEAD (mục 10, 11) — provider mặc định phía server.
  Thứ tự xử lý:
    1. Validate + normalize (tối thiểu, tránh mất lead hợp lệ).
    2. Tính lead score cơ bản.
    3. Đẩy tới CRM/webhook nếu có LEAD_WEBHOOK_URL; nếu không -> lưu file (dev).
  Đổi đích đến chỉ cần đổi phần "persist" — LeadForm/CRM abstraction không đổi.
*/

export const runtime = 'nodejs';

function scoreLead(lead: FujinanoLead): number {
  let s = 0;
  if (lead.phone) s += 40;
  if (lead.province) s += 10;
  if (lead.need) s += 15;
  if (lead.projectType) s += 10;
  if (typeof lead.estimatedArea === 'number' && lead.estimatedArea > 0) s += 15;
  if (lead.description && lead.description.length > 10) s += 10;
  return Math.min(s, 100);
}

export async function POST(req: Request) {
  let body: Partial<FujinanoLead>;
  try {
    body = (await req.json()) as Partial<FujinanoLead>;
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 });
  }

  const fullName = (body.fullName || '').trim();
  const phone = normalizeVNPhone(body.phone || '');

  if (fullName.length < 2 || !phone) {
    return NextResponse.json(
      { ok: false, error: 'validation_failed' },
      { status: 422 }
    );
  }

  const lead: FujinanoLead = {
    ...body,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    fullName,
    phone,
    status: 'new',
    leadScore: scoreLead({ ...(body as FujinanoLead), phone }),
  };

  try {
    const webhook = process.env.LEAD_WEBHOOK_URL;
    if (webhook) {
      const res = await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(lead),
      });
      if (!res.ok) throw new Error(`webhook ${res.status}`);
    } else {
      // Fallback dev: ghi JSONL vào ./data/leads.jsonl (không commit).
      const dir = path.join(process.cwd(), 'data');
      await fs.mkdir(dir, { recursive: true });
      await fs.appendFile(
        path.join(dir, 'leads.jsonl'),
        JSON.stringify(lead) + '\n',
        'utf8'
      );
    }
  } catch (e) {
    console.error('[leads] persist failed:', (e as Error).message);
    return NextResponse.json(
      { ok: false, error: 'persist_failed' },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true, id: lead.id });
}
