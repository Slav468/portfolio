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
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    width="100%"
    height="100%"
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    width="100%"
    height="100%"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <path d="M3 9h18" />
    <path d="M8 21h8" />
  </svg>
);

const GraduationIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M22 11v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3" />
    <path d="M12 3l5 4 5-4" />
    <circle cx="12" cy="9" r="1" />
  </svg>
);

const CodeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="10 20 12 18 10 16" />
    <polyline points="14 20 12 18 14 16" />
    <line x1="10" y1="12" x2="21" y2="2" />
  </svg>
);

const DownloadIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
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

  const { ref: introRef } = useInView({ once: true });
  const { ref: expRef } = useInView({ once: true });
  const { ref: eduRef } = useInView({ once: true });
  const { ref: skillsRef } = useInView({ once: true });
  const { ref: pdfRef } = useInView({ once: true });

  return (
    <section className={styles.root} aria-labelledby="about-heading">
      <BackgroundBlobs
        blobCount={3}
        blobSizes={[
          [70, 70],
          [50, 50],
          [40, 40],
        ]}
        blobPositions={[
          [-20, -20],
          [90, 10],
          [10, 90],
        ]}
        animationDurations={[14, 18, 22]}
      />
      <Container className={styles.container}>
        <div className={styles.header} ref={introRef}>
          <span className={styles.kicker}>Frontend-разработчик</span>
          <h1 id="about-heading" className={styles.title}>
            Обо мне
          </h1>
          <p className={styles.subtitle}>{bio}</p>
        </div>

        <div className={styles.introCard} ref={introRef}>
          <span className={styles.avatarWrap} aria-hidden="true">
            <UserIcon />
          </span>
          <div className={styles.introText}>
            <h2 className={styles.introName}>{name}</h2>
            <p className={styles.introRole}>
              {role} · {location}
            </p>
          </div>
        </div>

        <div className={styles.statsGrid} ref={introRef}>
          {stats.map((stat, i) => (
            <StatItem
              key={stat.label}
              number={stat.number}
              label={stat.label}
              description={stat.description}
              delay={i * 0.12}
            />
          ))}
        </div>

        <div className={styles.expSection} ref={expRef}>
          <h2 className={styles.sectionTitle}>Опыт работы</h2>
          <div className={styles.expList}>
            {experience.map((exp) => (
              <article key={exp.id} className={styles.expCard}>
                <div className={styles.expHeader}>
                  <div className={styles.expRoleGroup}>
                    <span className={styles.expRole}>{exp.role}</span>
                    <span className={styles.expPeriod}>{exp.period}</span>
                  </div>
                  <span className={styles.expIconWrap} aria-hidden="true">
                    <BriefcaseIcon width={24} height={24} />
                  </span>
                </div>
                <p className={styles.expCompany}>{exp.company}</p>
                <p className={styles.expLocation}>{exp.location}</p>
                <p className={styles.expStack}>
                  <span className={styles.stackLabel}>Стек:</span> {exp.stack}
                </p>
                <p className={styles.expDesc}>{exp.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.eduSection} ref={eduRef}>
          <h2 className={styles.sectionTitle}>Образование и курсы</h2>
          <div className={styles.eduGrid}>
            {education.map((edu) => (
              <article key={edu.id} className={styles.eduCard}>
                <span className={styles.eduIconWrap} aria-hidden="true">
                  <GraduationIcon width={32} height={32} />
                </span>
                <div className={styles.eduContent}>
                  <h3 className={styles.eduTitle}>{edu.course}</h3>
                  <p className={styles.eduYear}>{edu.year}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.skillsSection} ref={skillsRef}>
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
                        <span className={styles.skillIconWrap} aria-hidden="true">
                          <Icon width={18} height={18} />
                        </span>
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.pdfSection} ref={pdfRef}>
          <p className={styles.pdfLabel}>PDF-резюме:</p>
          <div className={styles.pdfLinks}>
            <ExternalLink href={pdfLinks[0]?.href} className={styles.pdfBtn}>
              {pdfLinks[0]?.label}
              <span className={styles.pdfIconWrap} aria-hidden="true">
                <DownloadIcon width={18} height={18} />
              </span>
            </ExternalLink>
            <ExternalLink href={pdfLinks[1]?.href} className={styles.pdfBtn}>
              {pdfLinks[1]?.label}
              <span className={styles.pdfIconWrap} aria-hidden="true">
                <DownloadIcon width={18} height={18} />
              </span>
            </ExternalLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
