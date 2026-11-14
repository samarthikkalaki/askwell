import { defineConfig } from 'vitest/config';

export default defineConfig({
  // Vite 8 transforms with oxc; React's automatic JSX runtime needs to be asked for.
  oxc: {
    jsx: {
      runtime: 'automatic',
      importSource: 'react',
    },
  },
  test: {
    environment: 'jsdom',
    include: ['__tests__/**/*.test.{ts,tsx}'],
    css: false,
  },
});
