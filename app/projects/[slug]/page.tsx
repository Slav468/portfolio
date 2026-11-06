import { projects } from '@/data/projects';
import Link from 'next/link';
import styles from './project-detail.module.scss';

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return null; // Next.js will show not-found.tsx
  }

  return (
    <article className="projectDetail">
      <nav className={styles.breadcrumb}>
        <Link href="/" className={styles.breadcrumbLink}>
          Главная
        </Link>
        <span className={styles.breadcrumbSeparator}>/</span>
        <Link href="/projects" className={styles.breadcrumbLink}>
          Проекты
        </Link>
        <span className={styles.breadcrumbSeparator}>/</span>
        <span className={styles.breadcrumbCurrent}>{project.title}</span>
      </nav>

      <header className={styles.projectHeader}>
        <div className={styles.projectMeta}>
          <span className={styles.categoryBadge}>{project.category}</span>
          <time className={styles.projectDate}>
            {new Date(project.createdAt).toLocaleDateString('ru-RU', {
              year: 'numeric',
              month: 'long',
            })}
          </time>
        </div>
        <h1 className={styles.projectTitle}>{project.title}</h1>
        <p className={styles.projectDescription}>{project.description}</p>
      </header>

      <div className={styles.projectContent}>
        <div className={styles.projectImage} />
        <div className={styles.projectInfo}>
          <h2 className={styles.infoTitle}>О проекте</h2>
          <p className={styles.infoText}>
            {project.description} Этот проект демонстрирует навыки разработки
            с использованием современного стека технологий и следует лучшим
            практикам веб-разработки.
          </p>

          <div className={styles.stackSection}>
            <h3 className={styles.stackTitle}>Используемые технологии</h3>
            <div className={styles.stackList}>
              {project.stack.map((tech) => (
                <span key={tech} className={styles.stackTag}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.actions}>
            <Link href={project.githubUrl} className={styles.actionLink}>
              Открыть на GitHub
            </Link>
            {project.demoUrl && (
              <Link href={project.demoUrl} className={styles.actionLink}>
                Посмотреть демо
              </Link>
            )}
          </div>
        </div>
      </div>

      <footer className={styles.projectFooter}>
        <Link href="/projects" className={styles.backLink}>
          ← Назад к проектам
        </Link>
      </footer>
    </article>
  );
}
