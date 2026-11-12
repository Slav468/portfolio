import js from '@eslint/js';
import babelParser from '@babel/eslint-parser';
import reactPlugin from 'eslint-plugin-react';
import importX from 'eslint-plugin-import-x';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';

/**
 * Правила слоёв Feature-Sliced Design: слой может импортировать только нижележащие.
 * app → views → widgets → features → entities → shared
 */
const LAYERS = ['app', 'views', 'widgets', 'features', 'entities', 'shared'];

const layerBoundaryOverrides = LAYERS.map((layer, index) => {
  const forbiddenLayers = LAYERS.slice(0, index);
  return {
    files: [`src/${layer}/**/*.{ts,tsx}`],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            ...(forbiddenLayers.length
              ? [
                  {
                    group: forbiddenLayers.map((l) => `@/${l}`).concat(
                      forbiddenLayers.map((l) => `@/${l}/**`)
                    ),
                    message: `Слой «${layer}» не может импортировать вышележащие слои (FSD).`,
                  },
                ]
              : []),
            // Между слайсами — только через публичный API (index.ts)
            ...(layer === 'shared'
              ? []
              : [
                  {
                    group: ['@/entities/*/*', '@/features/*/*', '@/widgets/*/*', '@/views/*/*'],
                    message: 'Импортируйте слайс через его публичный API (index.ts).',
                  },
                ]),
          ],
        },
      ],
    },
  };
});

export default [
  // Глобальный ignore: должен быть ОТДЕЛЬНЫМ объектом только с ignores
  {
    ignores: [
      'node_modules/',
      '.next/',
      'out/',
      'build/',
      'coverage/',
      '.vercel/',
      'package-lock.json',
      'public/',
      '**/generated/',
      '**/*.min.js',
      '.cline/',
      '.faif/',
    ],
  },

  js.configs.recommended,

  {
    files: ['**/*.{ts,tsx,js,jsx,mjs,cjs}'],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        requireConfigFile: false,
        babelOptions: {
          presets: [['@babel/preset-react', { runtime: 'automatic' }], '@babel/preset-typescript'],
        },
      },
    },
    plugins: {
      react: reactPlugin,
      'import-x': importX,
    },
    settings: {
      // Алиасы (@/*) резолвятся из tsconfig.json paths
      'import-x/resolver-next': [createTypeScriptImportResolver({ project: './tsconfig.json' })],
    },
    rules: {
      'react/jsx-uses-vars': 'error',
      'react/jsx-key': 'error',
      'import-x/no-unresolved': 'error',
    },
  },

  // Для TS: типы проверяет tsc, а эти правила Babel-парсер не понимает
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      'no-undef': 'off',
      'no-unused-vars': 'off', // иначе ложные срабатывания на типах и интерфейсах
    },
  },

  ...layerBoundaryOverrides,
];
