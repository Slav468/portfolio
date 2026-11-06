import js from '@eslint/js';
import babelParser from '@babel/eslint-parser';
import reactPlugin from 'eslint-plugin-react';

// Базовый flat config для ESLint 10.
// Парсинг JSX/TSX через @babel/eslint-parser (typescript-eslint не поддерживает TS 7.0).
export default [
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
          presets: [
            ['@babel/preset-react', { runtime: 'automatic' }],
            '@babel/preset-typescript',
          ],
        },
      },
    },
    plugins: {
      react: reactPlugin,
    },
    rules: {
      // react/jsx-uses-vars: помечает переменные, используемые в JSX (например, <ThemeToggle />),
      // как использованные, чтобы no-unused-vars не ругался на импорты компонентов.
      'react/jsx-uses-vars': 'error',
    },
    settings: {
      // Подсказка для плагинов импортов (eslint-plugin-import и т.д.):
      // разрешать алиасы из tsconfig.json paths
      'import/resolver': {
        typescript: {},
        node: {
          paths: ['./src', './styles'],
        },
        // Дополнительно разрешаем алиасы @/* из tsconfig.json
        '@': {
          baseUrl: '.',
          paths: {
            '@/*': ['./src/*'],
          },
        },
      },
    },
    ignores: [
      'node_modules/',
      '.next/',
      'out/',
      'build/',
      'coverage/',
      '.vercel/',
      'package-lock.json',
    ],
  },
];
