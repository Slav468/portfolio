'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

export interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  enabled?: boolean;
}

/**
 * Хук для reveal-анимаций при появлении элемента в зоне просмотра.
 * Возвращает callback-ref и флаг isInView. Уважает prefers-reduced-motion.
 */
export function useInView({
  threshold = 0.1,
  rootMargin = '0px 0px -15% 0px',
  once = true,
  enabled = true,
}: UseInViewOptions = {}) {
  const [isInView, setIsInView] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const hasTriggeredRef = useRef(false);

  const setRef = useCallback((node: HTMLElement | null) => {
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }
    if (!enabled || !node) return;

    // При уменьшении движения считаем элемент сразу видимым (без анимации)
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setIsInView(true);
      return;
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsInView(true);
          hasTriggeredRef.current = true;
          if (once) observerRef.current?.unobserve(node);
        } else if (!once) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin }
    );
    observerRef.current.observe(node);
  }, [threshold, rootMargin, once, enabled]);

  useEffect(() => {
    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  return { ref: setRef, isInView };
}
