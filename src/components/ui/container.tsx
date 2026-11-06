import { HTMLAttributes } from 'react';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}

export function Container({ className, children, ...props }: ContainerProps) {
  return (
    <div
      className={['max-w-5xl mx-auto px-6', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </div>
  );
}