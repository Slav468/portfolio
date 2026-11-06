import styles from './hero-section.module.scss';

export function HeroSection() {
  return (
    <section className={styles.section}>
      <div className={styles.blobs}>
        <div className={styles.blob} style={{ background: 'var(--color-blob-cyan)' }} />
        <div className={styles.blob} style={{ background: 'var(--color-blob-purple)' }} />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>Портфолио</h1>
        <p className={styles.description}>
          Фронтенд-разработчик. Стек: Next.js, React, TypeScript, SCSS.
        </p>
      </div>
    </section>
  );
}