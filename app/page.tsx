import { projects } from '@/data/projects';
import { HeroSection } from '@/components/sections/hero-section';
import { ProjectGrid } from '@/components/features/project-grid';

// Показываем все проекты (не только featured) на главной
// или можно сделать отдельную страницу /projects
export default function HomePage() {
  // filtered projects for featured section
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      <HeroSection />
      {/* Featured projects only on home */}
      <ProjectGrid projects={featured} />
      {/* Optionally could add a "View all projects" link here */}
    </>
  );
}