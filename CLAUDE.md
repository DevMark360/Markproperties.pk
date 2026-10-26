# Project Instructions — Markproperties.pk

Real estate portal for Pakistan (buy, rent, off-plan projects, agents/agencies). Benchmark: famproperties.com — goal is to exceed it in search UX, performance, and local market data.

## Tech Stack

- **Framework:** Next.js (App Router) + TypeScript (strict)
- **UI:** Tailwind CSS + shadcn/ui
- **Database:** MySQL/MariaDB (managed via phpMyAdmin), via Prisma ORM — use InnoDB, utf8mb4, and spatial `POINT` columns with SPATIAL indexes for geo queries
- **Search:** MySQL FULLTEXT indexes initially; Meilisearch/Typesense when listing volume requires it
- **Auth:** Auth.js with role-based access (user, agent, agency, admin)
- **Media:** Cloudinary (or S3 + CDN) for listing images
- **Maps:** Google Maps
- **Prices:** PKR, supporting lakh/crore display; areas in marla/kanal/sq ft

## Project Structure & Commands

- `npm run dev` (http://localhost:3000), `npm run build`, `npm run lint`
- Next.js 16 with Cache Components enabled — read `node_modules/next/dist/docs/` before using unfamiliar APIs (see @AGENTS.md)
- `src/components/ui` shared primitives · `src/components/layout` header/footer · `src/components/cards` reusable cards · `src/components/home` home sections
- `src/config/site.ts` site-wide config (nav, contact, WhatsApp) · `src/data` mock content (to be replaced by DB) · `src/types` shared types · `src/lib` utilities
- When replacing an image in `public/`, use a **new filename** (e.g. `-v3`) and update the reference — `next/image` and browsers cache by URL, so overwriting in place keeps serving the old image. Logo paths and dimensions live in `siteConfig` (`src/config/site.ts`); the light variant is derived from the main logo and must be regenerated with it
- Write files as UTF-8 **without BOM** (PowerShell `Set-Content -Encoding utf8` adds a BOM that breaks `package.json`)

## Engineering Principles

- **Extendable & reusable:** Design functions, components, and modules so they can be extended without modification (Open/Closed). Extract shared logic into reusable utilities, hooks, or services when it is used in more than one place — but don't abstract prematurely for a single use.
- **Single responsibility:** Each function, class, and component does one thing well. Keep functions small and composable.
- **Best practices first:** Follow the idiomatic conventions and current best practices of the language/framework in use. Prefer proven patterns (composition over inheritance, dependency injection, separation of concerns, DRY, KISS, YAGNI).
- **Best approach:** Before implementing, consider the alternatives and choose the simplest approach that is correct, maintainable, and scalable. Briefly justify non-obvious choices in the response.
- **Strong typing:** Use explicit types and interfaces; avoid `any` or untyped data at boundaries.
- **Error handling:** Validate inputs at system boundaries, handle failures explicitly, and never swallow errors silently.
- **Security:** Use parameterized queries, sanitize/encode user input and output, keep secrets out of code, and apply least privilege.

## Skills

Before starting a task, load the skills that match it (via the Skill tool) and follow them. Combine several when a task spans areas.

| Task | Skills |
|---|---|
| Pages, components, routing, data fetching | `fullstack-dev-skills:nextjs-developer`, `fullstack-dev-skills:react-expert`, `fullstack-dev-skills:typescript-pro` |
| UI, layout, visual polish | `frontend-design`, `impeccable`, `ui-ux-pro-max:ui-ux-pro-max` |
| Motion and transitions | `animate`, `emil-design-eng` |
| Backend design, module boundaries, new features | `software-architecture`, `fullstack-dev-skills:architecture-designer` |
| Forms, server actions, APIs, end-to-end features | `fullstack-dev-skills:fullstack-guardian`, `fullstack-dev-skills:api-designer`, `security-engineering` |
| MySQL schema, Prisma, queries | `fullstack-dev-skills:sql-pro`, `fullstack-dev-skills:database-optimizer` |
| Security review before shipping user-facing input or auth | `security-engineering`, `ai-pentesting`, `fullstack-dev-skills:security-reviewer` |
| New pages, metadata, URLs, structured data | `claude-seo:seo-page`, `claude-seo:seo-schema`, `claude-seo:seo-technical` |
| Area pages, Karachi local search, Google Business consistency | `claude-seo:seo-local`, `claude-seo:seo-geo` |
| Sitemap, robots.txt, blog and content planning | `claude-seo:seo-sitemap`, `claude-seo:seo-content`, `claude-seo:seo-cluster` |
| Pre-launch audit (run `/seo setup` first) | `claude-seo:seo-audit` |
| Bugs and errors | `fullstack-dev-skills:debugging-wizard` |
| Tests | `fullstack-dev-skills:test-master`, `fullstack-dev-skills:playwright-expert` |
| Code review | `fullstack-dev-skills:code-reviewer` |
| Deployment, hosting, CI | `fullstack-dev-skills:devops-engineer` |

Project rules in this file take precedence when a skill conflicts with them (e.g. comment density, MySQL over Postgres).

## Performance & Time Complexity

- Choose data structures and algorithms with the best practical time and space complexity for the task (e.g. hash maps/sets for lookups instead of nested loops).
- Avoid O(n²) or worse patterns on unbounded data; avoid N+1 queries — batch, index, and paginate.
- State the time complexity of non-trivial algorithms in the terminal response.
- Prefer lazy loading, memoization, and caching where they give measurable benefit — not by default.

## Developer Learning & Code Style Rules

- **Clean Code:** Write production-ready, professional code with minimal, essential documentation comments only. Never clutter code with explanatory or tutorial comments.
- **Teaching Mode:** When writing or refactoring code, provide a brief, high-level breakdown of the architecture, design patterns, or framework choices in the terminal response instead of inside the code files.
