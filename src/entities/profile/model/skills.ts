import type { SkillGroup } from './types';

export const skills: SkillGroup[] = [
  {
    id: 'skills-hard',
    title: 'Hard Skills',
    items: [
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'HTML5',
      'CSS3',
      'SCSS (SASS)',
      'BEM',
      'AJAX',
      'JSON',
      'API',
      'Верстка',
      'Git',
      'Vite',
      'Figma',
    ],
  },
  {
    id: 'skills-tools',
    title: 'Инструменты и рабочий процесс',
    items: ['Git / Gitverse', 'GitHub', 'Vite', 'npm', 'Figma', 'AI-инструменты', 'Code review'],
  },
  {
    id: 'skills-soft',
    title: 'Личные качества',
    items: [
      'Субординация',
      'Ответственность и соблюдение сроков',
      'Быстрое обучение',
      'Работа в команде',
    ],
  },
  {
    id: 'skills-languages',
    title: 'Языки',
    items: [
      'Русский — родной',
      'Белорусский — C2 (в совершенстве)',
      'Английский — A2 (элементарный)',
    ],
  },
];
