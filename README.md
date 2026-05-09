# ClearOpsHK Static Website

Premium static landing page for ClearOpsHK, built with React, Vite, TypeScript, Tailwind CSS, lucide-react, and Framer Motion.

## File Structure

```text
.
├── public/
│   ├── brand/
│   │   └── clearopshk-mark.svg
│   ├── favicon.svg
│   └── og-clearopshk.svg
├── src/
│   ├── content/
│   │   └── site.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
└── package.json
```

## Edit Content

Most website copy, pricing placeholders, email, and social links live in:

```text
src/content/site.ts
```

Look for `TODO` comments before launch:

- Threads URL
- Pricing placeholders
- GitHub Pages base path in `vite.config.ts`

## Install

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

Then open the local URL shown by Vite, usually:

```text
http://localhost:5173
```

## Build

```bash
npm run build
```

The static build output will be in:

```text
dist/
```

## Preview Production Build

```bash
npm run preview
```

## Deploy to Netlify

1. Push the project to GitHub.
2. In Netlify, create a new site from the repository.
3. Use these build settings:

```text
Build command: npm run build
Publish directory: dist
```

No environment variables, backend, database, or paid API are required.

## Deploy to GitHub Pages

This repo is configured for:

```text
https://clearopshk.com/
```

The GitHub Pages custom domain is stored in:

```text
public/CNAME
```

The Vite base path is set in `vite.config.ts`:

```ts
base: '/',
```

If you remove the custom domain and return to the project URL `https://okok147.github.io/ClearOpsHK/`, update `base` to `'/ClearOpsHK/'`.

Build the site:

```bash
npm run build
```

Deployment is handled by:

```text
.github/workflows/deploy.yml
```

For a user/organization root site like `https://USERNAME.github.io/`, keep:

```ts
base: '/',
```
