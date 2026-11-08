'use client';

import styles from './about-section.module.scss';
import { ExternalLink } from '@/components/ui/link';
import { useInView } from '@/components/ui/useInView';

const EXPERIENCE_ITEMS = [
  {
    role: 'Frontend Developer',
    company: 'Web Studio Yar',
    period: '2025 – 2026',
    location: 'Минск, Беларусь',
    stack:
      'JavaScript, HTML, CSS, jQuery, Git, Figma, Vite, GSAP, Swiper, Fancybox, lightGallery, noUiSlider',
    description:
      'Создание адаптивных и кроссбраузерных вёрсток для 10+ коммерческих проектов на HTML, SCSS/SASS, BEM и JavaScript. Разработка модульных UI-компонентов и интерактивных интерфейсов. Внедрение анимаций (GSAP, CSS transitions, keyframes), интеграция Yandex SmartCaptcha, работа с DOM APIs, localStorage/sessionStorage, cookies, MutationObserver, IntersectionObserver.',
  },
  {
    role: 'Frontend Developer',
    company: 'Web studio Itoblaka',
    period: '2023 – 2025',
    location: 'Минск, Беларусь',
    stack: 'JavaScript, HTML, CSS, jQuery, Git, Figma',
    description:
      'Доработка и расширение функционала платформы конструктора сайтов. Разработка проектов с нуля на HTML5, CSS3, SCSS, BEM, JavaScript и jQuery. Вёрстка интернет-магазинов, корпоративных сайтов и каталогов с 0. Интеграция кастомных и сторонних скриптов, отладка фронтенда/бэкенда, работа с Git (branching, code review).',
  },
] as const;

const EDUCATION_ITEMS = [
  { course: 'Udemy — Full course modern TypeScript', year: 2025 },
  { course: 'Udemy — Full course JavaScript + React', year: 2025 },
  { course: 'RSSchool — JavaScript/Front-end', year: 2023 },
  { course: 'Udemy — Practical JavaScript (Advanced)', year: 2023 },
  { course: 'Udemy — Modern JavaScript', year: 2022 },
  { course: 'Udemy — Complete JavaScript Course (Includes 80 Tasks)', year: 2022 },
  { course: 'Udemy — Web Developer', year: 2021 },
] as const;

interface ContactItem {
  label: string;
  value: string;
  href: string;
}

const CONTACTS: ContactItem[] = [
  { label: 'Телефон', value: '+375 29 766 25 91', href: 'tel:+375297662591' },
  { label: 'Email', value: 'sergeyskoromnik@gmail.com', href: 'mailto:sergeyskoromnik@gmail.com' },
  { label: 'Telegram', value: '@dzedbaraded4021', href: 'https://t.me/dzedbaraded4021' },
  {
    label: 'LinkedIn',
    value: 'sergey-scoromnik',
    href: 'https://linkedin.com/in/sergey-scoromnik',
  },
  { label: 'GitHub', value: 'Slav468', href: 'https://github.com/Slav468' },
  { label: 'hh.ru', value: 'Резюме', href: 'https://hh.ru/resume/sergey-scoromnik' },
];

export function AboutSection() {
  const { ref: introRef, isInView: introVisible } = useInView({ once: true });
  const { ref: expRef, isInView: expVisible } = useInView({ once: true });
  const { ref: eduRef, isInView: eduVisible } = useInView({ once: true });
  const { ref: contactsRef, isInView: contactsVisible } = useInView({ once: true });
  const { ref: pdfRef, isInView: pdfVisible } = useInView({ once: true });

  return (
    <div className={styles.section}>
      <h2 className={`${styles.title} reveal ${introVisible ? 'revealed' : ''}`}>Обо мне</h2>

      <div className={`${styles.intro} reveal ${introVisible ? 'revealed' : ''}`} ref={introRef}>
        <div className={styles.avatarPlaceholder} />
        <div className={styles.introText}>
          <h3 className={styles.introName}>Сергей Скоромник</h3>
          <p className={styles.introRole}>Frontend Developer · Минск, Беларусь</p>
          <p className={styles.introBio}>
            Frontend-разработчик с 3+ годами коммерческого опыта в создании отзывчивых и
            кроссбраузерных веб-интерфейсов. Сильная основа в HTML5, CSS3, SCSS/SASS, BEM и
            JavaScript (ES6+). Опыт разработки переиспользуемых UI-компонентов, адаптивной и
            SEO-дружественной вёрстки, работы с DOM API, браузерным хранилищем, сторонними
            интеграциями, анимациями и отладкой фронтенда. В данный момент расширяю экспертизу в
            React, TypeScript и Next.js через создание современных веб-приложений и личных проектов.
          </p>
        </div>
      </div>

      <div className={`${styles.expSection} reveal ${expVisible ? 'revealed' : ''}`} ref={expRef}>
        <h3 className={styles.stackTitle}>Опыт работы</h3>
        {EXPERIENCE_ITEMS.map((exp, i) => (
          <div key={i} className={styles.expItem}>
            <div className={styles.expHeader}>
              <span className={styles.expRole}>{exp.role}</span>
              <span className={styles.expPeriod}>{exp.period}</span>
            </div>
            <p className={styles.expCompany}>{exp.company}</p>
            <p className={styles.expLocation}>{exp.location}</p>
            <p className={styles.expStack}>Стек: {exp.stack}</p>
            <p className={styles.expDesc}>{exp.description}</p>
          </div>
        ))}
      </div>

      <div className={`${styles.eduSection} reveal ${eduVisible ? 'revealed' : ''}`} ref={eduRef}>
        <h3 className={styles.stackTitle}>Образование и курсы</h3>
        {EDUCATION_ITEMS.map((edu) => (
          <p key={edu.course} className={styles.eduItem}>
            {edu.course} <span className={styles.eduYear}>({edu.year})</span>
          </p>
        ))}
      </div>

      <div
        className={`${styles.contactsSection} reveal ${contactsVisible ? 'revealed' : ''}`}
        ref={contactsRef}
      >
        <h3 className={styles.stackTitle}>Контакты</h3>
        <ul className={styles.contactsList}>
          {CONTACTS.map((c) => (
            <li key={c.label} className={styles.contactItem}>
              <span className={styles.contactLabel}>{c.label}:</span>
              {c.href ? (
                <ExternalLink href={c.href} className={styles.contactValue}>
                  {c.value}
                </ExternalLink>
              ) : (
                <span className={styles.contactValue}>{c.value}</span>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className={`${styles.pdfWrapper} reveal ${pdfVisible ? 'revealed' : ''}`} ref={pdfRef}>
        <p className={styles.pdfLabel}>PDF-резюме:</p>
        <ExternalLink href="/Sergey Scoromnik_MiniCV.pdf" className={styles.pdfLink}>
          скачать MiniCV
        </ExternalLink>
        <ExternalLink href="/Sergey_Scoromnik_CV.pdf" className={styles.pdfLink}>
          скачать полное резюме (CV)
        </ExternalLink>
      </div>
    </div>
  );
}
