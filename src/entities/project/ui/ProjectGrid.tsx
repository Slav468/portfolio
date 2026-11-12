import { Reveal } from '@/shared/ui';
import { cx } from '@/shared/lib';
import type { Project } from '../model/types';
import { ProjectCard } from './ProjectCard';
import styles from './project-grid.module.scss';

export interface ProjectGridProps {
  projects: Project[];
  /** Фиксированное число колонок. Без него — адаптивно: 1 → 2 → 3 */
  columns?: 1 | 2 | 3;
  /** Растягивать избранные проекты на две колонки */
  emphasizeFeatured?: boolean;
  className?: string;
}

const STAGGER_MS = 80;

export function ProjectGrid({
  projects,
  columns,
  emphasizeFeatured = true,
  className,
}: ProjectGridProps) {
  return (
    <section className={cx(styles.grid, columns && styles[`cols${columns}`], className)}>
      {projects.map((project, index) => {
        const wide = emphasizeFeatured && project.featured;
        return (
          <Reveal
            key={project.id}
            delay={index * STAGGER_MS}
            className={cx(styles.item, wide && styles.wide)}
          >
            <ProjectCard project={project} featured={wide} />
          </Reveal>
        );
      })}
    </section>
  );
}
