export default function AboutPage() {
  return (
    <main className="max-w-2xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold mb-6">Обо мне</h2>
      <p className="text-lg text-muted-foreground mb-6">
        Фронтенд-разработчик. Специализируюсь на Next.js, React, TypeScript и
        SCSS. Собираю быстрые, доступные и отзывчивые интерфейсы.
      </p>
      <h3 className="text-xl font-bold mb-3">Стек</h3>
      <ul className="list-disc list-inside mb-6 space-y-1">
        <li>Next.js 16 (App Router)</li>
        <li>React 19</li>
        <li>TypeScript (strict)</li>
        <li>SCSS / CSS Modules</li>
        <li>Vitest</li>
      </ul>
      <h3 className="text-xl font-bold mb-3">Проекты</h3>
      <p className="text-muted-foreground mb-6">
        Подборку реальных работ (проекты 1–4) смотрите на главной странице.
        Исходный код и демо-ссылки прикреплены к каждому проекту.
      </p>
      <p className="text-muted-foreground">
        PDF-резюме:
        <a href="/Sergey Scoromnik_MiniCV.pdf" className="text-[var(--color-accent-cyan)] hover:underline">
          скачать MiniCV
        </a>
      </p>
    </main>
  );
}
