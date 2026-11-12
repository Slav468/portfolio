/**
 * «август 2025». ISO-даты без времени парсятся как UTC, поэтому и форматируем в UTC —
 * иначе на сервере с отрицательным смещением месяц «съезжает» на предыдущий.
 */
export function formatMonthYear(iso: string, locale = 'ru-RU'): string {
  return new Date(iso).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    timeZone: 'UTC',
  });
}
