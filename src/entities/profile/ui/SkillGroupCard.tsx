import { Card, Tag, TechIcon } from '@/shared/ui';
import type { SkillGroup } from '../model/types';
import styles from './skill-group-card.module.scss';

export interface SkillGroupCardProps {
  group: SkillGroup;
}

export function SkillGroupCard({ group }: SkillGroupCardProps) {
  return (
    <Card as="article" interactive>
      <h3 className={styles.title}>{group.title}</h3>
      <ul className={styles.list}>
        {group.items.map((item) => (
          <Tag key={item} as="li">
            <TechIcon name={item} />
            {item}
          </Tag>
        ))}
      </ul>
    </Card>
  );
}
