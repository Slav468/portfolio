'use client';

import Link from 'next/link';
import styles from './project-card.module.scss';
import { Project } from '@/data/projects';
import { useInView } from '@/components/ui/useInView';

import GithubWhite from '@/assets/icons/skills/githubWhite.svg';
import ExternalLink from '@/assets/icons/demo/external-link.svg';

export interface ProjectCardProps {
  project: Project;
  featured?: boolean;
  revealDelay?: number;
}

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
      <div className={styles.cardImage} style={{ backgroundImage: `url('${project.image}')` }} />
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
              <span style={{ width: '20px', height: '20px' }}>
                <GithubWhite data-github width="100%" height="100%" />
              </span>
            </Link>
            {project.demoUrl && (
              <Link href={project.demoUrl} className={styles.link}>
                Демо
                <span style={{ width: '20px', height: '20px' }}>
                  <ExternalLink width="100%" height="100%" />
                </span>
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
