import js from '@eslint/js';
import babelParser from '@babel/eslint-parser';
import reactPlugin from 'eslint-plugin-react';
import importX from 'eslint-plugin-import-x';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';

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

      // ваши добавления:
      'public/', // папка в корне проекта
      'src/legacy/', // вложенная папка, путь от корня проекта
      '**/generated/', // папка с таким именем на любом уровне
      '**/*.min.js', // файлы по маске
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
      // Алиасы (@/*, @components/* и т.д.) резолвятся из tsconfig.json paths
      'import-x/resolver-next': [createTypeScriptImportResolver({ project: './tsconfig.json' })],
    },
    rules: {
      'react/jsx-uses-vars': 'error',
      'import-x/no-unresolved': 'error',
    },
  },

  // Для TS: типы проверяет tsc, а эти правила Babel-парсер не понимает
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      'no-undef': 'off',
      'no-unused-vars': 'off', // иначе будут ложные срабатывания на типах и интерфейсах
    },
  },
];
