import styles from './project-grid.module.scss';
import { Project } from '@/data/projects';
import { ProjectCard } from '@/components/features/project-card';

export interface ProjectGridProps {
  projects: Project[];
  className?: string;
}

export function ProjectGrid({ projects, className }: ProjectGridProps) {
  return (
    <section
      className={[styles.grid, className].filter(Boolean).join(' ')}
    >
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          featured={project.featured}
        />
      ))}
    </section>
  );
}