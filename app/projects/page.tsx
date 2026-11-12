import type { Metadata } from 'next';
import { ProjectsPage, projectsMetadata } from '@/views/projects';

export const metadata: Metadata = projectsMetadata;

export default function Page() {
  return <ProjectsPage />;
}
