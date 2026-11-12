import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllProjects, getProjectBySlug } from '@/entities/project';
import {
  ProjectDetailPage,
  createProjectMetadata,
  projectNotFoundMetadata,
} from '@/views/project-detail';

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllProjects().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  return project ? createProjectMetadata(project) : projectNotFoundMetadata;
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return <ProjectDetailPage project={project} />;
}
