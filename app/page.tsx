import { projects } from '@/data/projects';
import { HeroSection } from '@/components/sections/hero-section';
import { ProjectGrid } from '@/components/features/project-grid';

export default function HomePage() {
  // Pick 3 random projects from all projects
  const shuffled = [...projects].sort(() => Math.random() - 0.5);
  const randomProjects = shuffled.slice(0, 3);

  return (
    <>
      <HeroSection />
      <ProjectGrid projects={randomProjects} columns={3} uniform />
    </>
  );
}
