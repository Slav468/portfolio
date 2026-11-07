'use client';

import React from 'react';
import styles from './floating-icons.module.scss';

export interface FloatingIconsProps {
  svgComponents: React.ReactNode[];
  positions?: {
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
    { top: '5%', left: '5%' }, // 1: top-left
    { top: '20%', left: '30%' }, // 2: top-center
    { top: '40%', left: '55%' }, // 3: top-right
    { top: '65%', left: '75%' }, // 4: bottom-right
    { top: '75%', left: '50%' }, // 5: bottom-center
    { top: '85%', left: '25%' }, // 6: bottom-left
    { top: '70%', left: '80%' }, // 7: far top-right
    { top: '80%', left: '5%' }, // 8: far bottom-left
    { top: '20%', left: '70%' }, // 9: middle-right
    { top: '45%', left: '5%' }, // 10: middle-left
    { top: '60%', left: '40%' }, // 11: center-bottom
    { top: '75%', left: '60%' }, // 12: center-bottom-right
  ];

  const defaultDurations = [8, 10, 12, 14, 9, 11, 13, 10, 12, 9, 11, 14];
  const defaultDelays = [0, 2, 4, 1, 3, 5, 6, 2, 4, 6, 8, 10];

  const numIcons = svgComponents.length;
  const pos = positions ?? defaultPositions.slice(0, numIcons);
  const durs = defaultDurations.slice(0, numIcons);
  const delays = defaultDelays.slice(0, numIcons);

  return (
    <div className={styles.icons}>
      {svgComponents.map((svg, i) => (
        <span
          key={i}
          className="icon"
          style={{
            position: 'absolute',
            width: 40,
            height: 40,
            animation: `float ${durs[i]}s ease-in-out infinite alternate`,
            animationDelay: `${delays[i]}s`,
            top: pos[i]?.top ?? 0,
            left: pos[i]?.left ?? 0,
          }}
        >
          {svg}
        </span>
      ))}
    </div>
  );
}
