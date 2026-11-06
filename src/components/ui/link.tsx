'use client';

import styles from './link.module.scss';
import { AnchorHTMLAttributes } from 'react';
import Link from 'next/link';

export interface ExternalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}

export function ExternalLink({
  href,
  children,
  className,
  external = true,
  ...props
}: ExternalLinkProps) {
  return (
    <Link
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={[styles.link, className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </Link>
  );
}