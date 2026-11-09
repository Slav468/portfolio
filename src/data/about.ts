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

export interface AboutData {
  name: string;
  role: string;
  location: string;
  bio: string;
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: SkillGroup[];
  pdfLinks: PdfLink[];
}

export const aboutData: AboutData = {
  name: 'Сергей Скоромник',
  role: 'Frontend Developer',
  location: 'Минск, Беларусь',
  bio:
    'Frontend-разработчик с 3+ годами коммерческого опыта в создании отзывчивых и ' +
    'кроссбраузерных веб-интерфейсов. Сильная основа в HTML5, CSS3, SCSS/SASS, BEM и ' +
    'JavaScript (ES6+). Опыт разработки переиспользуемых UI-компонентов, адаптивной и ' +
    'SEO-дружественной вёрстки, работы с DOM API, браузерным хранилищем, сторонними ' +
    'интеграциями, анимациями и отладкой фронтенда. В данный момент расширяю экспертизу в ' +
    'React, TypeScript и Next.js через создание современных веб-приложений и личных проектов.',
  experience: [
    {
      id: 'exp-1',
      role: 'Frontend Developer',
      company: 'Web Studio Yar',
      period: '2025 – 2026',
      location: 'Минск, Беларусь',
      stack:
        'JavaScript, HTML, CSS, jQuery, Git, Figma, Vite, GSAP, Swiper, Fancybox, lightGallery, noUiSlider',
      description:
        'Создание адаптивных и кроссбраузерных вёрсток для 10+ коммерческих проектов на HTML, SCSS/SASS, BEM и JavaScript. ' +
        'Разработка модульных UI-компонентов и интерактивных интерфейсов. Внедрение анимаций (GSAP, CSS transitions, keyframes), ' +
        'интеграция Yandex SmartCaptcha, работа с DOM APIs, localStorage/sessionStorage, cookies, MutationObserver, IntersectionObserver.',
    },
    {
      id: 'exp-2',
      role: 'Frontend Developer',
      company: 'Web studio Itoblaka',
      period: '2023 – 2025',
      location: 'Минск, Беларусь',
      stack: 'JavaScript, HTML, CSS, jQuery, Git, Figma',
      description:
        'Доработка и расширение функционала платформы конструктора сайтов. Разработка проектов с нуля на HTML5, CSS3, SCSS, BEM, JavaScript и jQuery. ' +
        'Вёрстка интернет-магазинов, корпоративных сайтов и каталогов с 0. Интеграция кастомных и сторонних скриптов, отладка фронтенда/бэкенда, ' +
        'работа с Git (branching, code review).',
    },
  ],
  education: [
    { id: 'edu-1', course: 'Udemy — Web developer', year: 2021 },
    { id: 'edu-2', course: 'Udemy — Modern JavaScript', year: 2022 },
    { id: 'edu-3', course: 'Udemy — Complete JavaScript Course (Includes 80 Tasks)', year: 2022 },
    { id: 'edu-4', course: 'Udemy — Practical JavaScript (Advanced)', year: 2023 },
    { id: 'edu-5', course: 'RSSchool — JavaScript/Front-end', year: 2023 },
    { id: 'edu-6', course: 'Udemy — JavaScript + React', year: 2025 },
    { id: 'edu-7', course: 'Udemy — modern TypeScript', year: 2025 },
  ],
  skills: [
    {
      id: 'skills-hard',
      title: 'Hard Skills',
      items: [
        'HTML5',
        'CSS3 / SCSS / SASS',
        'JavaScript (ES6+)',
        'TypeScript',
        'React',
        'Next.js',
        'Responsive Web Design',
        'Cross-browser Development',
        'Accessibility (a11y)',
        'SEO-friendly markup',
      ],
    },
    {
      id: 'skills-tools',
      title: 'Tools & Workflow',
      items: [
        'Git',
        'GitHub',
        'Vite',
        'npm',
        'Figma',
        'Browser DevTools',
        'AI-assisted development tools',
      ],
    },
    {
      id: 'skills-soft',
      title: 'Soft Skills',
      items: [
        'Problem solving',
        'Team collaboration',
        'Code review',
        'Time Management',
        'Critical Thinking',
        'Self-learning',
        'Attention to detail',
        'Technical communication',
      ],
    },
    {
      id: 'skills-languages',
      title: 'Languages',
      items: ['English (A2)', 'Russian (C1)', 'Belarus (Native)'],
    },
  ],
  pdfLinks: [
    { href: '/Sergey_Scoromnik_MiniCV.pdf', label: 'скачать MiniCV' },
    { href: '/Sergey_Scoromnik_CV.pdf', label: 'скачать полное резюме (CV)' },
  ],
};
