import { AppLink } from '../app-link';
import styles from './breadcrumbs.module.scss';

export interface BreadcrumbItem {
  label: string;
  /** Не задаётся у текущей (последней) страницы */
  href?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Хлебные крошки" className={styles.nav}>
      <ol className={styles.list}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.href ?? item.label} className={styles.item}>
              {isLast || !item.href ? (
                <span className={styles.current} aria-current={isLast ? 'page' : undefined}>
                  {item.label}
                </span>
              ) : (
                <AppLink href={item.href} className={styles.link}>
                  {item.label}
                </AppLink>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
