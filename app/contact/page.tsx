'use client';

import Link from 'next/link';
import styles from './contact.module.scss';

import { useInView } from '@/components/ui/useInView';
import { BackgroundBlobs } from '@/components/sections/background-blobs';

import facebook from '@/assets/icons/social/facebook.svg';
import github from '@/assets/icons/social/github.svg';
import instagram from '@/assets/icons/social/instagram.svg';
import linkedin from '@/assets/icons/social/Lin.svg';
import telegram from '@/assets/icons/social/telegram.svg';
import vk from '@/assets/icons/social/vk.svg';

// Inline иконки для способов связи (нет готовых SVG в проекте)
const PhoneIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MailIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const CONTACTS = [
  {
    label: 'Телефон',
    value: '+375 29 766 25 91',
    href: 'tel:+375297662591',
    Icon: PhoneIcon,
  },
  {
    label: 'Email',
    value: 'sergeyskoromnik@gmail.com',
    href: 'mailto:sergeyskoromnik@gmail.com',
    Icon: MailIcon,
  },
];

const SOCIALS = [
  { name: 'Telegram', href: 'https://t.me/dzedbaraded4021', icon: telegram },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/sergey-scoromnik', icon: linkedin },
  { name: 'GitHub', href: 'https://github.com/Slav468', icon: github },
  { name: 'VK', href: 'https://vk.com/', icon: vk },
  { name: 'Instagram', href: 'https://www.instagram.com/', icon: instagram },
  { name: 'Facebook', href: 'https://www.facebook.com/', icon: facebook },
];

export default function ContactPage() {
  const { ref: introRef, isInView: introVisible } = useInView({ once: true });
  const { ref: expRef, isInView: expVisible } = useInView({ once: true });
  const { ref: eduRef, isInView: eduVisible } = useInView({ once: true });
  const { ref: mailRef, isInView: mailVisible } = useInView({ once: true });

  return (
    <section className={styles.page} ref={introRef}>
      <BackgroundBlobs
        blobCount={2}
        blobSizes={[
          [70, 70],
          [50, 50],
        ]}
        blobPositions={[
          [-20, -20],
          [-10, -10],
        ]}
        animationDurations={[14, 18]}
      />

      <div className={styles.headerContent} ref={introRef}>
        <h1 className={`${styles.title} reveal ${introVisible ? 'revealed' : ''}`}>Контакты</h1>
        <p className={`${styles.subtitle} reveal ${introVisible ? 'revealed' : ''}`}>
          Свяжитесь со мной любым удобным для вас способом.
        </p>
      </div>

      <div className={`${styles.contentGrid} reveal ${expVisible ? 'revealed' : ''}`} ref={expRef}>
        <div className={styles.contactsCard}>
          <h2 className={styles.contactsTitle}>Напишите мне</h2>
          <ul className={styles.contactsList}>
            {CONTACTS.map((c) => (
              <li key={c.label} className={styles.contactItem}>
                <span className={styles.contactIcon}>
                  <c.Icon />
                </span>
                <span className={styles.contactLabel}>{c.label}:</span>
                <span className={styles.contactValue}>
                  <a href={c.href} className={styles.contactLink}>
                    {c.value}
                  </a>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div
          className={`${styles.socialsCard} reveal ${mailVisible ? 'revealed' : ''}`}
          ref={mailRef}
        >
          <h2 className={styles.socialsTitle}>Соцсети</h2>
          <div className={styles.socialsList}>
            {SOCIALS.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <s.icon />
              </a>
            ))}
          </div>
        </div>

        <div className={`${styles.formCard} reveal ${eduVisible ? 'revealed' : ''}`} ref={eduRef}>
          <h2 className={styles.formTitle}>Отправить сообщение</h2>
          <p className={styles.formNote}>
            Контактная форма в разработке (планируется Server Action с валидацией через Zod). Пока
            пишите напрямую на email или в Telegram.
          </p>
        </div>
      </div>

      <Link href="/" className={styles.backLink}>
        ← Вернуться на главную
      </Link>
    </section>
  );
}
