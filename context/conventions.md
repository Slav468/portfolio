# Context — Conventions

## Именование

- Классы: BEM (`block__element--modifier`).
- Файлы SCSS partials: `_имя.scss` (kebab-case, подчёркивание).
- Компоненты React: PascalCase (`Component.tsx`).
- Переменные/функции: camelCase.
- Константы: UPPER_SNAKE_CASE.

## Стили

- CSS custom properties (`var(--color-*)`) для runtime-токенов (цвета, шрифты).
- SCSS переменные (`$`) с `!default` только для build-time (breakpoints, grid math).
- В `var()` SCSS значение используется как fallback: `color: var(--color-text, $color-text)`.
- Nesting не глубже 3 уровней, `&` для состояний (`&:hover`, `&.is-active`).
- Медиа-запросы внутри селектора, который они модифицируют.
- Нет хардкода hex/px в компонентах — только токены.

## Структура

- `src/features/<feature>/{components,hooks,api,types,index.ts}` — colocate.
- `src/components/` — только действительно shared UI.
- `src/lib/` — только фиче-агностичные хелперы.
- Тесты рядом с кодом (`Component.test.tsx`).

## Импорты и алиасы

- Используются path aliases из `tsconfig.json` (`compilerOptions.paths`):
  - `@/*` → `./src/*` и `./*`
  - `@components/*` → `./src/components/*`
  - `@features/*` → `./src/features/*`
  - `@lib/*` → `./src/lib/*`
  - `@data/*` → `./src/data/*`
  - `@styles/*` → `./styles/*`
- Относительные импорты (`../`, `../../`) избегаются там, где подходит алиас.
- Алиасы синхронизированы в `next.config.ts` (Turbopack) и `eslint.config.js` (import/resolver).
