import type { FujinanoLead } from '@/types';

/*
  VALIDATION (mục 25)
  -------------------
  - Chuẩn hoá & kiểm tra SĐT Việt Nam ở mức cơ bản, không quá nghiêm để mất lead.
  - Hỗ trợ 0xxxxxxxxx và +84xxxxxxxxx -> chuẩn hoá về 0xxxxxxxxx.
*/

/** Trả về SĐT chuẩn hoá (0xxxxxxxxx) hoặc null nếu không hợp lệ cơ bản. */
export function normalizeVNPhone(input: string): string | null {
  if (!input) return null;
  // Bỏ mọi ký tự không phải số, giữ dấu + ở đầu để nhận diện +84.
  let s = input.trim().replace(/[\s.\-()]/g, '');

  if (s.startsWith('+84')) s = '0' + s.slice(3);
  else if (s.startsWith('0084')) s = '0' + s.slice(4);
  else if (s.startsWith('84') && s.length >= 11) s = '0' + s.slice(2);

  // Chỉ còn chữ số.
  if (!/^\d+$/.test(s)) return null;

  // Di động VN: 10 số, bắt đầu 03/05/07/08/09. Cố định: 10-11 số bắt đầu 02.
  const mobile = /^0(3|5|7|8|9)\d{8}$/;
  const landline = /^02\d{8,9}$/;
  if (mobile.test(s) || landline.test(s)) return s;
  return null;
}

export function isValidVNPhone(input: string): boolean {
  return normalizeVNPhone(input) !== null;
}

export interface ValidationResult {
  ok: boolean;
  errors: Partial<Record<keyof FujinanoLead, string>>;
  normalized?: Partial<FujinanoLead>;
}

/** Validate dữ liệu bắt buộc của bước 1 form (mục 9). */
export function validateLeadStep1(data: Partial<FujinanoLead>): ValidationResult {
  const errors: ValidationResult['errors'] = {};

  const fullName = (data.fullName || '').trim();
  if (fullName.length < 2) errors.fullName = 'Vui lòng nhập họ tên.';

  const phone = normalizeVNPhone(data.phone || '');
  if (!phone) errors.phone = 'Số điện thoại chưa hợp lệ.';

  if (!data.province || !String(data.province).trim())
    errors.province = 'Vui lòng chọn tỉnh/thành.';

  if (!data.need || !String(data.need).trim())
    errors.need = 'Vui lòng chọn nhu cầu.';

  const ok = Object.keys(errors).length === 0;
  return {
    ok,
    errors,
    normalized: ok ? { ...data, fullName, phone: phone ?? undefined } : undefined,
  };
}
