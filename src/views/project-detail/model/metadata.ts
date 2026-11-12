import type { Metadata } from 'next';
import type { Project } from '@/entities/project';
import { ROUTES } from '@/shared/config';

export const projectNotFoundMetadata: Metadata = { title: 'Проект не найден' };

export function createProjectMetadata(project: Project): Metadata {
  return {
    title: project.title,
    description: project.shortDescription,
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      type: 'website',
      url: ROUTES.project(project.slug),
    },
  };
}
