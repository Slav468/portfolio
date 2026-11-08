import styles from './container.module.scss';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={[styles.container, className].filter(Boolean).join(' ')}
      {...props}
    />
  );
}