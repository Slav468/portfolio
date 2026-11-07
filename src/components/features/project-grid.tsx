import styles from './project-grid.module.scss';
import { Project } from '@/data/projects';
import { ProjectCard } from '@/components/features/project-card';

export interface ProjectGridProps {
  projects: Project[];
  className?: string;
  columns?: 1 | 2 | 3;
  uniform?: boolean;
}

export function ProjectGrid({ projects, className, columns = 3, uniform = false }: ProjectGridProps) {
  return (
    <section
      className={[styles.grid, className, columns && styles[`cols-${columns}`]].filter(Boolean).join(' ')}
    >
      {projects.map((project, i) => (
        <ProjectCard
          key={project.id}
          project={project}
          featured={uniform ? false : project.featured}
          revealDelay={i * 0.08}
        />
      ))}
    </section>
  );
}