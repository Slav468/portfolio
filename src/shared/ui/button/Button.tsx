import type { ButtonHTMLAttributes } from 'react';
import { cx } from '@/shared/lib';
import { AppLink, type AppLinkProps } from '../app-link';
import styles from './button.module.scss';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonStyleProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

function buttonClassName(
  { variant = 'primary', size = 'md' }: ButtonStyleProps,
  className?: string
) {
  return cx(styles.button, styles[variant], variant !== 'text' && styles[size], className);
}

export type ButtonLinkProps = ButtonStyleProps & AppLinkProps;

/** Ссылка, выглядящая как кнопка. Для внешних URL и файлов сама ставит target/rel. */
export function ButtonLink({ variant, size, className, ...props }: ButtonLinkProps) {
  return <AppLink className={buttonClassName({ variant, size }, className)} {...props} />;
}

export type ButtonProps = ButtonStyleProps & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ variant, size, className, type = 'button', ...props }: ButtonProps) {
  return <button type={type} className={buttonClassName({ variant, size }, className)} {...props} />;
}
