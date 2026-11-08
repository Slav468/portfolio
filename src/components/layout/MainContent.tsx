import styles from './main-content.module.scss';
import { ReactNode } from 'react';

export interface MainContentProps {
  children: ReactNode;
  className?: string;
}

export function MainContent({ children, className }: MainContentProps) {
  return <main className={[styles.main, className].filter(Boolean).join(' ')}>{children}</main>;
}
