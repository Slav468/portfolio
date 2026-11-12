import type { Profile } from './types';

const SUMMARY =
  'Привет! Я Сергей, frontend-разработчик из Минска. ' +
  'Более 3 лет создаю адаптивные, быстрые и доступные веб-интерфейсы — от лендингов до корпоративных порталов. ' +
  'Без надуманного опыта и искусственного расширения стека.';

const DETAILS =
  '\n\n' +
  'Мои инструменты:\n' +
  '• JavaScript (DOM, модули, оптимизация), TypeScript, React и Next.js\n' +
  '• CSS Flexbox/Grid, SCSS, BEM — чистая и масштабируемая вёрстка\n' +
  '• Git/Gitverse, Figma, Vite, AI-инструменты\n' +
  '\n' +
  'Что важно для меня:\n' +
  '• Чистый, понятный код\n' +
  '• Адаптивность и кроссбраузерность\n' +
  '• Валидный HTML/CSS, доступность (A11y), SEO';

export const profile: Profile = {
  fullName: 'Скоромник Сергей Николаевич',
  shortName: 'Сергей Скоромник',
  role: 'Frontend-разработчик',
  location: 'Минск, Беларусь',
  summary: SUMMARY,
  bio: SUMMARY + DETAILS,
};
