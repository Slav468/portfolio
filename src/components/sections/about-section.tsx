import styles from './about-section.module.scss';
import { ExternalLink } from '@/components/ui/link';

const STACK_ITEMS = [
  'Next.js 16 (App Router)',
  'React 19',
  'TypeScript (strict)',
  'SCSS / CSS Modules',
  'Vitest',
] as const;

export function AboutSection() {
  return (
    <div className={styles.section}>
      <h2 className={styles.title}>Обо мне</h2>

      <p className={styles.text}>
        Фронтенд-разработчик. Специализируюсь на Next.js, React, TypeScript и SCSS.
        Собираю быстрые, доступные и отзывчивые интерфейсы.
      </p>

      <div>
        <h3 className={styles.stackTitle}>Стек</h3>
        <ul className={styles.stackList}>
          {STACK_ITEMS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className={styles.projectsTitle}>Проекты</h3>
        <p className={styles.projectsText}>
          Подборку реальных работ смотрите на главной странице. Исходный код и
          демо-ссылки прикреплены к каждому проекту.
        </p>
      </div>

      <div>
        <p className={styles.pdfLabel}>PDF-резюме:</p>
        <ExternalLink href="/Sergey Scoromnik_MiniCV.pdf" className={styles.pdfLink}>
          скачать MiniCV
        </ExternalLink>
      </div>
    </div>
  );
}