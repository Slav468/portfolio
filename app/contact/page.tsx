import Link from 'next/link';
import styles from './contact.module.scss';

const CONTACTS = [
  { label: 'Телефон', value: '+375 29 766 25 91', href: 'tel:+375297662591' },
  { label: 'Email', value: 'sergeyskoromnik@gmail.com', href: 'mailto:sergeyskoromnik@gmail.com' },
  { label: 'Telegram', value: '@dzedbaraded4021', href: 'https://t.me/dzedbaraded4021' },
  { label: 'LinkedIn', value: 'sergey-scoromnik', href: 'https://linkedin.com/in/sergey-scoromnik' },
  { label: 'GitHub', value: 'Slav468', href: 'https://github.com/Slav468' },
  { label: 'hh.ru', value: 'Резюме', href: 'https://hh.ru/resume/sergey-scoromnik' },
];

export default function ContactPage() {
  return (
    <section className={styles.page}>
      <h1 className={styles.title}>Контакты</h1>
      <p className={styles.subtitle}>
        Свяжитесь со мной любым удобным для вас способом.
      </p>

      <div className={styles.contentGrid}>
        <div className={styles.contactsCard}>
          <h2 className={styles.contactsTitle}>Напишите мне</h2>
          <ul className={styles.contactsList}>
            {CONTACTS.map((c) => (
              <li key={c.label} className={styles.contactItem}>
                <span className={styles.contactLabel}>{c.label}:</span>
                <span className={styles.contactValue}>
                  {c.href ? (
                    <a href={c.href} className="contactLink">
                      {c.value}
                    </a>
                  ) : (
                    c.value
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.formCard}>
          <h2 className={styles.formTitle}>Отправить сообщение</h2>
          <p className={styles.formNote}>
            Контактная форма в разработке (планируется Server Action с
            валидацией через Zod). Пока пишите напрямую на email или в
            Telegram.
          </p>
        </div>
      </div>

      <Link href="/" className={styles.backLink}>
        ← Вернуться на главную
      </Link>
    </section>
  );
}
