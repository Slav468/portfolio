'use client';
import styles from './hero-section.module.scss';
import { BackgroundBlobs } from './background-blobs';
import { FloatingIcons } from './floating-icons';
import { HeroContent } from './hero-content';

// Иконки для скиллов
import css3 from '@/assets/icons/skills/css3.svg';
import figma from '@/assets/icons/skills/figma.svg';
import git from '@/assets/icons/skills/git.svg';
import github from '@/assets/icons/skills/github.svg';
import html5 from '@/assets/icons/skills/html5.svg';
import javascript from '@/assets/icons/skills/javascript.svg';
import jquery from '@/assets/icons/skills/jquery.svg';
import nextjs from '@/assets/icons/skills/nextjs.svg';
import react from '@/assets/icons/skills/react.svg';
import sass from '@/assets/icons/skills/sass.svg';
import typescript from '@/assets/icons/skills/typescript.svg';
import vite from '@/assets/icons/skills/vite.svg';

// Иконки для статистики (inline SVG)
const ProjectsIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 1-3 3H2" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 0 3 3h7" />
  </svg>
);

const YearsIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const TechIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const ClientsIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export function HeroSection() {
  const svgComponents = [
    nextjs(),
    react(),
    typescript(),
    javascript(),
    css3(),
    sass(),
    vite(),
    figma(),
    git(),
    github(),
    html5(),
    jquery(),
  ];

  return (
    <section className={styles.section}>
      <BackgroundBlobs
        blobCount={2}
        blobSizes={[
          [50, 50],
          [40, 40],
        ]}
        blobPositions={[
          [-15, -15],
          [-10, -10],
        ]}
        animationDurations={[14, 18]}
      />
      <div className={styles.glass} />
      <div className={styles.hero__inner}>
        <FloatingIcons svgComponents={svgComponents} />
      </div>
      <HeroContent
        kicker="Frontend-разработчик"
        title="Сергей Скоромник"
        accent="•"
        description="Специализируюсь на создании современных веб-интерфейсов с помощью React, TypeScript и CSS (SCSS). Разрабатываю доступные и высокопроизводительные решения для цифровых продуктов. Имею опыт работы с Next, Zustand, Tailwind CSS и современными стандартами веб-разработки. Создаю интерфейсы, которые сочетают эстетику, функциональность и отличный UX."
        ctaPrimary={{ label: 'Проекты', href: '/projects', rel: 'noopener noreferrer' }}
        ctaSecondary={{
          label: 'ГитХаб',
          href: 'https://github.com/Slav468',
          target: '_blank',
        }}
        stats={[
          {
            number: '12+',
            label: 'Проектов',
            icon: <ProjectsIcon />,
            description: 'В портфолио: от лендингов до SPA',
            delay: 0,
          },
          {
            number: '6+',
            label: 'Лет опыта',
            icon: <YearsIcon />,
            description: 'С 2019 года в веб-разработке',
            trend: { value: '+2 за год', positive: true },
            delay: 150,
          },
          {
            number: '15+',
            label: 'Технологий',
            icon: <TechIcon />,
            description: 'React, TS, Next, SCSS, Vite и др.',
            delay: 300,
          },
          {
            number: '100%',
            label: 'Качество кода',
            icon: <ClientsIcon />,
            description: 'Типизация, линтинг, тесты, a11y',
            delay: 450,
          },
        ]}
      />
    </section>
  );
}
