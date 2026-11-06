import styles from './card.module.scss';
import { HTMLAttributes } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {}

export function Card({ className, children, ...props }: CardProps) {
  return (
    <div
      className={[styles.card, className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </div>
  );
}

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {}
export function CardHeader({ className, children, ...props }: CardHeaderProps) {
  return (
    <div
      className={[styles.cardHeader, className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </div>
  );
}

export interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {}
export function CardTitle({ className, children, ...props }: CardTitleProps) {
  return (
    <h3
      className={[styles.cardTitle, className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </h3>
  );
}

export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {}
export function CardContent({ className, children, ...props }: CardContentProps) {
  return (
    <div
      className={[styles.cardContent, className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </div>
  );
}

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {}
export function CardFooter({ className, children, ...props }: CardFooterProps) {
  return (
    <div
      className={[styles.cardFooter, className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </div>
  );
}