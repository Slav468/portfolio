import { projects } from './projects';
import type { Project, ProjectCategory } from './types';

export const PROJECT_CATEGORY_LABELS: Record<ProjectCategory, string> = {
  web: 'Web',
  mobile: 'Mobile',
  design: 'Design',
  api: 'API',
};

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

/** Избранные проекты, новые первыми. Детерминированно — без Math.random(). */
export function getFeaturedProjects(limit = 3): Project[] {
  return projects
    .filter((project) => project.featured)
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    .slice(0, limit);
}
