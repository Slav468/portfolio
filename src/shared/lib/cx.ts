export type ClassValue = string | false | null | undefined;

/** Склеивает className, пропуская falsy-значения. */
export function cx(...values: ClassValue[]): string {
  return values.filter(Boolean).join(' ');
}
