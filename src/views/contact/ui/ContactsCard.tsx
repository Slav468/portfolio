import { ContactIcon, type ContactItem } from '@/entities/profile';
import { AppLink, Card, SectionHeading } from '@/shared/ui';
import styles from './contacts-card.module.scss';

export function ContactsCard({ items }: { items: ContactItem[] }) {
  return (
    <Card as="section" variant="panel" interactive aria-labelledby="contacts-heading">
      <SectionHeading id="contacts-heading">Напишите мне</SectionHeading>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.label} className={styles.item}>
            <span className={styles.icon}>
              <ContactIcon name={item.icon} />
            </span>
            <span className={styles.label}>{item.label}:</span>
            <AppLink href={item.href} className={styles.link}>
              {item.value}
            </AppLink>
          </li>
        ))}
      </ul>
    </Card>
  );
}
