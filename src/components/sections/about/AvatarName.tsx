'use client';

import styles from './AvatarName.module.scss';
import { UserIcon } from './icons';

export interface AvatarNameProps {
  name: string;
  role: string;
  location: string;
  size?: 'sm' | 'md' | 'lg';
}

export function AvatarName({ name, role, location, size = 'md' }: AvatarNameProps) {
  const sizeClass = styles[`avatarWrap--${size}`];

  return (
    <div className={`${styles.avatarName} ${sizeClass}`}>
      <div className={styles.avatarWrap} aria-hidden="true">
        <UserIcon />
      </div>
      <div className={styles.text}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.role}>{role} · {location}</p>
      </div>
    </div>
  );
}