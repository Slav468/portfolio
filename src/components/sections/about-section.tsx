'use client';

import styles from './about-section.module.scss';
import { Container } from '@/components/ui/container';
import { BackgroundBlobs } from '@/components/sections/background-blobs';
import { useInView } from '@/components/ui/useInView';
import type { AboutData } from '@/data/about';

import {
  AvatarName,
  StatRow,
  ExperienceCard,
  EducationCard,
  SkillGroup,
  PdfButtons,
  SectionHeader,
} from './about';

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
        {/* Header */}
        <header className={`${styles.header} reveal ${introVisible ? 'revealed' : ''}`} ref={introRef}>
          <span className={styles.kicker}>Frontend-разработчик</span>
          <h1 id="about-heading" className={styles.title}>Обо мне</h1>
          <p className={styles.subtitle}>{bio}</p>
        </header>

        {/* Avatar + Name */}
        <div className={`${styles.introRow} reveal ${introVisible ? 'revealed' : ''}`} ref={introRef}>
          <AvatarName name={name} role={role} location={location} size="md" />
        </div>

        {/* Stats row */}
        <div className={`${styles.statsRow} reveal ${introVisible ? 'revealed' : ''}`} ref={introRef}>
          <StatRow stats={stats} />
        </div>

        {/* Experience + Education side by side */}
        <div className={`${styles.twoCol} reveal ${expVisible ? 'revealed' : ''}`} ref={expRef}>
          <section className={styles.expSection}>
            <SectionHeader title="Опыт работы" />
            <div className={styles.expList}>
              {experience.map((exp) => (
                <ExperienceCard key={exp.id} exp={exp} />
              ))}
            </div>
          </section>

          <section className={styles.eduSection} ref={eduRef}>
            <SectionHeader title="Образование и курсы" />
            <div className={styles.eduList}>
              {education.map((edu) => (
                <EducationCard key={edu.id} edu={edu} />
              ))}
            </div>
          </section>
        </div>

        {/* Skills */}
        <div className={`${styles.skillsSection} reveal ${skillsVisible ? 'revealed' : ''}`} ref={skillsRef}>
          <SectionHeader title="Навыки" />
          <div className={styles.skillsGrid}>
            {skills.map((group) => (
              <SkillGroup key={group.id} group={group} />
            ))}
          </div>
        </div>

        {/* PDF buttons */}
        <div className={`${styles.pdfSection} reveal ${pdfVisible ? 'revealed' : ''}`} ref={pdfRef}>
          <PdfButtons links={pdfLinks} />
        </div>
      </Container>
    </section>
  );
}
