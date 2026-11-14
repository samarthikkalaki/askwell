import type { Metadata } from 'next';
import { APP_NAME } from '@askwell/shared';

export const metadata: Metadata = {
  title: 'Dashboard',
};

export default function DashboardPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-paper-muted px-6 py-16 text-ink">
      <div className="glass-light w-full max-w-md px-8 py-10 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">{APP_NAME} dashboard</h1>
        <p className="mt-3 text-sm text-ink-muted">Nothing here yet.</p>
      </div>
    </main>
  );
}
