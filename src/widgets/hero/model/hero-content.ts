import { projects } from '@/entities/project';
import { ROUTES } from '@/shared/config';

export type HeroStatIcon = 'projects' | 'years' | 'tech' | 'quality';

export interface HeroStat {
  value: string;
  label: string;
  description: string;
  icon: HeroStatIcon;
  trend?: { value: string; positive?: boolean };
}

export const HERO_CONTENT = {
  kicker: 'Frontend-разработчик',
  title: 'Сергей Скоромник',
  description:
    'Специализируюсь на создании современных веб-интерфейсов с помощью React, TypeScript и CSS (SCSS). ' +
    'Разрабатываю доступные и высокопроизводительные решения для цифровых продуктов. ' +
    'Имею опыт работы с Next, Zustand, Tailwind CSS и современными стандартами веб-разработки. ' +
    'Создаю интерфейсы, которые сочетают эстетику, функциональность и отличный UX.',
  primaryCta: { label: 'Проекты', href: ROUTES.projects },
  githubCta: { label: 'ГитХаб', href: 'https://github.com/Slav468' },
} as const;

/** Технологии для плавающих иконок на фоне (порядок = порядок слотов). */
export const HERO_TECH = [
  'Next.js',
  'React',
  'TypeScript',
  'JavaScript',
  'CSS3',
  'SCSS',
  'Vite',
  'Figma',
  'Git',
  'GitHub',
  'HTML5',
  'jQuery',
] as const;

export const HERO_STATS: readonly HeroStat[] = [
  {
    value: `${projects.length}+`,
    label: 'Проектов',
    description: 'В портфолио: от лендингов до SPA',
    icon: 'projects',
  },
  {
    value: '6+',
    label: 'Лет опыта',
    description: 'С 2019 года в веб-разработке',
    icon: 'years',
    trend: { value: '+2 за год', positive: true },
  },
  {
    value: '15+',
    label: 'Технологий',
    description: 'React, TS, Next, SCSS, Vite и др.',
    icon: 'tech',
  },
  {
    value: '100%',
    label: 'Качество кода',
    description: 'Типизация, линтинг, тесты, a11y',
    icon: 'quality',
  },
];
