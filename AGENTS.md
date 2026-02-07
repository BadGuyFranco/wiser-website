# WISER Method Website

Next.js website with Sanity CMS for wisermethod.com.

## Before Editing Content

1. **Read `.env.local`** to get `SANITY_API_TOKEN`
2. **Query current state** before making changes
3. **See `SANITY-CONTENT.md`** for available section types and field names

## Content Management

| Page | Location | Edit Method |
|------|----------|-------------|
| Homepage (`/`) | Code | Edit `src/app/page.tsx` (complex layout, stays in code) |
| All other pages | Sanity | Query API, then mutate |
| Blog posts | Sanity | Query API, then mutate |

## Sanity API

```
Project ID: myjk66jg
Dataset: production
Token: Read from .env.local (SANITY_API_TOKEN)
```

**Page IDs:** `page-method`, `page-waitlist`, `page-assessment`, `page-playbook`

**Query current content:**
```bash
curl -s "https://myjk66jg.api.sanity.io/v2024-01-01/data/query/production?query=*[_type==\"page\" && slug.current==\"method\"][0]{...}"
```

**Update content:**
```bash
curl -X POST "https://myjk66jg.api.sanity.io/v2024-01-01/data/mutate/production" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"mutations": [{"patch": {"id": "page-method", "set": {"title": "New Title"}}}]}'
```

## Design

- **Theme:** Dark theme with WISER brand colors
- **Colors:** Defined as CSS variables in `src/app/globals.css`
- **Font:** Inter (loaded via Next.js)
- **Visual reference:** `/WISER Business/Marketing/Brand/` contains design comps

## Tech Stack

- **Framework:** Next.js 16 with App Router
- **CMS:** Sanity (visual editor at /studio)
- **Styling:** Tailwind CSS (dark theme, brand colors in globals.css)
- **Hosting:** Vercel (auto-deploys on push to main)

## Structure

```
src/
├── app/
│   ├── page.tsx              # Homepage (code-managed)
│   ├── [slug]/page.tsx       # Dynamic route for Sanity pages
│   ├── blog/                 # Blog listing
│   └── studio/               # Sanity visual editor
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── SectionRenderer.tsx   # Renders all Sanity section types
└── sanity/
    ├── client.ts             # Sanity client config
    ├── schemas/page.ts       # Page schema with section types
    └── portable-text.tsx     # Rich text renderer
```

## Development

```bash
npm install
npm run dev
```

- Site: http://localhost:3000
- Visual editor: http://localhost:3000/studio

## Deployment

Push to main branch triggers automatic Vercel deployment.

## Links

- **Live site:** https://wiser-website-coral.vercel.app
- **Sanity Studio:** https://wiser-website-coral.vercel.app/studio
- **GitHub:** https://github.com/BadGuyFranco/wiser-website
