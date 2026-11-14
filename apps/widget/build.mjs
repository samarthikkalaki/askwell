import { build, context } from 'esbuild';

/** One file, no runtime deps, small enough to drop on a customer's page (project.md §3). */
const options = {
  entryPoints: ['src/index.ts'],
  outfile: 'dist/widget.js',
  bundle: true,
  format: 'iife',
  target: 'es2019',
  platform: 'browser',
  minify: true,
  sourcemap: false,
  legalComments: 'none',
};

if (process.argv.includes('--watch')) {
  const ctx = await context(options);
  await ctx.watch();
  console.log('[widget] watching');
} else {
  await build(options);
  console.log('[widget] built dist/widget.js');
}
