import { getAllProjects, ProjectGrid } from '@/entities/project';
import { PageHeader, PageSection, Reveal } from '@/shared/ui';

export function ProjectsPage() {
  return (
    <PageSection labelledBy="projects-heading" blobs={0}>
      <Reveal>
        <PageHeader
          titleId="projects-heading"
          title="Мои проекты"
          description="Подборка работ: от первых учебных проектов до коммерческих разработок. Исходный код и демо-ссылки прикреплены к каждому проекту."
        />
      </Reveal>
      <ProjectGrid projects={getAllProjects()} />
    </PageSection>
  );
}
