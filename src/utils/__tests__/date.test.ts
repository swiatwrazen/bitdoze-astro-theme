import { describe, it, expect } from 'vitest';
import { formatDate } from '@utils/date';

describe('formatDate', () => {
  it('formats dates using the expected locale', () => {
    const date = new Date('2025-02-26T00:00:00Z');

    expect(formatDate(date)).toBe('February 26, 2025');
  });

  it('produces stable output for different months', () => {
    const leap = new Date('2024-02-29T12:00:00Z');

    expect(formatDate(leap)).toBe('February 29, 2024');
  });
});
