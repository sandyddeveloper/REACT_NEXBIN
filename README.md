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

## CI / CD and Testing

- **Continuous Integration**: A GitHub Actions workflow runs on PRs and pushes to `main`/`master`. It lints, type-checks, runs tests, and builds the app. See `.github/workflows/ci.yml`.
- **Deploy to Vercel**: A template workflow `.github/workflows/deploy-vercel.yml` is included — add `VERCEL_TOKEN`, `VERCEL_ORG_ID`, and `VERCEL_PROJECT_ID` to the repository secrets to enable automatic deploys on push to `main`.
- **Container Publishing**: A workflow publishes a Docker image to GitHub Container Registry on push to `main` (`.github/workflows/publish-ghcr.yml`).
- **Run tests locally**: Install deps then run `npm run test` or `npm run test:ci` for coverage.
- **Typecheck locally**: `npm run typecheck`.
- **Format**: `npm run format` uses Prettier to format the codebase.

If you'd like, I can also wire up additional checks (Cypress E2E, Playwright, security scanning), or create a deployment workflow for another provider.
