'use client';

import React from 'react';
import styles from './floating-icons.module.scss';

export interface FloatingIconsProps {
  svgComponents: React.ReactNode[];
  positions?:
    | {
        top?: number;
        bottom?: number;
        left?: number;
        right?: number;
      }[];
  animationDurations?: number[];
  animationDelays?: number[];
}

export function FloatingIcons({
  svgComponents,
  positions,
  animationDurations,
  animationDelays,
}: FloatingIconsProps) {
  const defaultPositions = [
    { top: 10, left: 5 },
    { top: 70, left: 70 },
    { bottom: 10, right: 5 },
    { top: 30, left: 80 },
    { top: 50, left: 20 },
    { bottom: 30, right: 20 },
    { top: 60, left: 10 },
  ];

  const defaultDurations = [8, 10, 12, 14, 9, 11, 13];
  const defaultDelays = [0, 2, 4, 1, 3, 5, 6];

  const numIcons = svgComponents.length;
  const durs = animationDurations ?? defaultDurations.slice(0, numIcons);
  const delays = animationDelays ?? defaultDelays.slice(0, numIcons);

  return (
    <div className={styles.icons}>
      {svgComponents.map((svg, i) => (
        <svg
          key={i}
          width={40}
          height={40}
          fill="currentColor"
          viewBox="0 0 48 48"
          style={{
            position: 'absolute',
            width: 40,
            height: 40,
            animation: `float ${durs[i]}s ease-in-out infinite alternate`,
            animationDelay: `${delays[i]}s`,
          }}
        >
          {svg}
        </svg>
      ))
    </div>
  );
}