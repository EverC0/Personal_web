# Ever Campos Portfolio

A modern portfolio site for Ever Campos, rebuilt from a static HTML/CSS/JS template into a Next.js and React application.

## Highlights

- Next.js App Router with TypeScript
- Custom responsive visual design
- Interactive project filtering
- Structured portfolio content in `lib/portfolio-data.ts`
- Featured EWAAC enterprise monorepo case-study card
- Existing project links, resume link, GitHub, LinkedIn, and email preserved

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Verification

```bash
npm run lint
npm run build
npm audit --omit=dev
```

## Render Static Site

This portfolio is configured for static export, so it can deploy on Render as a Static Site.

Use these Render settings:

```text
Build Command: npm install && npm run build
Publish Directory: out
```
