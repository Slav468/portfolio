import { EducationCard, type EducationItem } from '@/entities/profile';
import { SectionHeading } from '@/shared/ui';
import styles from './about-sections.module.scss';

export function EducationSection({ items }: { items: EducationItem[] }) {
  return (
    <section aria-labelledby="education-heading">
      <SectionHeading id="education-heading">Образование и курсы</SectionHeading>
      <div className={styles.list}>
        {items.map((item) => (
          <EducationCard key={item.id} education={item} />
        ))}
      </div>
    </section>
  );
}
