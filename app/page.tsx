import { projects } from '@/data/projects';
import { HeroSection } from '@/components/sections/hero-section';
import { ProjectGrid } from '@/components/features/project-grid';

export default function HomePage() {
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      <HeroSection />
      <ProjectGrid projects={featured} />
    </>
  );
}