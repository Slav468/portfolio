import { Card, IconSlot, GraduationIcon } from '@/shared/ui';
import type { EducationItem } from '../model/types';
import styles from './education-card.module.scss';

export interface EducationCardProps {
  education: EducationItem;
}

export function EducationCard({ education }: EducationCardProps) {
  return (
    <Card as="article" interactive className={styles.card}>
      <IconSlot size="1.75rem" className={styles.icon}>
        <GraduationIcon />
      </IconSlot>
      <div className={styles.content}>
        <h3 className={styles.title}>{education.course}</h3>
        <p className={styles.year}>{education.year}</p>
      </div>
    </Card>
  );
}
