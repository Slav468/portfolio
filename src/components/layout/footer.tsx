import { useMemo } from 'react';
import styles from './footer.module.scss';

export function Footer({ authorName }: { authorName?: string }) {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <p className={styles.copyright}>
            © {currentYear} {authorName ?? 'Имя Фамилии'}. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}