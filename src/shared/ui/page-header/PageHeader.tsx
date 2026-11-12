import type { ReactNode } from 'react';
import { cx } from '@/shared/lib';
import styles from './page-header.module.scss';

export interface PageHeaderProps {
  /** id заголовка — на него ссылается aria-labelledby секции */
  titleId: string;
  title: string;
  kicker?: string;
  description?: ReactNode;
  className?: string;
}

/** Заголовок страницы: кикер + градиентный h1 + описание. */
export function PageHeader({ titleId, title, kicker, description, className }: PageHeaderProps) {
  return (
    <header className={cx(styles.header, className)}>
      {kicker && <span className={styles.kicker}>{kicker}</span>}
      <h1 id={titleId} className={styles.title}>
        {title}
      </h1>
      {description && <p className={styles.description}>{description}</p>}
    </header>
  );
}
