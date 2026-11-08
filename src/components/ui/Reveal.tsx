'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

export interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  once?: boolean;
  threshold?: number;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Переиспользуемый компонент для reveal-анимаций при появлении элемента в зоне просмотра.
 * Обёртка над useInView, убирает дублирование Jonas/useInView в каждом компоненте.
 * Уважает prefers-reduced-motion (включает элемент мгновенно).
 */
export function Reveal({
  children,
  delay = 0,
  once = true,
  threshold = 0.1,
  className,
  style,
}: RevealProps) {
  const [isInView, setIsInView] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const hasTriggeredRef = useRef(false);

  const setRef = useCallback(
    (node: HTMLElement | null) => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
      if (!once || !node) return;

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
        { threshold, rootMargin: '0px 0px -15% 0px' }
      );
      observerRef.current.observe(node);
    },
    [once, threshold]
  );

  useEffect(() => {
    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  return (
    <div
      ref={setRef}
      style={{
        transitionDelay: `${delay}ms`,
        ...style,
      }}
      className={className}
    >
      <div
        className={`${isInView ? 'revealed' : ''}`}
        style={
          isInView
            ? {
                opacity: 1,
                transform: 'translateY(0)',
              }
            : {
                opacity: 0,
                transform: 'translateY(1rem)',
              }
        }
      >
        {children}
      </div>
    </div>
  );
}