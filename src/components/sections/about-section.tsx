'use client';

import styles from './about-section.module.scss';
import { ExternalLink } from '@/components/ui/link';
import { useInView } from '@/components/ui/useInView';
import type { AboutData } from '@/data/about';

interface AboutSectionProps {
  about: AboutData;
}

export function AboutSection({ about }: AboutSectionProps) {
  const { name, role, location, bio, experience, education, skills, pdfLinks } = about;

  const { ref: introRef, isInView: introVisible } = useInView({ once: true });
  const { ref: expRef, isInView: expVisible } = useInView({ once: true });
  const { ref: eduRef, isInView: eduVisible } = useInView({ once: true });
  const { ref: skillsRef, isInView: skillsVisible } = useInView({ once: true });
  const { ref: pdfRef, isInView: pdfVisible } = useInView({ once: true });

  return (
    <div className={styles.section}>
      <h2 className={`${styles.title} reveal ${introVisible ? 'revealed' : ''}`}>Обо мне</h2>

      <div className={`${styles.intro} reveal ${introVisible ? 'revealed' : ''}`} ref={introRef}>
        <div className={styles.avatarPlaceholder} aria-hidden="true" />
        <div className={styles.introText}>
          <h3 className={styles.introName}>{name}</h3>
          <p className={styles.introRole}>
            {role} · {location}
          </p>
          <p className={styles.introBio}>{bio}</p>
        </div>
      </div>

      <div className={`${styles.expSection} reveal ${expVisible ? 'revealed' : ''}`} ref={expRef}>
        <h3 className={styles.stackTitle}>Опыт работы</h3>
        {experience.map((exp) => (
          <div key={exp.id} className={styles.expItem}>
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
        {education.map((edu) => (
          <p key={edu.id} className={styles.eduItem}>
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
          {skills.map((group) => (
            <div key={group.id} className={styles.skillCategory}>
              <h4>{group.title}</h4>
              <ul className={styles.skillList}>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className={`${styles.pdfWrapper} reveal ${pdfVisible ? 'revealed' : ''}`} ref={pdfRef}>
        <p className={styles.pdfLabel}>PDF-резюме:</p>
        {pdfLinks.map((link) => (
          <ExternalLink key={link.href} href={link.href} className={styles.pdfLink}>
            {link.label}
          </ExternalLink>
        ))}
      </div>
    </div>
  );
}
