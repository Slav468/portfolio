export type ProjectCategory = 'web' | 'mobile' | 'design' | 'api';

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: ProjectCategory;
  description: string;
  shortDescription: string;
  stack: string[];
  /** Путь к обложке относительно /public */
  image: string;
  githubUrl: string;
  demoUrl?: string;
  featured: boolean;
  /** ISO-дата YYYY-MM-DD */
  createdAt: string;
}
