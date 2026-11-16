# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager is **pnpm** (pinned via `packageManager` in `package.json`).

- `pnpm dev` — dev server at http://localhost:3000
- `pnpm build` — production build (also the main type-check gate; there is no separate `tsc` script)
- `pnpm start` — serve the production build
- `pnpm lint` — ESLint (flat config in `eslint.config.mjs`, extends `eslint-config-next`)

There is no test suite.

## Stack

Next.js 16 (App Router) + React 19 with the **React Compiler enabled** (`reactCompiler: true` in `next.config.ts`), so manual `useMemo`/`useCallback` are generally unnecessary. Tailwind CSS v4 (CSS-first config in `src/app/globals.css`, no `tailwind.config`), shadcn/ui with the `base-nova` style, which builds on **`@base-ui/react`** primitives (not Radix). Icons from `lucide-react`. Path alias `@/*` → `src/*`.

## Architecture

Single-page personal portfolio, written in **Portuguese (pt-BR)** — keep user-facing copy, aria-labels, and section anchors in Portuguese.

- **Content lives in `src/data/portfolio.ts`.** `siteConfig`, `navItems`, `skills`, `projects`, and social links are typed data exported from here; section components only render it. To change text, projects, or links, edit this file rather than the components.
- `src/app/page.tsx` composes the page from section components in `src/components/portfolio/`. Each section is a `<section id="...">` whose `id` must match an `href` anchor in `navItems` (e.g. `#sobre`, `#projetos`, `#contato`); sections use `scroll-mt-20` to clear the sticky header.
- Theming: `next-themes` via `src/components/theme-provider.tsx`, configured in `src/app/layout.tsx` with class attribute, default **dark**, system theme disabled. Dark mode in CSS uses `@custom-variant dark (&:is(.dark *))`. Color tokens are CSS variables in `globals.css`.
- `src/components/ui/` holds shadcn-generated components (add more with `pnpm dlx shadcn@latest add <component>`; settings in `components.json`). Use `cn()` from `@/lib/utils` to merge classes.
- Static assets referenced by `siteConfig` (avatar, CV PDF) live in `public/`.
