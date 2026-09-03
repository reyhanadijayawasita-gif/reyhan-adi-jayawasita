# Reyhan Adi Jayawasita — Official Website

Personal and professional website for Reyhan Adi Jayawasita, built with Next.js (App Router), TypeScript and Tailwind CSS.

All factual content (education, experience, achievements, skills) lives in a single source of truth at `lib/data.ts`, sourced directly from Reyhan's CV.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Environment

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to the site's canonical production URL once a domain is chosen. This value drives canonical URLs, Open Graph tags, the sitemap and structured data.

## Deploying

This project is ready to deploy to [Vercel](https://vercel.com/new):

1. Import this repository into Vercel.
2. Set the `NEXT_PUBLIC_SITE_URL` environment variable to your production domain.
3. Deploy.

## Updating content

- **Education, experience, achievements, skills, contact links** — edit `lib/data.ts`. Every page reads from this file, so a single edit updates every page that references it.
- **New pages** — add a folder under `app/` following the existing pages as a template (`export const metadata` for SEO, a `PageHero`, and content).

## SEO & structured data

- `app/layout.tsx` sets sitewide metadata, Open Graph/Twitter tags, and JSON-LD (`Person` + `WebSite`) structured data.
- `app/sitemap.ts` and `app/robots.ts` generate `/sitemap.xml` and `/robots.txt` automatically from the site's route list.
- `app/opengraph-image.tsx` generates the social preview image at build time — no static asset to keep in sync.
