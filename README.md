# ClearOpsHK Static Website

Premium static landing page for ClearOpsHK, built with React, Vite, TypeScript, Tailwind CSS, lucide-react, and Framer Motion.

## File Structure

```text
.
├── public/
│   ├── brand/
│   │   ├── apple-touch-icon.png
│   │   ├── clearopshk-logo-cropped.png
│   │   ├── clearopshk-logo.jpg
│   │   ├── favicon-32.png
│   │   └── icon-512.png
│   ├── photos/
│   │   ├── other-side-corridor.jpg
│   │   ├── other-side-desk.jpg
│   │   ├── other-side-files.jpg
│   │   ├── other-side-shop.jpg
│   │   └── other-side-worktable.jpg
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
- Replace placeholder cinematic photos with real, consented business photos
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

This repo is currently configured for:

```text
https://okok147.github.io/ClearOpsHK/
```

The Vite base path is set in `vite.config.ts`:

```text
base: '/ClearOpsHK/',
```

If you register and connect the custom domain `clearopshk.com`, add a `public/CNAME` file:

```text
clearopshk.com
```

Then update `vite.config.ts` back to:

```ts
base: '/',
```

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
