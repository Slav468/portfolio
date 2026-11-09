import { AboutSection } from '@/components/sections/about-section';
import { aboutData } from '@/data/about';

export default function AboutPage() {
  return <AboutSection about={aboutData} />;
}
