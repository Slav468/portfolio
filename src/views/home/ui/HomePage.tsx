import { getFeaturedProjects, ProjectGrid } from '@/entities/project';
import { HeroSection } from '@/widgets/hero';
import { Container } from '@/shared/ui';

const FEATURED_COUNT = 3;

export function HomePage() {
  return (
    <>
      <Container>
        <HeroSection />
        <ProjectGrid projects={getFeaturedProjects(FEATURED_COUNT)} emphasizeFeatured={false} />
      </Container>
    </>
  );
}
