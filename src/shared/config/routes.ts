export const ROUTES = {
  home: '/',
  about: '/about',
  projects: '/projects',
  contact: '/contact',
  project: (slug: string) => `/projects/${slug}`,
} as const;
