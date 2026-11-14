import { APP_NAME } from '@askwell/shared';

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-ink px-6 py-16 text-paper">
      <div className="glass-dark w-full max-w-md px-8 py-10 text-center">
        <h1 className="text-4xl font-semibold tracking-tight">{APP_NAME}</h1>
        <p className="mt-3 text-sm text-white/60">An AI support chat widget for any website.</p>
      </div>
    </main>
  );
}
