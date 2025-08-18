This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Deploying to GitHub Pages

This project is configured for static export and GitHub Pages.

### One-time setup

1. Push this repository to GitHub.
2. In your GitHub repo, go to Settings → Pages and set Source to "GitHub Actions".

### Automatic deploys

Every push to `main` builds and deploys using `.github/workflows/deploy.yml`.

### Local preview of the static export

```bash
npm ci
npm run build
npx serve out
```

Notes:

- For repos named `<user>.github.io` or `<org>.github.io`, the site is served at the root domain and no base path is used.
- For other repos (project pages), the site is served at `/<repoName>/`. The build workflow auto-sets the correct `basePath` and `assetPrefix`.

## Editing About page content (Markdown)

- Update your About content in `src/content/about.md`. It supports standard Markdown.
- For links/images in Markdown:
  - Prefer relative URLs like `images/photo.jpg` (not `/images/photo.jpg`) so they work under GitHub Pages subpaths.
