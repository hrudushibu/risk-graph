# risk-graph — Agent Rules

This file provides guidance to AI agents working on this codebase.

## Project Overview

- **Repository**: [https://github.com/hrudushibu/risk-graph](https://github.com/hrudushibu/risk-graph)
- **License**: Apache-2.0
- **Contact**: [hrudushibu.tech@gmail.com](mailto:hrudushibu.tech@gmail.com)

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript 5
- Tailwind CSS 4
- shadcn/ui components

## Code Style

- Use TypeScript strict mode
- Follow functional React patterns
- Prefer named exports over default exports
- Use Tailwind CSS utilities, avoid inline styles
- Keep components small and focused

## File Structure

```
app/                  # Next.js App Router pages
components/
  app/                # Application-wide layout components
  console/            # Console/dashboard layout components
  ui/                 # shadcn/ui primitives
lib/                  # Shared utilities
```

---

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
