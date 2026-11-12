import { Card, SectionHeading } from '@/shared/ui';
import styles from './contact-form-card.module.scss';

/** Заглушка формы: реализация — Server Action с валидацией (Zod). */
export function ContactFormCard() {
  return (
    <Card as="section" variant="plain" aria-labelledby="contact-form-heading">
      <SectionHeading id="contact-form-heading">Отправить сообщение</SectionHeading>
      <p className={styles.note}>
        Контактная форма в разработке (планируется Server Action с валидацией через Zod). Пока
        пишите напрямую на email или в Telegram.
      </p>
    </Card>
  );
}
