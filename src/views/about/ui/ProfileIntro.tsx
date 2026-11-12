import { IconSlot, UserIcon } from '@/shared/ui';
import styles from './profile-intro.module.scss';

export interface ProfileIntroProps {
  name: string;
  role: string;
  location: string;
}

export function ProfileIntro({ name, role, location }: ProfileIntroProps) {
  return (
    <div className={styles.intro}>
      <IconSlot size="2rem" className={styles.avatar}>
        <UserIcon />
      </IconSlot>
      <div className={styles.text}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.role}>
          {role} · {location}
        </p>
      </div>
    </div>
  );
}
