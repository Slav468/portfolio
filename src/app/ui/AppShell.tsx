import type { ReactNode } from 'react';
import { profile } from '@/entities/profile';
import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';
import { SkipLink } from '@/shared/ui';
import styles from './app-shell.module.scss';

export const MAIN_CONTENT_ID = 'main-content';

/** Каркас всех страниц: skip-link, шапка, <main>, подвал. */
export function AppShell({ children }: { children: ReactNode }) {
  return (
    <>
      <SkipLink targetId={MAIN_CONTENT_ID} />
      <Header />
      <main id={MAIN_CONTENT_ID} tabIndex={-1} className={styles.main}>
        {children}
      </main>
      <Footer authorName={profile.shortName} />
    </>
  );
}
