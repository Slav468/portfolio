'use client';

import { useSyncExternalStore } from 'react';
import { useTheme } from 'next-themes';
import { cx } from '@/shared/lib';
import { MoonIcon, SunIcon } from '@/shared/ui';
import styles from './theme-toggle.module.scss';

const subscribe = () => () => {};

export function ThemeToggle({ className }: { className?: string }) {
  const { setTheme, resolvedTheme } = useTheme();
  // false на сервере и при гидратации, true — после: иначе разметка расходится (тема известна только клиенту)
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);

  if (!mounted) {
    return (
      <button
        type="button"
        className={cx(styles.toggle, className)}
        aria-label="Переключение темы"
        disabled
      >
        <MoonIcon />
      </button>
    );
  }

  const isDark = resolvedTheme === 'dark';
  // Показываем иконку темы, на которую переключимся
  const Icon = isDark ? SunIcon : MoonIcon;
  const label = isDark ? 'Включить светлую тему' : 'Включить тёмную тему';

  return (
    <button
      type="button"
      className={cx(styles.toggle, className)}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={label}
      title={label}
    >
      <Icon />
    </button>
  );
}
