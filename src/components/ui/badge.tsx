import { HTMLAttributes } from 'react';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'secondary' | 'outline';
}

const variantStyles: Record<string, string> = {
  default:
    'bg-[var(--color-bg-surface)] border border-[var(--color-border)] text-[var(--color-text-primary)]',
  secondary:
    'bg-[var(--color-bg-elevated)] border border-[var(--color-border)] text-[var(--color-text-secondary)]',
  outline:
    'border border-[var(--color-border)] text-[var(--color-text-primary)] bg-transparent',
};

export function Badge({
  className,
  variant = 'default',
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={[
        'inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium transition-colors',
        variantStyles[variant],
        className,
      ].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </span>
  );
}