import '@/app/styles/main.scss';
import type { ReactNode } from 'react';
import { inter, jetbrainsMono } from '@/app/fonts';
import { rootMetadata, rootViewport } from '@/app/metadata';
import { AppProviders } from '@/app/providers/AppProviders';
import { AppShell } from '@/app/ui/AppShell';
import { SITE } from '@/shared/config';
import { cx } from '@/shared/lib';

export const metadata = rootMetadata;
export const viewport = rootViewport;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={SITE.lang} className={cx(inter.variable, jetbrainsMono.variable)} suppressHydrationWarning>
      <body>
        <AppProviders>
          <AppShell>{children}</AppShell>
        </AppProviders>
      </body>
    </html>
  );
}
