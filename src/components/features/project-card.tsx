'use client';

import Link from 'next/link';
import styles from './project-card.module.scss';
import { Project } from '@/data/projects';
import { useInView } from '@/components/ui/useInView';

export interface ProjectCardProps {
  project: Project;
  featured?: boolean;
  revealDelay?: number;
}

const GITHUB_SVG = (
  <svg
    width="14"
    height="14"
    fill="currentColor"
    viewBox="0 0 24 24"
    className={styles.icon}
    aria-hidden="true"
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-1.332-2.15-1.272-4.88-1.641-4.88-1.641-4.037-.303-2.071.844 2.315 2.034q-0.002-0.052 0.268 1.254c1.044-.221 2.213-.444 3.45-.363 1.312.093 1.819 1.599 1.819 1.599a2.37 2.37 0 0 1 1.539-.894c.475-1.382 1.297-2.326 2.32-2.326a2.22 2.22 0 0 1 1.461.598c.161 1.227.542 2.481.542 2.481 1.926 2.75 5.359 1.964 6.947.983-.02-.445-.064-.878-.114-1.282-2.485-.293-5.099-1.242-5.099-1.242-1.63-.448-3.96-1.12-3.96-1.12a1.85 1.85 0 0 1 1.286-.902c.655-.29 1.516-.443 2.357-.443.842 0 1.711.277 2.357.443a1.85 1.85 0 0 1-1.286.902c0 0-2.33.64-3.96 1.12 0 0-2.614.949-5.099 1.242-.05.404-.094.837-.114 1.282 1.588 1.0 5.021 1.766 6.947-.983 0 0-.38-1.254.542-2.481a2.22 2.22 0 0 1 1.461-.598c1.064 0 1.993.649 2.357 1.04.436-.784.71-1.712.76-1.605 0 0 2.657-.457 3.495-.998 0 0 1.18-.555 1.838-1.236s1.17-.015 1.17-.015c0 0 .084-.729.084-.729 1.205-.084 1.838-1.236 1.838-1.236 0-2.192-1.536-3.941-4.141-4.141a12.08 12.08 0 0 0-2.09.423c-.747-.42-1.585-.77-2.435-.989 0 0-.79-.29-.044-.836a4.34 4.34 0 0 1 1.542-.857q-.227-.064-.45-.161c0 0-1.398-.471-1.809-1.415C8.715 1.124 9.695 0 12 0" />
  </svg>
);

const EXTERNAL_SVG = (
  <svg
    width="14"
    height="14"
    fill="currentColor"
    viewBox="0 0 24 24"
    className={styles.icon}
    aria-hidden="true"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6v2H5v6h14zM9 5V3H5v6h4V5z" />
  </svg>
);

export function ProjectCard({ project, featured = false, revealDelay = 0 }: ProjectCardProps) {
  const { ref, isInView } = useInView({ once: true, threshold: 0.1 });

  return (
    <article
      ref={ref}
      className={`${styles.card} ${featured ? styles.featured : ''} ${
        isInView ? styles.revealed : ''
      }`}
      style={{ transitionDelay: `${revealDelay}s` }}
    >
      <div
        className={styles.cardImage}
        style={{ backgroundImage: `url('${project.image}')` }}
      />
      <span className={styles.categoryBadge}>{project.category}</span>
      <div className={styles.content}>
        <h2 className={styles.title}>{project.title}</h2>
        <p className={styles.description}>{project.shortDescription}</p>
      </div>
      <div className={styles.bottomOverlay}>
        <div className={styles.stack}>
          {project.stack.map((tech) => (
            <span key={tech} className={styles.stackTag}>
              {tech}
            </span>
          ))}
        </div>
        <div className={styles.cardFooter}>
          <div className={styles.links}>
            <Link href={project.githubUrl} className={styles.link}>
              GitHub
              {GITHUB_SVG}
            </Link>
            {project.demoUrl && (
              <Link href={project.demoUrl} className={styles.link}>
                Демо
                {EXTERNAL_SVG}
              </Link>
            )}
          </div>
          <Link href={`/projects/${project.slug}`} className={styles.link}>
            Подробнее
          </Link>
        </div>
      </div>
    </article>
  );
}