import { PROJECT_CATEGORY_LABELS, ProjectCover, type Project } from '@/entities/project';
import { ROUTES } from '@/shared/config';
import { formatMonthYear } from '@/shared/lib';
import {
  Breadcrumbs,
  ButtonLink,
  IconSlot,
  PageHeader,
  PageSection,
  Reveal,
  SectionHeading,
  Tag,
} from '@/shared/ui';
import styles from './project-detail-page.module.scss';

import GithubIcon from '@/shared/assets/icons/tech/github.svg';
import ExternalLinkIcon from '@/shared/assets/icons/actions/external-link.svg';

export interface ProjectDetailPageProps {
  project: Project;
}

export function ProjectDetailPage({ project }: ProjectDetailPageProps) {
  const { title, description, category, createdAt, stack, githubUrl, demoUrl } = project;

  return (
    <PageSection labelledBy="project-title" blobs={0}>
      <article>
        <Breadcrumbs
          items={[
            { label: 'Главная', href: ROUTES.home },
            { label: 'Проекты', href: ROUTES.projects },
            { label: title },
          ]}
        />

        <Reveal>
          <div className={styles.meta}>
            <Tag variant="accent">{PROJECT_CATEGORY_LABELS[category]}</Tag>
            <time className={styles.date} dateTime={createdAt}>
              {formatMonthYear(createdAt)}
            </time>
          </div>
          <PageHeader titleId="project-title" title={title} description={description} />
        </Reveal>

        <div className={styles.content}>
          <Reveal>
            <ProjectCover project={project} className={styles.cover} />
          </Reveal>

          <Reveal delay={100} className={styles.info}>
            <section aria-labelledby="project-stack-heading">
              <SectionHeading id="project-stack-heading">Используемые технологии</SectionHeading>
              <ul className={styles.stack}>
                {stack.map((tech) => (
                  <Tag key={tech} as="li">
                    {tech}
                  </Tag>
                ))}
              </ul>
            </section>

            <div className={styles.actions}>
              <ButtonLink href={githubUrl} variant="outline">
                Открыть на GitHub
                <IconSlot size="1.25rem" brand>
                  <GithubIcon />
                </IconSlot>
              </ButtonLink>
              {demoUrl && (
                <ButtonLink href={demoUrl} variant="outline">
                  Посмотреть демо
                  <IconSlot size="1.25rem">
                    <ExternalLinkIcon />
                  </IconSlot>
                </ButtonLink>
              )}
            </div>
          </Reveal>
        </div>

        <footer className={styles.footer}>
          <ButtonLink href={ROUTES.projects} variant="text">
            ← Назад к проектам
          </ButtonLink>
        </footer>
      </article>
    </PageSection>
  );
}
