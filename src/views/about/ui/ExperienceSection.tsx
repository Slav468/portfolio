import { ExperienceCard, type ExperienceItem } from '@/entities/profile';
import { SectionHeading } from '@/shared/ui';
import styles from './about-sections.module.scss';

export function ExperienceSection({ items }: { items: ExperienceItem[] }) {
  return (
    <section aria-labelledby="experience-heading">
      <SectionHeading id="experience-heading">Опыт работы</SectionHeading>
      <div className={styles.list}>
        {items.map((item) => (
          <ExperienceCard key={item.id} experience={item} />
        ))}
      </div>
    </section>
  );
}
