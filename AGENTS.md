# Risk Graph — AI Agent Rules

This file provides guidance to AI agents working on Risk Graph, an open-source security context graph.

## 🎯 Project Context

**Risk Graph** models security environments as interconnected graphs. You're building a system that helps security teams understand complex relationships between assets, identities, permissions, and vulnerabilities.

- **Repository**: [https://github.com/hrudushibu/risk-graph](https://github.com/hrudushibu/risk-graph)
- **License**: Apache-2.0
- **Contact**: [hrudushibu.tech@gmail.com](mailto:hrudushibu.tech@gmail.com)

## 🚧 Development Stage

**Early Development** — Graph data model and architecture are being designed. Implementation is in progress. Data structures and features are not yet finalized.

## 🧠 Core Concepts

### Graph-First Thinking
Everything is a node or an edge. Assets, identities, permissions, vulnerabilities, exposures—they're all nodes. Relationships are edges. Think in terms of traversals, not tables.

### Relationships Matter More Than Entities
A vulnerability by itself isn't that interesting. A vulnerability on an internet-facing server that's connected to a database with customer PII? That's critical. Model the connections.

### Context is King
Risk isn't absolute—it's contextual. The same vulnerability has different risk depending on what's connected to it, who can access it, and what data it can reach.

## 💻 Tech Stack

- **Next.js 16** with App Router
- **React 19** with Server Components
- **TypeScript 5** in strict mode
- **Tailwind CSS 4** for styling
- **shadcn/ui** for components

## 📝 Code Style for Graphs

### Node Types
```typescript
// ✅ Good: Strongly typed nodes
type AssetNode = {
  id: string;
  type: 'server' | 'container' | 'database' | 'storage';
  properties: Record<string, unknown>;
  labels: string[];
};

// ❌ Bad: Untyped generic nodes
type Node = {
  id: string;
  data: any;
};
```

### Edge Relationships
```typescript
// ✅ Good: Typed relationships with metadata
type Edge = {
  from: string;
  to: string;
  type: EdgeType;
  properties?: EdgeProperties;
};

type EdgeType =
  | 'HAS_VULNERABILITY'
  | 'CAN_ACCESS'
  | 'CONNECTED_TO'
  | 'EXPOSES';

// ❌ Bad: Generic edges
type Edge = {
  source: string;
  target: string;
  label: string;
};
```

## 📂 Current Project Structure

```
app/                  # Next.js App Router pages
components/
  app/                # App-wide layouts
  console/            # Console-specific UI
  ui/                 # Base UI primitives
lib/                  # Shared utilities
```

**Note**: Feature-specific folders (graph, assets, identities, etc.) will be added as development progresses.

## 🚨 Security Considerations

### Data Privacy
Security graphs contain sensitive topology information. Implement access controls and audit logging.

### Graph Injection
Sanitize all user input that constructs graph queries. Prevent query injection attacks.

### Performance Limits
Large graphs can exhaust memory. Implement pagination, lazy loading, and query timeouts.

---

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
