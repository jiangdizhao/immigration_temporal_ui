# Sovereign Nexus · 律界智能

Chinese-first UI prototype for an Australian immigration, study-abroad, legal-intelligence, and lawyer-collaboration service.

This repository is intentionally UI-only. It contains no backend services, authentication, database, AI API, legal retrieval, billing, real appointments, or real document upload. Demo legal content and professional details are prototype data for design review.

## Run locally

```bash
npm install
npm run dev
```

Production build and type/lint check:

```bash
npm run build
npm run lint
```

Offline lawyer-review artifact:

```bash
npm run build:review
```

This creates `review/OPEN_ME_Sovereign_Nexus_UI.html` and `review/Sovereign_Nexus_UI_Review.zip`. The HTML bundles the JavaScript and CSS and uses hash navigation, so it can be opened by double-clicking from `file://` without Node, npm, a local server, or an internet connection.

## Route map

- `#/` — premium public home page
- `#/services` — immigration and study-abroad service scenarios, lawyer directory, booking prototype
- `#/intelligence` — searchable enacted/proposed legal-intelligence stream
- `#/intelligence/:id` — provenance-separated policy detail
- `#/workspace/ai` — AI matter workspace
- `#/workspace/lawyer` — human lawyer matter workspace using the same matter model

HashRouter is used so the prototype can be reviewed from static hosting without server-side route fallback.

## Design references

The immutable source material is in `reference/`. The implementation merges the visual grammar and interaction patterns from the supplied Sovereign Nexus templates into one application. See [docs/UI_DESIGN_SYSTEM.md](docs/UI_DESIGN_SYSTEM.md) for the final design-system notes.

## Prototype disclaimer

`界面原型 · 内容与数据仅供设计评审`

All local interactions are simulated in browser state. Selected files are displayed locally and are never uploaded.
