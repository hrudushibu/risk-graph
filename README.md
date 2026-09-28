# risk-graph

[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](./LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-blue)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org)

> Risk visualization and graph analysis tooling built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4.

## Repository

[https://github.com/hrudushibu/risk-graph](https://github.com/hrudushibu/risk-graph)

## Tech Stack

- [Next.js 16](https://nextjs.org) — React framework with App Router
- [React 19](https://react.dev) — UI library
- [TypeScript 5](https://www.typescriptlang.org) — Type safety
- [Tailwind CSS 4](https://tailwindcss.com) — Utility-first styling
- [shadcn/ui](https://ui.shadcn.com) — Component library

## Getting Started

```bash
# Clone the repo
git clone https://github.com/hrudushibu/risk-graph.git
cd risk-graph

# Install dependencies
npm install

# Set up environment
cp .env.example .env.local

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
app/                  # Next.js App Router pages
components/
  app/                # AppHeader, AppFooter, AppLayout
  console/            # ConsoleHeader, ConsoleSidebar, ConsoleLayout
  ui/                 # shadcn/ui primitives
lib/                  # Shared utilities
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Contributing

Contributions are welcome! See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## Security

To report a vulnerability, see [SECURITY.md](./SECURITY.md) or email [hrudushibu.tech@gmail.com](mailto:hrudushibu.tech@gmail.com).

## License

Licensed under the [Apache License 2.0](./LICENSE).
