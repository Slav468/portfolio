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

export const projects: Project[] = [
  { id: '1', title: 'Блог-платформа «Арик»', slug: 'arik', category: 'web', description: '...', shortDescription: '...', stack: [...], image: '/images/projects/arik.jpg', githubUrl: 'https://github.com/Slav468/arik', demoUrl: 'https://slav468.github.io/arik/', featured: true, createdAt: '2025-08-05' },
  // ... (truncated) 
];
