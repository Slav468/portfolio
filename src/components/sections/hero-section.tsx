import styles from './hero-section.module.scss';

export function HeroSection() {
  return (
    <section className={styles.section}>
      <div className={styles.blobs}>
        <div className={styles.blob} style={{ background: 'var(--color-blob-cyan)' }} />
        <div className={styles.blob} style={{ background: 'var(--color-blob-purple)' }} />
      </div>
      <div className={styles.content}>
        <div className={styles.kicker}>Frontend Developer · Минск, Беларусь</div>
        <h1 className={styles.title}>
          Сергей Скоромник<span className={styles.accent}>.</span>
        </h1>
        <p className={styles.description}>
          Создаю быстрые, доступные и отзывчивые веб-интерфейсы на Next.js,
          React, TypeScript и SCSS. 3+ года коммерческого опыта, 10+ коммерческих
          проектов, фокус на чистый код и производительность.
        </p>
        <div className={styles.ctaGroup}>
          <a href="/projects" className={styles.ctaPrimary}>
            Мои проекты
          </a>
          <a href="/contact" className={styles.ctaSecondary}>
            Связаться
          </a>
        </div>
        <div className={styles.stats}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>3+</span>
            <span className={styles.statLabel}>лет опыта</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>10+</span>
            <span className={styles.statLabel}>коммерческих проектов</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>12</span>
            <span className={styles.statLabel}>проектов в портфолио</span>
          </div>
        </div>
      </div>
    </section>
  );
}