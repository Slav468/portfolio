'use client';

import { useEffect, useState } from 'react';

/** true, когда пользователь скроллит вниз ниже порога; false — при скролле вверх. */
export function useHideOnScroll(threshold = 60): boolean {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const currentY = window.scrollY;
        setHidden(currentY > lastY && currentY > threshold);
        lastY = currentY;
        ticking = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return hidden;
}
