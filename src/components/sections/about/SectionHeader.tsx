import styles from './SectionHeader.module.scss';

export interface SectionHeaderProps {
  title: string;
}

export function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <h2 className={styles.title}>{title}</h2>
  );
}