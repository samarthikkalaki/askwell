import { describe, expect, it } from 'vitest';
import { APP_NAME } from './index';

describe('APP_NAME', () => {
  it('is the single source of the app name', () => {
    expect(APP_NAME).toBe('Askwell');
  });
});
