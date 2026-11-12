import type { CSSProperties, ReactNode } from 'react';
import styles from './floating-icons.module.scss';

const SLOTS = [
  { top: '5%', left: '5%', duration: 8, delay: 0 },
  { top: '20%', left: '30%', duration: 10, delay: 2 },
  { top: '40%', left: '55%', duration: 12, delay: 4 },
  { top: '65%', left: '75%', duration: 14, delay: 1 },
  { top: '75%', left: '50%', duration: 9, delay: 3 },
  { top: '85%', left: '25%', duration: 11, delay: 5 },
  { top: '70%', left: '88%', duration: 13, delay: 6 },
  { top: '80%', left: '5%', duration: 10, delay: 2 },
  { top: '20%', left: '70%', duration: 12, delay: 4 },
  { top: '45%', left: '5%', duration: 9, delay: 6 },
  { top: '60%', left: '40%', duration: 11, delay: 8 },
  { top: '10%', left: '88%', duration: 14, delay: 10 },
] as const;

export interface FloatingIconsProps {
  /** Иконки (до 12 штук) — каждая занимает свой слот */
  items: ReactNode[];
}

export function FloatingIcons({ items }: FloatingIconsProps) {
  return (
    <div className={styles.icons} aria-hidden="true">
      {items.slice(0, SLOTS.length).map((item, index) => {
        const slot = SLOTS[index];
        return (
          <span
            key={index}
            className={styles.icon}
            style={
              {
                top: slot.top,
                left: slot.left,
                '--float-duration': `${slot.duration}s`,
                '--float-delay': `${slot.delay}s`,
              } as CSSProperties
            }
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}
