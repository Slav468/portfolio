import { Project } from '@/data/projects';
import { ProjectCard } from '@/components/features/project-card';

export interface ProjectGridProps {
  projects: Project[];
  className?: string;
}

export function ProjectGrid({ projects, className }: ProjectGridProps) {
  return (
    <section
      className={['grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6', className].filter(Boolean).join(' ')}
    >
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
}