import { describe, it, expect } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { TechIcon, resolveTechKey } from './TechIcon';

describe('resolveTechKey', () => {
  it('resolves by the first word of a skill name', () => {
    expect(resolveTechKey('JavaScript (ES6+)')).toBe('JavaScript');
    expect(resolveTechKey('Git/Gitverse')).toBe('Git');
    expect(resolveTechKey('SCSS (SASS)')).toBe('SCSS');
    expect(resolveTechKey('Next.js')).toBe('Next.js');
  });

  it('returns undefined for unknown technologies', () => {
    expect(resolveTechKey('Верстка')).toBeUndefined();
  });
});

describe('TechIcon', () => {
  it('renders a brand icon for known tech and a fallback otherwise', () => {
    expect(renderToStaticMarkup(<TechIcon name="React" />)).toContain('data-testid="svg-icon"');
    // fallback — контурная иконка кода (polyline), а не SVG-заглушка бренда
    expect(renderToStaticMarkup(<TechIcon name="Верстка" />)).toContain('polyline');
  });
});
