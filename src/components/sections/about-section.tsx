'use client';

import styles from './about-section.module.scss';
import { Container } from '@/components/ui/container';
import { ExternalLink } from '@/components/ui/link';
import { StatItem } from '@/components/sections/stat-item';
import { useInView } from '@/components/ui/useInView';
import { BackgroundBlobs } from '@/components/sections/background-blobs';
import type { AboutData } from '@/data/about';

// Иконки технологий (SVG через @svgr)
import css3 from '@/assets/icons/skills/css3.svg';
import figma from '@/assets/icons/skills/figma.svg';
import git from '@/assets/icons/skills/git.svg';
import github from '@/assets/icons/skills/github.svg';
import html5 from '@/assets/icons/skills/html5.svg';
import javascript from '@/assets/icons/skills/javascript.svg';
import jquery from '@/assets/icons/skills/jquery.svg';
import nextjs from '@/assets/icons/skills/nextjs.svg';
import react from '@/assets/icons/skills/react.svg';
import sass from '@/assets/icons/skills/sass.svg';
import typescript from '@/assets/icons/skills/typescript.svg';
import vite from '@/assets/icons/skills/vite.svg';

// ─── Inline иконки декоративные ───
const UserIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" width="100%" height="100%">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" width="100%" height="100%">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <path d="M3 9h18" />
    <path d="M8 21h8" />
  </svg>
);

const GraduationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" width="100%" height="100%">
    <path d="M22 11v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3" />
    <path d="M12 3l5 4 5-4" />
    <circle cx="12" cy="9" r="1" />
  </svg>
);

const CodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" width="100%" height="100%">
    <polyline points="10 20 12 18 10 16" />
    <polyline points="14 20 12 18 14 16" />
    <line x1="10" y1="12" x2="21" y2="2" />
  </svg>
);

const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" width="100%" height="100%">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

type TechIconMap = Record<string, React.ComponentType<{ width?: number; height?: number }>>;

const TECH_ICONS: TechIconMap = {
  HTML5: html5,
  CSS3: css3,
  SCSS: sass,
  SASS: sass,
  'CSS3 / SCSS / SASS': sass,
  JavaScript: javascript,
  'JavaScript (ES6+)': javascript,
  TypeScript: typescript,
  React: react,
  'Next.js': nextjs,
  Next: nextjs,
  Git: git,
  GitHub: github,
  Vite: vite,
  Figma: figma,
  jQuery: jquery,
};

function resolveTechIcon(skill: string) {
  const first = skill.split(/[ /]/)[0];
  return TECH_ICONS[first] ?? CodeIcon;
}

interface AboutSectionProps {
  about: AboutData;
}

export function AboutSection({ about }: AboutSectionProps) {
  const { name, role, location, bio, experience, education, skills, pdfLinks, stats } = about;

  const { ref: introRef, isInView: introVisible } = useInView({ once: true });
  const { ref: expRef, isInView: expVisible } = useInView({ once: true });
  const { ref: eduRef } = useInView({ once: true });
  const { ref: skillsRef, isInView: skillsVisible } = useInView({ once: true });
  const { ref: pdfRef, isInView: pdfVisible } = useInView({ once: true });

  return (
    <section className={styles.root} aria-labelledby="about-heading">
      <BackgroundBlobs
        blobCount={3}
        blobSizes={[[70, 70], [50, 50], [40, 40]]}
        blobPositions={[[-20, -20], [90, 10], [10, 90]]}
        animationDurations={[14, 18, 22]}
      />
      <Container className={styles.container}>
        {/* Header — compact, left-aligned */}
        <header className={`${styles.header} reveal ${introVisible ? 'revealed' : ''}`} ref={introRef}>
          <span className={styles.kicker}>Frontend-разработчик</span>
          <h1 id="about-heading" className={styles.title}>Обо мне</h1>
          <p className={styles.subtitle}>{bio}</p>
        </header>

        {/* Intro row: avatar left, name/role right */}
        <div className={`${styles.introRow} reveal ${introVisible ? 'revealed' : ''}`} ref={introRef}>
          <div className={styles.avatarWrap} aria-hidden="true">
            <UserIcon />
          </div>
          <div className={styles.introText}>
            <h2 className={styles.introName}>{name}</h2>
            <p className={styles.introRole}>{role} · {location}</p>
          </div>
        </div>

        {/* Stats inline row */}
        <div className={`${styles.statsRow} reveal ${introVisible ? 'revealed' : ''}`} ref={introRef}>
          {stats.map((stat, i) => (
            <StatItem key={stat.label} number={stat.number} label={stat.label} description={stat.description} delay={i * 0.08} />
          ))}
        </div>

        {/* Experience + Education side by side on desktop */}
        <div className={`${styles.twoCol} reveal ${expVisible ? 'revealed' : ''}`} ref={expRef}>
          <section className={styles.expSection}>
            <h2 className={styles.sectionTitle}>Опыт работы</h2>
            <div className={styles.expList}>
              {experience.map((exp) => (
                <article key={exp.id} className={styles.expCard}>
                  <div className={styles.expHeader}>
                    <div className={styles.expRoleGroup}>
                      <span className={styles.expRole}>{exp.role}</span>
                      <span className={styles.expPeriod}>{exp.period}</span>
                    </div>
                    <span className={styles.expIconWrap} aria-hidden="true"><BriefcaseIcon /></span>
                  </div>
                  <p className={styles.expCompany}>{exp.company}</p>
                  <p className={styles.expLocation}>{exp.location}</p>
                  <p className={styles.expStack}><span className={styles.stackLabel}>Стек:</span> {exp.stack}</p>
                  <p className={styles.expDesc}>{exp.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className={styles.eduSection} ref={eduRef}>
            <h2 className={styles.sectionTitle}>Образование и курсы</h2>
            <div className={styles.eduList}>
              {education.map((edu) => (
                <article key={edu.id} className={styles.eduCard}>
                  <span className={styles.eduIconWrap} aria-hidden="true"><GraduationIcon /></span>
                  <div className={styles.eduContent}>
                    <h3 className={styles.eduTitle}>{edu.course}</h3>
                    <p className={styles.eduYear}>{edu.year}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>

        {/* Skills — compact tags */}
        <div className={`${styles.skillsSection} reveal ${skillsVisible ? 'revealed' : ''}`} ref={skillsRef}>
          <h2 className={styles.sectionTitle}>Навыки</h2>
          <div className={styles.skillsGrid}>
            {skills.map((group) => (
              <div key={group.id} className={styles.skillCard}>
                <h3 className={styles.skillGroupTitle}>{group.title}</h3>
                <ul className={styles.skillList}>
                  {group.items.map((item) => {
                    const Icon = resolveTechIcon(item);
                    return (
                      <li key={item} className={styles.skillItem}>
                        <span className={styles.skillIconWrap} aria-hidden="true"><Icon /></span>
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* PDF buttons inline */}
        <div className={`${styles.pdfSection} reveal ${pdfVisible ? 'revealed' : ''}`} ref={pdfRef}>
          <div className={styles.pdfLinks}>
            <ExternalLink href={pdfLinks[0]?.href} className={styles.pdfBtn}>
              {pdfLinks[0]?.label}
              <span className={styles.pdfIconWrap} aria-hidden="true"><DownloadIcon /></span>
            </ExternalLink>
            <ExternalLink href={pdfLinks[1]?.href} className={styles.pdfBtn}>
              {pdfLinks[1]?.label}
              <span className={styles.pdfIconWrap} aria-hidden="true"><DownloadIcon /></span>
            </ExternalLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
