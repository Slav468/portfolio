import { projects } from '@/data/projects';
import { Container } from '@/components/ui/container';
import { ProjectGrid } from '@/components/features/project-grid';
import styles from './projects.module.scss';

// Show ALL projects (not just featured) on this page
export default function ProjectsPage() {
  return (
    <Container>
      <div className={styles.header}>
        <h1 className={styles.title}>Мои проекты</h1>
        <p className={styles.subtitle}>
          Подборка работ: от первых учебных проектов до коммерческих
          разработок. Исходный код и демо-ссылки прикреплены к каждому
          проекту.
        </p>
      </div>
      <ProjectGrid projects={projects} />
    </Container>
  );
}
