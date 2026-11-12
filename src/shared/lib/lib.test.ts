import { describe, it, expect } from 'vitest';
import { cx, formatMonthYear } from './index';

describe('cx', () => {
  it('joins truthy values and skips falsy ones', () => {
    expect(cx('a', false, undefined, null, 'b', '')).toBe('a b');
  });

  it('returns an empty string when nothing is passed', () => {
    expect(cx()).toBe('');
  });
});

describe('formatMonthYear', () => {
  it('formats an ISO date in Russian without timezone drift', () => {
    expect(formatMonthYear('2024-11-01')).toMatch(/ноябрь 2024/);
    expect(formatMonthYear('2025-01-01')).toMatch(/январь 2025/);
  });
});
