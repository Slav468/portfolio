'use client';

import styles from './SkillTag.module.scss';
import { CodeIcon } from './icons';

export interface SkillTagProps {
  skill: string;
  Icon?: React.ComponentType;
}

export function SkillTag({ skill, Icon }: SkillTagProps) {
  const CustomIcon = Icon ?? CodeIcon;
  return (
    <li className={styles.item}>
      <span className={styles.iconWrap} aria-hidden="true"><CustomIcon /></span>
      {skill}
    </li>
  );
}