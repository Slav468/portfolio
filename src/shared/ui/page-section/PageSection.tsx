import type { ReactNode } from 'react';
import { cx } from '@/shared/lib';
import { BackgroundBlobs } from '../background-blobs';
import { Container } from '../container';
import styles from './page-section.module.scss';

export interface PageSectionProps {
  /** id заголовка страницы (aria-labelledby) */
  labelledBy: string;
  /** Количество декоративных пятен фона, 0 — без фона */
  blobs?: 0 | 1 | 2 | 3;
  className?: string;
  children: ReactNode;
}

/** Каркас страницы: секция + декоративный фон + контейнер. */
export function PageSection({ labelledBy, blobs = 2, className, children }: PageSectionProps) {
  return (
    <section className={cx(styles.root, className)} aria-labelledby={labelledBy}>
      {blobs > 0 && <BackgroundBlobs count={blobs} />}
      <Container className={styles.container}>{children}</Container>
    </section>
  );
}
