import type { CvLink } from '@/entities/profile';
import { ButtonLink, DownloadIcon, IconSlot } from '@/shared/ui';
import styles from './download-cv-buttons.module.scss';

export interface DownloadCvButtonsProps {
  links: CvLink[];
}

/** Кнопки скачивания резюме: первая — основная, остальные — вторичные. */
export function DownloadCvButtons({ links }: DownloadCvButtonsProps) {
  return (
    <div className={styles.wrapper}>
      {links.map((link, index) => (
        <ButtonLink key={link.href} href={link.href} variant={index === 0 ? 'primary' : 'secondary'}>
          {link.label}
          <IconSlot size="1.125rem">
            <DownloadIcon />
          </IconSlot>
        </ButtonLink>
      ))}
    </div>
  );
}
