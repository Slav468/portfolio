'use client';

import styles from './background-blobs.module.scss';

export interface BackgroundBlobsProps {
  blobCount?: number;
  blobSizes?: [number, number][];
  blobPositions?: [number, number][];
  animationDurations?: number[];
}

export function BackgroundBlobs({
  blobCount = 2,
  blobSizes,
  blobPositions,
  animationDurations,
}: BackgroundBlobsProps) {
  const defaultSizes: [number, number][] = [
    [50, 50],
    [40, 40],
  ];

  const defaultPositions: [number, number][] = [
    [-15, -15], // top-right
    [-10, -10], // bottom-left
  ];

  const defaultDurations: number[] = [12, 18];

  const count = blobCount;
  const sizes = blobSizes ?? defaultSizes.slice(0, count);
  const positions = blobPositions ?? defaultPositions.slice(0, count);
  const durs = animationDurations ?? defaultDurations.slice(0, count);

  return (
    <div className={styles.blobs}>
      {Array.from({ length: count }, (_, i) => (
        <div
          key={i}
          className={styles.blob}
          style={{
            width: sizes[i][0],
            height: sizes[i][1],
            top: positions[i][0],
            left: positions[i][1],
            '--animation-duration': `${durs[i]}s`,
          }}
        />
      ))}
    </div>
  );
}
