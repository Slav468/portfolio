import { Project } from './types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Блог-платформа «Арик»',
    slug: 'arik',
    category: 'web',
    description: 'Блог-платформа с редактором статей, системой комментариев, тегами и SEO-оптимизацией. Разработана как часть портфолио, размещена на GitHub Pages.',
    shortDescription: 'Блог-платформа с редактором статей и SEO.',
    stack: ['HTML5', 'CSS3', 'SCSS', 'JavaScript (ES6+)', 'BEM'],
    image: '/images/projects/arik.jpg',
    githubUrl: 'https://github.com/Slav468/arik',
    demoUrl: 'https://slav468.github.io/arik/',
    featured: true,
    createdAt: '2025-08-05'
  }
];
