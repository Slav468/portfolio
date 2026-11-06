export interface Project {
  id: string;
  title: string;
  slug: string;
  category: 'web' | 'mobile' | 'design' | 'api';
  description: string;
  shortDescription: string;
  stack: string[];
  image: string; // /images/projects/project-1.jpg (заглушка)
  gallery?: string[];
  githubUrl: string;
  demoUrl?: string;
  featured: boolean;
  createdAt: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Интернет-магазин электроники',
    slug: 'electronics-store',
    category: 'web',
    description:
      'Полноценный интернет-магазин с каталогом, корзиной, оформлением заказа и личным кабинетом.',
    shortDescription: 'E-commerce на Next.js с корзиной и оплатой.',
    stack: ['Next.js 15', 'React 19', 'TypeScript', 'SCSS', 'Zustand'],
    image: '/images/projects/electronics-store.jpg',
    githubUrl: 'https://github.com/yourname/electronics-store',
    demoUrl: 'https://electronics-store.vercel.app',
    featured: true,
    createdAt: '2025-11-10',
  },
  {
    id: '2',
    title: 'Доска объявлений',
    slug: 'classifieds-board',
    category: 'web',
    description:
      'Платформа для публикации и поиска объявлений с фильтрацией, чатом между пользователями и модерацией.',
    shortDescription: 'Доска объявлений с чатом и модерацией.',
    stack: ['Next.js', 'React', 'TypeScript', 'SCSS', 'Firebase'],
    image: '/images/projects/classifieds.jpg',
    githubUrl: 'https://github.com/yourname/classifieds-board',
    featured: true,
    createdAt: '2025-10-20',
  },
  {
    id: '3',
    title: 'Погодное приложение',
    slug: 'weather-app',
    category: 'web',
    description:
      'Приложение для отслеживания погоды в реальном времени с геолокацией, прогнозом на 7 дней и визуальными эффектами.',
    shortDescription: 'Погода в реальном времени с геолокацией.',
    stack: ['React', 'TypeScript', 'SCSS', 'OpenWeather API'],
    image: '/images/projects/weather.jpg',
    githubUrl: 'https://github.com/yourname/weather-app',
    demoUrl: 'https://weather-app.vercel.app',
    featured: true,
    createdAt: '2025-09-15',
  },
  {
    id: '4',
    title: 'Платформа для блога',
    slug: 'blog-platform',
    category: 'web',
    description:
      'Блог-платформа с редактором статей на MDX, системой комментариев, тегами и SEO-оптимизацией.',
    shortDescription: 'Блог с MDX-редактором и SEO.',
    stack: ['Next.js', 'React', 'TypeScript', 'SCSS', 'MDX'],
    image: '/images/projects/blog.jpg',
    githubUrl: 'https://github.com/Slav468/arik',
    demoUrl: 'https://blog-platform.vercel.app',
    featured: true,
    createdAt: '2025-08-05',
  },
  {
    id: '5',
    title: 'Чат-приложение',
    slug: 'real-time-chat',
    category: 'web',
    description:
      'Реальный čas чат с комнатами, личными сообщениями, статусом "в сети" и уведомлениями.',
    shortDescription: 'Чат в реальном времени с комнатами.',
    stack: ['React', 'TypeScript', 'SCSS', 'WebSocket', 'Socket.io'],
    image: '/images/projects/chat.jpg',
    githubUrl: 'https://github.com/yourname/real-time-chat',
    featured: false,
    createdAt: '2025-07-12',
  },
  {
    id: '6',
    title: 'Трекер расходов',
    slug: 'expense-tracker',
    category: 'web',
    description:
      'Личный финансовый трекер с категоризацией трат, графиками, экспортом в CSV и бюджетами.',
    shortDescription: 'Финансовый трекер с графиками.',
    stack: ['React', 'TypeScript', 'SCSS', 'Chart.js', 'localStorage'],
    image: '/images/projects/expenses.jpg',
    githubUrl: 'https://github.com/yourname/expense-tracker',
    featured: false,
    createdAt: '2025-06-18',
  },
  {
    id: '7',
    title: 'Поиск фильмов и сериалов',
    slug: 'movie-discovery',
    category: 'web',
    description:
      'Каталог фильмов с поиском, фильтрацией по жанрам, рейтингом, трейлерами и описанием.',
    shortDescription: 'Каталог фильмов с поиском и трейлерами.',
    stack: ['Next.js', 'React', 'TypeScript', 'SCSS', 'TMDB API'],
    image: '/images/projects/movies.jpg',
    githubUrl: 'https://github.com/yourname/movie-discovery',
    demoUrl: 'https://movie-discovery.vercel.app',
    featured: false,
    createdAt: '2025-05-22',
  },
  {
    id: '8',
    title: 'Лендинг агентства дизайна',
    slug: 'design-agency',
    category: 'design',
    description:
      'Стильный лендинг для дизайн-агентства с анимациями,ケス-стади и формой обратной связи.',
    shortDescription: 'Лендинг агентства с анимациями.',
    stack: ['Next.js', 'React', 'TypeScript', 'SCSS', 'Framer Motion'],
    image: '/images/projects/agency.jpg',
    githubUrl: 'https://github.com/yourname/design-agency',
    featured: false,
    createdAt: '2025-03-05',
  },
  {
    id: '9',
    title: 'REST API для интернет-магазина',
    slug: 'ecommerce-api',
    category: 'api',
    description:
      'Бэкенд API с аутентификацией, заказами, товарами, отзываами и панелью администратора.',
    shortDescription: 'REST API с аутентификацией и заказами.',
    stack: ['Node.js', 'Express', 'TypeScript', 'PostgreSQL', 'JWT'],
    image: '/images/projects/api.jpg',
    githubUrl: 'https://github.com/yourname/ecommerce-api',
    featured: false,
    createdAt: '2025-02-14',
  },
  {
    id: '10',
    title: 'Мобильное приложение для доставки еды',
    slug: 'food-delivery',
    category: 'mobile',
    description:
      'Кроссплатформенное приложение для доставки еды с онлайн-заказами, картой доставки и системой рейтингов.',
    shortDescription: 'Мобильное приложение для доставки еды.',
    stack: ['React Native', 'TypeScript', 'SCSS', 'Firebase'],
    image: '/images/projects/food-delivery.jpg',
    githubUrl: 'https://github.com/yourname/food-delivery',
    featured: false,
    createdAt: '2025-01-20',
  },
];
