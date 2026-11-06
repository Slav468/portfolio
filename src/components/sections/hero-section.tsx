import styles from './hero-section.module.scss';

export function HeroSection() {
  return (
    <div className={styles.section}>
      <h1 className={styles.title}>Портфолио</h1>
      <p className={styles.description}>
        Фронтенд-разработчик. Стек: Next.js, React, TypeScript, SCSS.
      </p>
    </div>
  );
}