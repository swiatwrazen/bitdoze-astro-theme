import { describe, it, expect } from 'vitest';
import { getReadingTime } from '@utils/readingTime';

const makeWords = (count: number, token = 'word') => Array.from({ length: count }, () => token).join(' ');

describe('getReadingTime', () => {
  it('calculates reading time for regular prose', () => {
    const text = makeWords(400);
    const result = getReadingTime(text);

    expect(result.minutes).toBe(2);
    expect(result.seconds).toBe(0);
    expect(result.text).toBe('2 min');
  });

  it('adjusts duration when code blocks are present', () => {
    const prose = makeWords(100, 'text');
    const code = ['```ts', makeWords(60, 'const'), '```'].join('\n');
    const result = getReadingTime(`${prose}\n${code}`);

    expect(result.minutes).toBe(1);
    expect(result.seconds).toBeGreaterThanOrEqual(30);
    expect(result.seconds).toBeLessThan(40);
    expect(result.text).toMatch(/1 min/);
  });

  it('returns zero seconds for empty input', () => {
    const result = getReadingTime('');

    expect(result.minutes).toBe(0);
    expect(result.seconds).toBe(0);
    expect(result.text).toBe('0 sec');
  });
});
