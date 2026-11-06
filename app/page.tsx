import { projects } from '@/data/projects';
import { MainContent } from '@/components/layout/MainContent';
import { HeroSection } from '@/components/sections/hero-section';
import { ProjectGrid } from '@/components/features/project-grid';

export default function HomePage() {
  const featured = projects.filter((p) => p.featured);

  return (
    <MainContent>
      <HeroSection />
      <ProjectGrid projects={featured} />
    </MainContent>
  );
}