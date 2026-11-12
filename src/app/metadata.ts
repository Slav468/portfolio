import type { Metadata, Viewport } from 'next';
import { SITE } from '@/shared/config';

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: SITE.titleTemplate,
  },
  description: SITE.description,
  openGraph: {
    title: SITE.name,
    description: SITE.description,
    locale: SITE.locale,
    type: 'website',
  },
};

export const rootViewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};
