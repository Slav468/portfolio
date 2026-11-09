export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  stack: string;
  description: string;
}

export interface EducationItem {
  id: string;
  course: string;
  year: number;
}

export interface SkillGroup {
  id: string;
  title: string;
  items: string[];
}

export interface PdfLink {
  href: string;
  label: string;
}

export interface Stat {
  number: string;
  label: string;
  description?: string;
}

export interface AboutData {
  name: string;
  role: string;
  location: string;
  bio: string;
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: SkillGroup[];
  pdfLinks: PdfLink[];
  stats: Stat[];
}

export const aboutData: AboutData = {
  name: 'Скоромник Сергей Николаевич',
  role: 'Frontend-разработчик',
  location: 'Минск, Беларусь',
  bio:
    'Frontend-разработчик с более чем 3 годами практического опыта в разработке адаптивных, ' +
    'производительных и масштабируемых пользовательских интерфейсов — без искусственного ' +
    'расширения стека и накрутки опыта.\n\n' +
    'Основной стек:\n' +
    '• JavaScript — работа с DOM, модульная структура, оптимизация логики.\n' +
    '• TypeScript — практический опыт в учебных и пет-проектах.\n' +
    '• React (Next.js) — разработка интерфейсов в собственных проектах (хуки, компоненты, состояние).\n' +
    '• CSS Flexbox / Grid — адаптивные, сложные и многоуровневые сетки.\n' +
    '• SCSS (SASS) — модульная архитектура, переменные, миксины, оптимизация структуры.\n' +
    '• BEM — чистая, поддерживаемая и масштабируемая структура.\n' +
    '• GIT / Gitverse — ветвление, командная работа.\n' +
    '• AI-инструменты — ускорение разработки, автоматизация рутинных процессов.\n\n' +
    'Качество и стандарты:\n' +
    '• Чистый и понятный код.\n' +
    '• Адаптивность и кроссбраузерность.\n' +
    '• Валидность HTML/CSS.\n' +
    '• Доступность (A11y).\n' +
    '• SEO-оптимизация.',
  experience: [
    {
      id: 'exp-1',
      role: 'Frontend-разработчик',
      company: 'ЧУП Компания Яр (yar-studio.com/)',
      period: 'Июнь 2025 — Июль 2026',
      location: 'Минск, Беларусь',
      stack:
        'JavaScript, HTML, CSS, SCSS (SASS), BEM, jQuery, Git, Figma, Vite, GSAP, Swiper, Fancybox, lightGallery, noUiSlider, Яндекс SmartCaptcha',
      description:
        'Разрабатывал и поддерживал пользовательские интерфейсы для коммерческих веб-проектов. Участвовал в полном цикле разработки: от анализа макетов до интеграции и оптимизации. ' +
        'Выполнял адаптивную и кроссбраузерную верстку для 10+ коммерческих проектов (корпоративные сайты, лендинги, каталоги). Разрабатывал UI-компоненты на HTML, SCSS (SASS), BEM и JavaScript. ' +
        'Реализовывал анимации с использованием GSAP, CSS transitions и keyframes. Оптимизировал загрузку страниц: SVG-спрайты, lazy-loading, оптимизация CSS. ' +
        'Интегрировал Яндекс SmartCaptcha в клиентскую часть. Работал с браузерными API: localStorage, sessionStorage, cookies, MutationObserver, IntersectionObserver. ' +
        'Настраивал и дорабатывал библиотеки: Swiper, Fancybox, lightGallery, noUiSlider. Взаимодействовал с backend-разработчиками и дизайнерами для корректной интеграции. ' +
        'Использовал AI-инструменты для ускорения разработки и автоматизации рутинных задач.',
    },
    {
      id: 'exp-2',
      role: 'Frontend-разработчик / HTML-верстальщик',
      company: 'ITOBLAKA (ИП Симонян В.Г., itoblaka.by)',
      period: 'Август 2023 — Июнь 2025',
      location: 'Минск, Беларусь',
      stack: 'JavaScript, HTML, CSS, SCSS, BEM, jQuery, Git, Figma',
      description:
        'Работал над развитием конструктора сайтов и занимался разработкой коммерческих проектов: интернет-магазины, каталоги, корпоративные сайты. ' +
        'Создавал и развивал функциональность конструктора сайтов и новые UI-модули. Выполнял верстку проектов «с нуля» на HTML5, CSS3, SCSS, BEM, JavaScript, jQuery. ' +
        'Обеспечивал адаптивность, валидность и SEO-дружелюбность верстки. Интегрировал сторонние и собственные скрипты для расширения функциональности. ' +
        'Исправлял баги и повышал стабильность интерфейсов. Взаимодействовал с PHP-разработчиком при интеграции клиентской части. ' +
        'Работал с Git: ветвление, code review, поддержание чистоты репозитория.',
    },
  ],
  education: [
    { id: 'edu-1', course: 'ЧИУП — Высшее образование', year: 2011 },
    { id: 'edu-2', course: 'Udemy — Полный курс по современному TypeScript', year: 2025 },
    { id: 'edu-3', course: 'Udemy — Полный курс по JavaScript + React (с нуля до результата)', year: 2025 },
    { id: 'edu-4', course: 'RSSchool — JavaScript/Front-end. Pre-school', year: 2023 },
    { id: 'edu-5', course: 'Udemy — Практический JavaScript (Продвинутый уровень)', year: 2023 },
    { id: 'edu-6', course: 'Udemy — Современный JavaScript с нуля на реальных проектах', year: 2022 },
    { id: 'edu-7', course: 'Udemy — JavaScript: Полный Курс по JavaScript (Включает 80 Задач)', year: 2022 },
    { id: 'edu-8', course: 'Udemy — Web-разработчик 2021', year: 2021 },
  ],
  skills: [
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
      items: [
        'Git / Gitverse',
        'GitHub',
        'Vite',
        'npm',
        'Figma',
        'AI-инструменты',
        'Code review',
      ],
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
      items: ['Русский — родной', 'Белорусский — C2 (в совершенстве)', 'Английский — A2 (элементарный)'],
    },
  ],
  pdfLinks: [
    { href: '/Sergey_Scoromnik_MiniCV.pdf', label: 'скачать MiniCV' },
    { href: '/Sergey_Scoromnik_CV.pdf', label: 'скачать полное резюме (CV)' },
  ],
  stats: [
    { number: '10+', label: 'Проектов', description: 'Коммерческих проектов: лендинги, каталоги, корпоративные сайты' },
    { number: '3+', label: 'Лет опыта', description: 'Практический опыт в frontend-разработке' },
    { number: '15+', label: 'Технологий', description: 'JavaScript, TypeScript, React, SCSS, BEM, Git и др.' },
    { number: '100%', label: 'Качество кода', description: 'Чистый код, валидность, A11y, SEO' },
  ],
};
