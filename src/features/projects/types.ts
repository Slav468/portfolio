export interface Project {
  id: string;
  title: string;
  slug: string;
  category: 'web' | 'mobile' | 'design' | 'api';
  description: string;
  shortDescription: string;
  stack: string[];
  image: string;
  githubUrl: string;
  demoUrl?: string;
  featured: boolean;
  createdAt: string;
}

export const projects: Project[] = [];
