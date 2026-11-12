import type { ComponentType, ReactNode, SVGProps } from 'react';
import { cx } from '@/shared/lib';
import { CodeIcon } from '../icons';
import { IconSlot } from '../icon-slot';
import styles from './tech-icon.module.scss';

import css3 from '@/shared/assets/icons/tech/css3.svg';
import figma from '@/shared/assets/icons/tech/figma.svg';
import git from '@/shared/assets/icons/tech/git.svg';
import github from '@/shared/assets/icons/tech/github.svg';
import html5 from '@/shared/assets/icons/tech/html5.svg';
import javascript from '@/shared/assets/icons/tech/javascript.svg';
import jquery from '@/shared/assets/icons/tech/jquery.svg';
import nextjs from '@/shared/assets/icons/tech/nextjs.svg';
import react from '@/shared/assets/icons/tech/react.svg';
import sass from '@/shared/assets/icons/tech/sass.svg';
import typescript from '@/shared/assets/icons/tech/typescript.svg';
import vite from '@/shared/assets/icons/tech/vite.svg';

type SvgComponent = ComponentType<SVGProps<SVGSVGElement>>;

const TECH_ICONS: Record<string, SvgComponent> = {
  HTML5: html5,
  CSS3: css3,
  SCSS: sass,
  SASS: sass,
  JavaScript: javascript,
  TypeScript: typescript,
  React: react,
  'Next.js': nextjs,
  Next: nextjs,
  Git: git,
  GitHub: github,
  Vite: vite,
  Figma: figma,
  jQuery: jquery,
};

// Чёрные логотипы: в тёмной теме инвертируются (см. tech-icon.module.scss)
const MONOCHROME = new Set(['Next.js', 'Next', 'GitHub']);

/** «Git / Gitverse» → «Git», «SCSS (SASS)» → «SCSS» — ключ по первому слову. */
export function resolveTechKey(name: string): string | undefined {
  const key = name.split(/[ /]/)[0];
  return key in TECH_ICONS ? key : undefined;
}

export interface TechIconProps {
  name: string;
  size?: string;
  /** Что показать, если для технологии нет иконки */
  fallback?: ReactNode;
}

export function TechIcon({ name, size = '1rem', fallback = <CodeIcon /> }: TechIconProps) {
  const key = resolveTechKey(name);
  const Icon = key ? TECH_ICONS[key] : undefined;

  return (
    <IconSlot size={size} className={cx(key && MONOCHROME.has(key) && styles.mono)}>
      {Icon ? <Icon /> : fallback}
    </IconSlot>
  );
}
