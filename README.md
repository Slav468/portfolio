# Портфолио — Next.js 16 · React 19 · TypeScript · SCSS Modules

## Команды

```bash
npm run dev         # разработка
npm run build       # production-сборка
npm run lint        # ESLint (включая проверку границ FSD-слоёв)
npm run typecheck   # tsc --noEmit
npm run test:run    # Vitest, один прогон
```

## Архитектура (Feature-Sliced Design)

Слой импортирует только нижележащие слои: `app → views → widgets → features → entities → shared`.
Между слайсами — только через публичный API (`index.ts`). Оба правила проверяет ESLint
(`no-restricted-imports` в `eslint.config.js`).

```txt
app/                    Next.js-роуты: только metadata + рендер страницы из views
src/
├─ app/                 FSD-слой app: провайдеры, шрифты, глобальные стили, AppShell
├─ views/               страницы (в FSD — «pages»; переименовано, чтобы не конфликтовать с Next)
│  ├─ home/  about/  projects/  project-detail/  contact/
├─ widgets/             самостоятельные блоки страницы: header, footer, hero
├─ features/            пользовательские сценарии: theme-toggle, download-cv
├─ entities/            бизнес-сущности
│  ├─ project/          модель (данные, селекторы), ProjectCard, ProjectGrid, ProjectCover
│  └─ profile/          профиль, опыт, образование, навыки, контакты + карточки
└─ shared/              без бизнес-логики
   ├─ ui/               Button, Card, Tag, Container, Reveal, PageSection, PageHeader, StatCard, ...
   ├─ lib/              cx, formatMonthYear; lib/hooks — useInView, useHideOnScroll, ...
   ├─ config/           SITE, ROUTES
   ├─ styles/           _tokens (CSS-переменные), _mixins (breakpoints, glass, focus-ring), _keyframes
   └─ assets/icons/     SVG (импортируются как React-компоненты через @svgr/webpack)
```

Структура слайса: `ui/` (компоненты + `*.module.scss`), `model/` (типы, данные, селекторы, метаданные), `index.ts`.

## Стили

- Значения — только через CSS-переменные из `shared/styles/_tokens.scss`; тёмная тема — `src/app/styles/_themes.scss`.
- В модуле: `@use '@/shared/styles/mixins' as *;` → `@include up(md)`, `down(md)`, `glass-card`, `focus-ring`, `accent(30%)` и др.
- `@keyframes` объявляются миксинами (`@include keyframes-float;`): CSS Modules локализуют имена анимаций.
- Анимация появления — единый компонент `<Reveal delay={…}>`; при `prefers-reduced-motion` и без JS контент виден сразу.

## Как добавить…

- **Проект:** запись в `src/entities/project/model/projects.ts` — страница и карточка появятся сами.
- **Страницу:** `src/views/<name>/` (ui + model/metadata + index) и тонкий `app/<name>/page.tsx`.
- **Технологию с иконкой:** SVG в `src/shared/assets/icons/tech/` + строка в `TECH_ICONS` (`shared/ui/tech-icon`).

## Что нужно положить в `public/`

- `images/projects/<slug>.jpg` — обложки проектов (пути указаны в `projects.ts`; без файла показывается градиент).
- `og.png` — картинка для OpenGraph (по желанию добавить в `src/app/metadata.ts`).
- Переменная `NEXT_PUBLIC_SITE_URL` (например, в `.env.production`) — базовый URL для метаданных.
