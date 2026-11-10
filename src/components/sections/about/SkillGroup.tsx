'use client';

import styles from './SkillGroup.module.scss';
import { SkillTag } from './SkillTag';
import type { SkillGroup as SkillGroupType } from '@/data/about';

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

type TechIconMap = Record<string, React.ComponentType>;

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
  return TECH_ICONS[first];
}

export interface SkillGroupProps {
  group: SkillGroupType;
}

export function SkillGroup({ group }: SkillGroupProps) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{group.title}</h3>
      <ul className={styles.list}>
        {group.items.map((item) => (
          <SkillTag key={item} skill={item} Icon={resolveTechIcon(item)} />
        ))}
      </ul>
    </div>
  );
}