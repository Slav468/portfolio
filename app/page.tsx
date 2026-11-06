import Link from 'next/link';
import { projects } from '@/data/projects';

export default function HomePage() {
  const featured = projects.filter((p) => p.featured);

  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Портфолио</h1>
      <p className="text-muted-foreground mb-12">
        Фронтенд-разработчик. Стек: Next.js, React, TypeScript, SCSS.
      </p>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featured.map((project) => (
          <article
            key={project.id}
            className="border border-[var(--color-border)] rounded-lg p-6 hover:border-[var(--color-accent-cyan)] transition-colors"
          >
            <h2 className="text-xl font-bold mb-2">{project.title}</h2>
            <p className="text-sm text-muted-foreground mb-4">
              {project.shortDescription}
            </p>
            <div className="mb-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded px-2 py-1"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              <Link
                href={project.githubUrl}
                className="text-sm text-[var(--color-accent-cyan)] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Link>
              {project.demoUrl && (
                <Link
                  href={project.demoUrl}
                  className="text-sm text-[var(--color-accent-cyan)] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Демо
                </Link>
              )}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}