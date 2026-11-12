export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  /** Стек одной строкой через запятую */
  stack: string;
  description: string;
}

export interface EducationItem {
  id: string;
  course: string;
  year: number;
}

export interface SkillGroup {
  id: string;
  title: string;
  items: string[];
}

export interface CvLink {
  href: string;
  label: string;
}

export interface ProfileStat {
  number: string;
  label: string;
  description?: string;
}

export type ContactIconName = 'phone' | 'mail';

export interface ContactItem {
  label: string;
  value: string;
  href: string;
  icon: ContactIconName;
}

export type SocialIconName = 'telegram' | 'linkedin' | 'github' | 'vk' | 'instagram' | 'facebook';

export interface SocialLink {
  name: string;
  href: string;
  icon: SocialIconName;
}

export interface Profile {
  fullName: string;
  /** Имя и фамилия — для заголовков, футера, метаданных */
  shortName: string;
  role: string;
  location: string;
  /** Краткое представление (страница «Контакты») */
  summary: string;
  /** Полное описание (страница «Обо мне») */
  bio: string;
}
