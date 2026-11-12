import { contacts, profile, socials } from '@/entities/profile';
import { ROUTES } from '@/shared/config';
import { ButtonLink, PageHeader, PageSection, Reveal } from '@/shared/ui';
import { ContactFormCard } from './ContactFormCard';
import { ContactsCard } from './ContactsCard';
import { SocialsCard } from './SocialsCard';
import styles from './contact-page.module.scss';

export function ContactPage() {
  return (
    <PageSection labelledBy="contact-heading" blobs={2}>
      <Reveal>
        <PageHeader
          titleId="contact-heading"
          kicker={profile.role}
          title="Контакты"
          description={profile.summary}
        />
      </Reveal>

      <div className={styles.grid}>
        <Reveal>
          <ContactsCard items={contacts} />
        </Reveal>
        <Reveal delay={100}>
          <SocialsCard items={socials} />
        </Reveal>
        <Reveal delay={200}>
          <ContactFormCard />
        </Reveal>
      </div>

      <ButtonLink href={ROUTES.home} variant="text" className={styles.back}>
        ← Вернуться на главную
      </ButtonLink>
    </PageSection>
  );
}
