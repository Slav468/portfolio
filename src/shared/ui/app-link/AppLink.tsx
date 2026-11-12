import Link from 'next/link';
import type { AnchorHTMLAttributes } from 'react';

export interface AppLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  href: string;
  /** Принудительно открыть/не открывать в новой вкладке. По умолчанию — для внешних URL и файлов. */
  newTab?: boolean;
}

const ABSOLUTE_URL = /^(https?:)?\/\//i;
const PROTOCOL_URL = /^(mailto|tel):/i;
const FILE_URL = /\.[a-z0-9]{2,5}$/i;

/**
 * Единая ссылка проекта:
 *  - внутренние маршруты → next/link (клиентская навигация, prefetch);
 *  - внешние URL, mailto:, tel: и файлы (PDF) → обычный <a>.
 */
export function AppLink({ href, newTab, rel, target, children, ...props }: AppLinkProps) {
  const path = href.split(/[?#]/)[0];
  const isAbsolute = ABSOLUTE_URL.test(href);
  const useAnchor = isAbsolute || PROTOCOL_URL.test(href) || FILE_URL.test(path);
  const opensNewTab = newTab ?? (isAbsolute || FILE_URL.test(path));

  if (!useAnchor) {
    return (
      <Link href={href} rel={rel} target={target} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target={target ?? (opensNewTab ? '_blank' : undefined)}
      rel={rel ?? (opensNewTab ? 'noopener noreferrer' : undefined)}
      {...props}
    >
      {children}
    </a>
  );
}
