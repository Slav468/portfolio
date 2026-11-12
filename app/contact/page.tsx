import type { Metadata } from 'next';
import { ContactPage, contactMetadata } from '@/views/contact';

export const metadata: Metadata = contactMetadata;

export default function Page() {
  return <ContactPage />;
}
