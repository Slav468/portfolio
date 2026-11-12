import { SkillGroupCard, type SkillGroup } from '@/entities/profile';
import { SectionHeading } from '@/shared/ui';
import styles from './about-sections.module.scss';

export function SkillsSection({ groups }: { groups: SkillGroup[] }) {
  return (
    <section aria-labelledby="skills-heading">
      <SectionHeading id="skills-heading">Навыки</SectionHeading>
      <div className={styles.skills}>
        {groups.map((group) => (
          <SkillGroupCard key={group.id} group={group} />
        ))}
      </div>
    </section>
  );
}
