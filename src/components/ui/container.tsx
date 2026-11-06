import styles from './container.module.scss';
import { HTMLAttributes } from 'react';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}

export function Container({ className, children, ...props }: ContainerProps) {
  return (
    <div
      className={[styles.container, className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </div>
  );
}