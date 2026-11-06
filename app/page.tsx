import { projects } from '@/data/projects';
import { Container } from '@/components/ui/container';
import { HeroSection } from '@/components/sections/hero-section';
import { ProjectGrid } from '@/components/features/project-grid';

export default function HomePage() {
  const featured = projects.filter((p) => p.featured);

  return (
    <Container>
      <HeroSection />
      <ProjectGrid projects={featured} />
    </Container>
  );
}