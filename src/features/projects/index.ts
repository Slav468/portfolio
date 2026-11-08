import { Project } from './types';

export const projects: Project[] = [
  new Project({
    id: '1',
    title: 'Blog platform Arik',
    slug: 'arik',
    category: 'web',
    description: 'Blog platform with article editor, comment system, tags and SEO optimization. Part of portfolio, hosted on GitHub Pages.',
    shortDescription: 'Blog platform with article editor and SEO.',
    stack: ['HTML5', 'CSS3', 'SCSS', 'JavaScript (ES6+)', 'BEM'],
    image: '/images/projects/arik.jpg',
    githubUrl: 'https://github.com/Slav468/arik',
    demoUrl: 'https://slav468.github.io/arik/',
    featured: true,
    createdAt: '2025-08-05'
  })
];
