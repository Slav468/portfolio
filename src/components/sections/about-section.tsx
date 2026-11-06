import { ExternalLink } from '@/components/ui/link';

const STACK_ITEMS = [
  'Next.js 16 (App Router)',
  'React 19',
  'TypeScript (strict)',
  'SCSS / CSS Modules',
  'Vitest',
] as const;

export function AboutSection() {
  return (
    <div className="max-w-2xl">
      <h2 className="text-3xl font-bold mb-6 text-[var(--color-text-primary)]">Обо мне</h2>

      <p className="text-lg text-[var(--color-text-secondary)] mb-6">
        Фронтенд-разработчик. Специализируюсь на Next.js, React, TypeScript и SCSS.
        Собираю быстрые, доступные и отзывчивые интерфейсы.
      </p>

      <div className="mb-6">
        <h3 className="text-xl font-bold mb-3 text-[var(--color-text-primary)]">Стек</h3>
        <ul className="list-disc list-inside space-y-1 text-[var(--color-text-secondary)]">
          {STACK_ITEMS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-bold mb-3 text-[var(--color-text-primary)]">Проекты</h3>
        <p className="text-[var(--color-text-secondary)]">
          Подборку реальных работ смотрите на главной странице. Исходный код и
          демо-ссылки прикреплены к каждому проекту.
        </p>
      </div>

      <div>
        <p className="text-[var(--color-text-secondary)] mb-2">
          PDF-резюме:
        </p>
        <ExternalLink href="/Sergey Scoromnik_MiniCV.pdf">
          скачать MiniCV
        </ExternalLink>
      </div>
    </div>
  );
}