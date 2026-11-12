import type { Metadata } from 'next';
import { AboutPage, aboutMetadata } from '@/views/about';

export const metadata: Metadata = aboutMetadata;

export default function Page() {
  return <AboutPage />;
}
