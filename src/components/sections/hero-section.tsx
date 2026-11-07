import styles from './hero-section.module.scss';
import { BackgroundBlobs } from './background-blobs';
import { FloatingIcons } from './floating-icons';
import { HeroContent } from './hero-content';

// Иконки
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
        kicker="Фронтенд-разработчик"
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
          { number: '8', label: 'Проекты' },
          { number: '3+', label: 'Лета' },
          { number: '100%', label: 'Удовлетворенность' },
        ]}
      />
    </section>
  );
}
