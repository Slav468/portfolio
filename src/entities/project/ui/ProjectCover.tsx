import type { CSSProperties } from 'react';
import { cx } from '@/shared/lib';
import type { Project } from '../model/types';
import styles from './project-cover.module.scss';

export interface ProjectCoverProps {
  project: Pick<Project, 'image' | 'title'>;
  className?: string;
}

/**
 * Обложка проекта. Если файла картинки нет, остаётся градиент-подложка
 * (фон: [картинка, градиент] — вторая «карта» видна, когда первая не загрузилась).
 */
export function ProjectCover({ project, className }: ProjectCoverProps) {
  return (
    <div
      className={cx(styles.cover, className)}
      style={{ '--cover-image': `url("${project.image}")` } as CSSProperties}
      role="img"
      aria-label={`Обложка проекта «${project.title}»`}
    />
  );
}
