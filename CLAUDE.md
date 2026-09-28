# Claude AI Rules for Risk Graph

This file provides specific guidance to Claude AI when working on Risk Graph.

See [AGENTS.md](./AGENTS.md) for complete project guidelines.

## 🎯 Project Mission

You're working on **Risk Graph** — a security context graph that models how assets, identities, permissions, and vulnerabilities connect. Your job is to help security teams see the forest, not just the trees.

## 🚧 Current Status

This project is in **early development**. The graph data model, storage approach, and visualization strategy are being designed. Expect foundational architectural decisions to be made.

## 🧠 Think Like a Graph

When working on Risk Graph, shift from relational database thinking to graph thinking:

### ❌ Relational Mindset
"I have a table of servers and a table of vulnerabilities. Which servers have which vulnerabilities?"

### ✅ Graph Mindset
"There's a path from this internet-exposed server, through this identity, to this database. What's the risk along that path?"

## 🎯 Design Principles

### 1. Relationships Are First-Class Citizens
Don't just store edges between nodes—make edges rich with metadata about the relationship.

### 2. Traverse, Don't Join
Think in paths and traversals, not JOINs.

### 3. Risk is Contextual
A node's risk depends on its neighborhood in the graph.

## 🔍 Attack-Path Thinking

Security is about attack paths. When implementing features, always ask:

1. **Entry Point** — Where can an attacker get in?
2. **Lateral Movement** — What can they reach from there?
3. **Target** — What valuable resource are they after?
4. **Path Constraints** — What barriers exist?

## 📞 Contact

Questions about Risk Graph architecture? Email [hrudushibu.tech@gmail.com](mailto:hrudushibu.tech@gmail.com)

---

**Remember**: Security teams need to understand risk quickly. Make the graph intuitive, fast, and actionable.
