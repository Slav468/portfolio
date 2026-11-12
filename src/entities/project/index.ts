export type { Project, ProjectCategory } from './model/types';
export { projects } from './model/projects';
export {
  PROJECT_CATEGORY_LABELS,
  getAllProjects,
  getFeaturedProjects,
  getProjectBySlug,
} from './model/selectors';
export { ProjectCard, type ProjectCardProps } from './ui/ProjectCard';
export { ProjectCover, type ProjectCoverProps } from './ui/ProjectCover';
export { ProjectGrid, type ProjectGridProps } from './ui/ProjectGrid';
