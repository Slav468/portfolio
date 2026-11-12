import { ContactIcon, type SocialLink } from '@/entities/profile';
import { AppLink, Card, SectionHeading } from '@/shared/ui';
import styles from './socials-card.module.scss';

export function SocialsCard({ items }: { items: SocialLink[] }) {
  return (
    <Card as="section" variant="panel" aria-labelledby="socials-heading">
      <SectionHeading id="socials-heading">Соцсети</SectionHeading>
      <ul className={styles.list}>
        {items.map((social) => (
          <li key={social.name}>
            <AppLink
              href={social.href}
              className={styles.link}
              aria-label={social.name}
              title={social.name}
            >
              <ContactIcon name={social.icon} />
            </AppLink>
          </li>
        ))}
      </ul>
    </Card>
  );
}
