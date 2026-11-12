import type { ComponentType, SVGProps } from 'react';
import { IconSlot, MailIcon, PhoneIcon } from '@/shared/ui';
import type { ContactIconName, SocialIconName } from '../model/types';

import facebook from '@/shared/assets/icons/social/facebook.svg';
import github from '@/shared/assets/icons/tech/github.svg';
import instagram from '@/shared/assets/icons/social/instagram.svg';
import linkedin from '@/shared/assets/icons/social/linkedin.svg';
import telegram from '@/shared/assets/icons/social/telegram.svg';
import vk from '@/shared/assets/icons/social/vk.svg';

type SvgComponent = ComponentType<SVGProps<SVGSVGElement>>;

// stroke-иконки (телефон, почта) и брендовые SVG (заливка из currentColor)
const STROKE_ICONS: Record<ContactIconName, SvgComponent> = {
  phone: PhoneIcon,
  mail: MailIcon,
};

const BRAND_ICONS: Record<SocialIconName, SvgComponent> = {
  telegram,
  linkedin,
  github,
  vk,
  instagram,
  facebook,
};

export interface ContactIconProps {
  name: ContactIconName | SocialIconName;
  size?: string;
}

export function ContactIcon({ name, size }: ContactIconProps) {
  if (name in STROKE_ICONS) {
    const Icon = STROKE_ICONS[name as ContactIconName];
    return (
      <IconSlot size={size ?? '1.125rem'}>
        <Icon />
      </IconSlot>
    );
  }

  const Icon = BRAND_ICONS[name as SocialIconName];
  return (
    <IconSlot size={size ?? '1.5rem'} brand>
      <Icon />
    </IconSlot>
  );
}
