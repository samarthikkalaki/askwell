import { afterEach, describe, expect, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { APP_NAME } from '@askwell/shared';
import HomePage from '../app/page';
import DashboardPage from '../app/dashboard/page';
import { metadata } from '../app/layout';

afterEach(() => {
  cleanup();
});

describe('pages read the app name from @askwell/shared', () => {
  it('home page shows the app name', () => {
    render(<HomePage />);
    expect(screen.getByRole('heading', { level: 1 }).textContent).toContain(APP_NAME);
  });

  it('dashboard page shows the app name', () => {
    render(<DashboardPage />);
    expect(screen.getByRole('heading', { level: 1 }).textContent).toContain(APP_NAME);
  });

  it('the title template is built from the app name', () => {
    const title = metadata.title as { default: string; template: string };
    expect(title.default).toBe(APP_NAME);
    expect(title.template).toContain(APP_NAME);
  });
});
