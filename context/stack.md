# Context — Stack

## Стек технологий (версии зафиксированы из package.json)

| Слой         | Инструмент                     | Версия   | Источник решения                  |
| ------------ | ------------------------------ | -------- | --------------------------------- |
| Фреймворк    | Next.js (App Router)           | ^16.4.3  | Latest stable                     |
| React        | React 19                       | ^19.3.1  | Latest stable                     |
| Язык         | TypeScript                     | ^7.0.2   | Latest stable                     |
| Стили        | SCSS (Dart Sass)               | ^1.106.1 | Выбор пользователя (не Tailwind)  |
| Шрифты       | Локальные .woff2               | —        | Geist Sans + JetBrains Mono       |
| Тестирование | Vitest + React Testing Library | —        | Планирование                      |
| E2E          | Playwright                     | —        | Планирование                      |
| Линтер       | ESLint + eslint-config-next    | ^10.13.0 | Latest stable (обновлён с 9.39.5) |
| Форматтер    | Prettier                       | ^3.9.10  | Стандарт                          |

## Версии политики

- `follow package.json` — версии берутся из установленных зависимостей, не угадываются.
- При установке новых зависимостей — без жёсткого specifier, версия разрешается пакетным менеджером.

## Алиасы импортов (TypeScript paths)

| Алиас | Путь |
|-------|------|
| `@/*` | `./src/*` и `./*` |
| `@components/*` | `./src/components/*` |
| `@features/*` | `./src/features/*` |
| `@lib/*` | `./src/lib/*` |
| `@data/*` | `./src/data/*` |
| `@styles/*` | `./styles/*` |

### Где прописываются алиасы

| Файл | Назначение | Что прописывать |
|------|-----------|-----------------|
| `tsconfig.json` | TypeScript понимает пути при компиляции | `compilerOptions.paths` — все 6 алиасов выше |
| `next.config.ts` | Next.js / Turbopack при сборке и SSR | Алиасы берутся из `tsconfig.json` автоматически; блок `turbopack` оставил для расширения |
| `eslint.config.js` | ESLint не ругается на неразрешённые импорты | `settings['import/resolver']` с путями `['./src', './styles']` |
| `vitest.config.ts` (планируется) | Тесты Vitest при импорте компонентов | `resolve.alias` с теми же путями |
| `jsconfig.json` (по необходимости) | Чистые JS-файлы без TS | Аналогичные `compilerOptions.paths` |

Настроено в `tsconfig.json` (`compilerOptions.paths`), `next.config.ts`, `eslint.config.js`.
