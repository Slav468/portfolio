import { HTMLAttributes } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {}

export function Card({ className, children, ...props }: CardProps) {
  return (
    <div
      className={[
        'rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-surface)] p-6',
        className,
      ].filter(Boolean).join(' ')}
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
      className={['flex flex-col space-y-1.5 pb-2', className].filter(Boolean).join(' ')}
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
      className={['text-xl font-bold leading-none tracking-tight text-[var(--color-text-primary)]', className].filter(Boolean).join(' ')}
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
      className={['pt-2 text-[var(--color-text-secondary)]', className].filter(Boolean).join(' ')}
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
      className={['mt-2 flex items-center', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </div>
  );
}