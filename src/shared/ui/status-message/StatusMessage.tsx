import type { ReactNode } from 'react';
import { Container } from '../container';
import styles from './status-message.module.scss';

export interface StatusMessageProps {
  title: string;
  description?: string;
  /** role="status" для загрузки, role="alert" для ошибок */
  role?: 'status' | 'alert';
  children?: ReactNode;
}

/** Экран-заглушка: 404, ошибка, загрузка. */
export function StatusMessage({ title, description, role, children }: StatusMessageProps) {
  return (
    <Container>
      <section className={styles.root} role={role}>
        <h1 className={styles.title}>{title}</h1>
        {description && <p className={styles.description}>{description}</p>}
        {children && <div className={styles.actions}>{children}</div>}
      </section>
    </Container>
  );
}
