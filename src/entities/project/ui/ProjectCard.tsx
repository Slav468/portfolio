import { AppLink, IconSlot, Tag, ButtonLink } from '@/shared/ui';
import { ROUTES } from '@/shared/config';
import { cx } from '@/shared/lib';
import { PROJECT_CATEGORY_LABELS } from '../model/selectors';
import type { Project } from '../model/types';
import { ProjectCover } from './ProjectCover';
import styles from './project-card.module.scss';

import GithubIcon from '@/shared/assets/icons/tech/github.svg';
import ExternalLinkIcon from '@/shared/assets/icons/actions/external-link.svg';

export interface ProjectCardProps {
  project: Project;
  /** Широкая карточка (обложка 21:9 на десктопе) */
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const { title, shortDescription, stack, githubUrl, demoUrl, slug, category } = project;

  return (
    <article className={cx(styles.card, featured && styles.featured)}>
      <ProjectCover project={project} className={styles.cover} />
      <Tag variant="solid" size="sm" className={styles.badge}>
        {PROJECT_CATEGORY_LABELS[category]}
      </Tag>

      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{shortDescription}</p>
      </div>

      <div className={styles.details}>
        <ul className={styles.stack}>
          {stack.map((tech) => (
            <Tag key={tech} as="li" size="sm">
              {tech}
            </Tag>
          ))}
        </ul>
        <div className={styles.footer}>
          <div className={styles.links}>
            <ButtonLink href={githubUrl} variant="outline" size="sm">
              GitHub
              <IconSlot size="1.25rem" brand>
                <GithubIcon />
              </IconSlot>
            </ButtonLink>
            {demoUrl && (
              <ButtonLink href={demoUrl} variant="outline" size="sm">
                Демо
                <IconSlot size="1.25rem">
                  <ExternalLinkIcon />
                </IconSlot>
              </ButtonLink>
            )}
          </div>
          <AppLink href={ROUTES.project(slug)} className={styles.more}>
            Подробнее
          </AppLink>
        </div>
      </div>
    </article>
  );
}
