# WISER Method Website

Next.js website with Sanity CMS visual editor for wisermethod.com.

## Status

**Infrastructure ready, awaiting setup.**

Setup steps:
1. Create GitHub repository
2. Create Sanity project at sanity.io/manage
3. Configure environment variables
4. Deploy to Vercel

## Tech Stack

- **Framework:** Next.js 16 with App Router
- **CMS:** Sanity (visual editor at /studio)
- **Styling:** Tailwind CSS
- **Hosting:** Vercel

## Structure

```
src/
├── app/
│   ├── page.tsx          # Homepage
│   ├── method/           # Method page
│   ├── waitlist/         # Waitlist page
│   ├── assessment/       # Assessment page
│   ├── blog/             # Blog (fetches from Sanity)
│   └── studio/           # Sanity visual editor
├── components/           # Header, Footer
└── sanity/
    ├── client.ts         # Sanity client
    ├── schemas/          # Content type definitions
    ├── queries.ts        # GROQ queries
    └── portable-text.tsx # Rich text renderer
```

## Content Types (in Sanity)

**Blog Posts**
- Title, slug, author
- Featured image
- Rich text body
- Tags, publish date

**Pages**
- Modular sections (hero, text, features, CTA)
- SEO metadata

**Site Settings**
- Site name, description
- Logo, navigation, social links

## Development

```bash
npm install
npm run dev
```

- Site: http://localhost:3000
- Visual editor: http://localhost:3000/studio

## Environment Variables

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

## Editing Content

**Option 1: Visual Editor (recommended for content)**
Go to /studio for the Sanity visual editor.

**Option 2: Cursor (for code/structure changes)**
Edit source files, commit, push to deploy.

## Deployment

Push to main branch triggers automatic Vercel deployment.
Content changes in Sanity reflect within 60 seconds (cache).
