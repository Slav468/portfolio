import { fileURLToPath } from 'node:url';
import type { Plugin } from 'vite';
import { defineConfig } from 'vitest/config';

/**
 * В продакшене SVG — React-компоненты (@svgr/webpack). В тестах подменяем их
 * лёгкой заглушкой, чтобы не мокать каждую иконку отдельно.
 */
const svgComponentStub = (): Plugin => ({
  name: 'svg-component-stub',
  enforce: 'pre',
  load(id) {
    if (!id.split('?')[0].endsWith('.svg')) return null;
    return `
      import { createElement } from 'react';
      export default function SvgStub(props) {
        return createElement('svg', { 'data-testid': 'svg-icon', 'aria-hidden': 'true', ...props });
      }
    `;
  },
});

export default defineConfig({
  plugins: [svgComponentStub()],
  test: {
    include: ['src/**/*.{test,spec}.?(c|m)[jt]s?(x)'],
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
