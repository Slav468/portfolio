import { Card, IconSlot, BriefcaseIcon } from '@/shared/ui';
import type { ExperienceItem } from '../model/types';
import styles from './experience-card.module.scss';

export interface ExperienceCardProps {
  experience: ExperienceItem;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  const { role, period, company, location, stack, description } = experience;

  return (
    <Card as="article" accent interactive className={styles.card}>
      <header className={styles.header}>
        <div className={styles.roleGroup}>
          <h3 className={styles.role}>{role}</h3>
          <span className={styles.period}>{period}</span>
        </div>
        <IconSlot size="1.5rem" className={styles.icon}>
          <BriefcaseIcon />
        </IconSlot>
      </header>
      <p className={styles.company}>{company}</p>
      <p className={styles.location}>{location}</p>
      <p className={styles.stack}>
        <span className={styles.stackLabel}>Стек:</span> {stack}
      </p>
      <p className={styles.description}>{description}</p>
    </Card>
  );
}
