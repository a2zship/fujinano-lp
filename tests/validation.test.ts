import { describe, it, expect } from 'vitest';
import {
  normalizeVNPhone,
  isValidVNPhone,
  validateLeadStep1,
} from '@/lib/validation';

describe('normalizeVNPhone', () => {
  it('giữ số di động 0xxxxxxxxx', () => {
    expect(normalizeVNPhone('0912345678')).toBe('0912345678');
  });
  it('chuẩn hoá +84 về 0', () => {
    expect(normalizeVNPhone('+84912345678')).toBe('0912345678');
  });
  it('chấp nhận khoảng trắng và dấu gạch', () => {
    expect(normalizeVNPhone('091 234 5678')).toBe('0912345678');
    expect(normalizeVNPhone('091-234-5678')).toBe('0912345678');
  });
  it('từ chối số quá ngắn / sai đầu số', () => {
    expect(normalizeVNPhone('12345')).toBeNull();
    expect(normalizeVNPhone('0112345678')).toBeNull();
  });
  it('isValidVNPhone phản ánh đúng', () => {
    expect(isValidVNPhone('0987654321')).toBe(true);
    expect(isValidVNPhone('abc')).toBe(false);
  });
});

describe('validateLeadStep1', () => {
  it('báo lỗi khi thiếu trường bắt buộc', () => {
    const res = validateLeadStep1({ fullName: '', phone: '', province: '', need: '' });
    expect(res.ok).toBe(false);
    expect(res.errors.fullName).toBeTruthy();
    expect(res.errors.phone).toBeTruthy();
    expect(res.errors.province).toBeTruthy();
    expect(res.errors.need).toBeTruthy();
  });

  it('pass và chuẩn hoá phone khi hợp lệ', () => {
    const res = validateLeadStep1({
      fullName: 'Nguyễn Văn A',
      phone: '+84 912 345 678',
      province: 'TP. HCM',
      need: 'Chống thấm sân thượng',
    });
    expect(res.ok).toBe(true);
    expect(res.normalized?.phone).toBe('0912345678');
  });
});
