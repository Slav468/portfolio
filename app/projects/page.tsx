import { projects } from '@/data/projects';
import { Container } from '@/components/ui/container';
import { ProjectGrid } from '@/components/features/project-grid';

// Show ALL projects (not just featured) on this page
export default function ProjectsPage() {
  return (
    <Container>
      <h1 className="text-3xl font-bold mb-8 text-[var(--color-text-primary)]">Наши проекты</h1>
      <ProjectGrid projects={projects} />
    </Container>
  );
}