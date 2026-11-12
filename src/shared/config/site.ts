export const SITE = {
  name: 'Сергей Скоромник',
  title: 'Сергей Скоромник — frontend-разработчик',
  titleTemplate: '%s | Сергей Скоромник',
  description: 'Портфолио frontend-разработчика',
  locale: 'ru_RU',
  lang: 'ru',
  // Задайте NEXT_PUBLIC_SITE_URL в .env.production — используется для OpenGraph/canonical
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://your-domain.com',
} as const;
