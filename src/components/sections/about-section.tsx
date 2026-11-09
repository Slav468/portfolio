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
  { course: 'Udemy — Web developer', year: 2021 },
  { course: 'Udemy — Modern JavaScript', year: 2022 },
  { course: 'Udemy — Complete JavaScript Course (Includes 80 Tasks)', year: 2022 },
  { course: 'Udemy — Practical JavaScript (Advanced)', year: 2023 },
  { course: 'RSSchool — JavaScript/Front-end', year: 2023 },
  { course: 'Udemy — JavaScript + React', year: 2025 },
  { course: 'Udemy — modern TypeScript', year: 2025 },
] as const;

interface AboutSectionProps {
  showSkills?: boolean;
  showEducation?: boolean;
  showLanguages?: boolean;
}

export function AboutSection({ showLanguages = true }: AboutSectionProps) {
  const { ref: introRef, isInView: introVisible } = useInView({ once: true });
  const { ref: expRef, isInView: expVisible } = useInView({ once: true });
  const { ref: eduRef, isInView: eduVisible } = useInView({ once: true });
  const { ref: skillsRef, isInView: skillsVisible } = useInView({ once: true });
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
        className={`${styles.skillsSection} reveal ${skillsVisible ? 'revealed' : ''}`}
        ref={skillsRef}
      >
        <h3 className={styles.stackTitle}>Навыки</h3>
        <div className={styles.skillsGrid}>
          <div className={styles.skillCategory}>
            <h4>Hard Skills</h4>
            <ul className={styles.skillList}>
              <li>HTML5</li>
              <li>CSS3 / SCSS / SASS</li>
              <li>JavaScript (ES6+)</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Next.js</li>
              <li>Responsive Web Design</li>
              <li>Cross-browser Development</li>
              <li>Accessibility (a11y)</li>
              <li>SEO-friendly markup</li>
            </ul>
          </div>
          <div className={styles.skillCategory}>
            <h4>Tools & Workflow</h4>
            <ul className={styles.skillList}>
              <li>Git</li>
              <li>GitHub</li>
              <li>Vite</li>
              <li>npm</li>
              <li>Figma</li>
              <li>Browser DevTools</li>
              <li>AI-assisted development tools</li>
            </ul>
          </div>
          <div className={styles.skillCategory}>
            <h4>Soft Skills</h4>
            <ul className={styles.skillList}>
              <li>Problem solving</li>
              <li>Team collaboration</li>
              <li>Code review</li>
              <li>Time Management</li>
              <li>Critical Thinking</li>
              <li>Self-learning</li>
              <li>Attention to detail</li>
              <li>Technical communication</li>
            </ul>
          </div>
          {showLanguages && (
            <div className={styles.skillCategory}>
              <h4>Languages</h4>
              <ul className={styles.skillList}>
                <li>English (A2)</li>
                <li>Russian (C1)</li>
                <li>Belarus (Native)</li>
              </ul>
            </div>
          )}
        </div>
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
