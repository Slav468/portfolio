import { Container } from '@/shared/ui';
import styles from './footer.module.scss';

export interface FooterProps {
  authorName: string;
}

export function Footer({ authorName }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <Container>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} {authorName}. Все права защищены.
        </p>
      </Container>
    </footer>
  );
}
