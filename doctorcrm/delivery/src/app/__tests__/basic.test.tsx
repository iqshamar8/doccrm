import { describe, it, expect } from 'vitest';

describe('verify token', () => {
  it('rejects wrong token', () => {
    const mode = 'subscribe';
    const token = 'wrong';
    expect(mode === 'subscribe' && token === process.env.WHATSAPP_VERIFY_TOKEN).toBe(false);
  });
});
