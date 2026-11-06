import Link from 'next/link';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

const LOGO_SVG = (
  <svg
    width="20"
    height="20"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M12 3l5 9-5 9h-2V9h-3v6H5v-6H2v6H2V9H0v6h3v-6h2v-9h5z" />
  </svg>
);

export function Header() {
  return (
    <header className="bg-[var(--color-bg-surface)] border-b border-[var(--color-border)] sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-4 shrink-0">
          <Link href="/" className="flex items-center gap-2 no-underline">
            <div className="w-8 h-8 rounded-full bg-[var(--color-bg-surface)] border border-[var(--color-border)] flex items-center justify-center shrink-0">
              {LOGO_SVG}
            </div>
            <span className="text-xl font-bold tracking-wider text-[var(--color-text-primary)]">
              Портфолио
            </span>
          </Link>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}