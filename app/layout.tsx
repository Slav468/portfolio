import '../styles/globals.scss';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { MainContent } from '@/components/layout/MainContent';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Портфолио',
  description: 'Портфолио фронтенд-разработчика',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" data-theme="dark" className={inter?.className || ''}>
      <body className={inter?.className || ''}>
        <Header />
        <MainContent>{children}</MainContent>
        <Footer authorName="Имя Фамилии" />
      </body>
    </html>
  );
}
