'use client';

import styles from './PdfButtons.module.scss';
import { ExternalLink } from '@/components/ui/link';
import { DownloadIcon } from './icons';
import type { PdfLink } from '@/data/about';

export interface PdfButtonsProps {
  links: PdfLink[];
}

export function PdfButtons({ links }: PdfButtonsProps) {
  return (
    <div className={styles.wrapper}>
      {links.map((link) => (
        <ExternalLink key={link.href} href={link.href} className={styles.btn}>
          {link.label}
          <span className={styles.iconWrap} aria-hidden="true"><DownloadIcon /></span>
        </ExternalLink>
      ))}
    </div>
  );
}