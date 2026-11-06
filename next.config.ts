import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: ['./styles'],
  },
  images: {
    domains: [],
  },
  turbopack: {
    // Алиасы подхватываются из tsconfig.json (compilerOptions.paths).
    // Явное дублирование не требуется, но блок оставил для расширения.
  },
};

export default nextConfig;