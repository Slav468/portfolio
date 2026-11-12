import type { ProfileStat } from '@/entities/profile';
import { Reveal, StatCard } from '@/shared/ui';
import styles from './about-sections.module.scss';

const STAGGER_MS = 80;

export function AboutStats({ stats }: { stats: ProfileStat[] }) {
  return (
    <div className={styles.stats}>
      {stats.map((stat, index) => (
        <Reveal key={stat.label} delay={index * STAGGER_MS}>
          <StatCard value={stat.number} label={stat.label} description={stat.description} />
        </Reveal>
      ))}
    </div>
  );
}
