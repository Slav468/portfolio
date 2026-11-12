import {
  cvLinks,
  education,
  experience,
  profile,
  profileStats,
  skills,
} from '@/entities/profile';
import { DownloadCvButtons } from '@/features/download-cv';
import { PageHeader, PageSection, Reveal } from '@/shared/ui';
import { AboutStats } from './AboutStats';
import { EducationSection } from './EducationSection';
import { ExperienceSection } from './ExperienceSection';
import { ProfileIntro } from './ProfileIntro';
import { SkillsSection } from './SkillsSection';
import styles from './about-page.module.scss';

export function AboutPage() {
  return (
    <PageSection labelledBy="about-heading" blobs={3}>
      <div className={styles.stack}>
        <Reveal>
          <PageHeader
            titleId="about-heading"
            kicker={profile.role}
            title="Обо мне"
            description={profile.bio}
            className={styles.header}
          />
        </Reveal>

        <Reveal>
          <ProfileIntro name={profile.fullName} role={profile.role} location={profile.location} />
        </Reveal>

        <Reveal>
          <AboutStats stats={profileStats} />
        </Reveal>

        <div className={styles.columns}>
          <Reveal>
            <ExperienceSection items={experience} />
          </Reveal>
          <Reveal delay={100}>
            <EducationSection items={education} />
          </Reveal>
        </div>

        <Reveal>
          <SkillsSection groups={skills} />
        </Reveal>

        <Reveal>
          <DownloadCvButtons links={cvLinks} />
        </Reveal>
      </div>
    </PageSection>
  );
}
