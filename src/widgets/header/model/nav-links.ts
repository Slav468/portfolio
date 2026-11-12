import { ROUTES } from '@/shared/config';

export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: readonly NavLink[] = [
  { label: 'Обо мне', href: ROUTES.about },
  { label: 'Проекты', href: ROUTES.projects },
  { label: 'Контакты', href: ROUTES.contact },
];

/** Раздел активен и на вложенных страницах: /projects/arik подсвечивает «Проекты». */
export function isActiveLink(pathname: string, href: string): boolean {
  return pathname === href || pathname.startsWith(`${href}/`);
}
