import styles from './skip-link.module.scss';

/** Ссылка «Перейти к содержимому» для клавиатурной навигации. Появляется при фокусе. */
export function SkipLink({ targetId }: { targetId: string }) {
  return (
    <a href={`#${targetId}`} className={styles.link}>
      Перейти к содержимому
    </a>
  );
}
