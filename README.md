# WISER Method Website

Next.js website with Sanity CMS for The WISER Method.

## Features

- Next.js 16 with App Router
- Sanity CMS for visual content editing
- Tailwind CSS for styling
- Blog system with rich text editing
- Page builder with modular sections
- Automatic deployments via Vercel

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the site.
Visit [http://localhost:3000/studio](http://localhost:3000/studio) to access the visual editor.

## Setup

### 1. Create Sanity Project

1. Go to [sanity.io/manage](https://sanity.io/manage)
2. Create a new project
3. Copy the Project ID

### 2. Configure Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Add your Sanity Project ID:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

### 3. Configure CORS in Sanity

In Sanity Manage, add these CORS origins:
- `http://localhost:3000` (for development)
- `https://your-domain.com` (for production)
- `https://your-project.vercel.app` (for Vercel preview)

### 4. Deploy to Vercel

1. Push to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

## Project Structure

```
wiser-website/
├── content/
│   └── blog/           # Legacy markdown posts (optional)
├── public/             # Static assets
├── src/
│   ├── app/
│   │   ├── page.tsx            # Homepage
│   │   ├── method/             # Method page
│   │   ├── waitlist/           # Waitlist page
│   │   ├── assessment/         # Assessment page
│   │   ├── blog/               # Blog listing and posts
│   │   └── studio/             # Sanity visual editor
│   ├── components/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── lib/
│   │   └── blog.ts             # Markdown blog (legacy)
│   └── sanity/
│       ├── client.ts           # Sanity client
│       ├── config.ts           # Sanity configuration
│       ├── image.ts            # Image URL builder
│       ├── queries.ts          # GROQ queries
│       ├── portable-text.tsx   # Rich text renderer
│       └── schemas/            # Content type definitions
├── sanity.config.ts    # Sanity Studio configuration
└── .env.example        # Environment variables template
```

## Content Types

### Blog Posts
- Title, slug, author
- Featured image
- Rich text body with images, code blocks
- Tags
- Publish date

### Pages
- Modular section-based pages
- Hero sections
- Text sections
- Feature grids
- Call-to-action sections

### Site Settings
- Site name and description
- Logo
- Navigation links
- Social links
- Footer text

## Editing Content

### Visual Editor (Recommended)
Go to `/studio` to use the Sanity visual editor. Changes sync automatically.

### Via Code (Optional)
For quick edits, you can also modify content in Cursor. The site fetches from Sanity on each request (with 60-second caching).

## Deployment Workflow

```
Edit in Sanity Studio (or Cursor)
        ↓
Content syncs automatically (60s cache)
        ↓
Push code changes to GitHub
        ↓
Vercel auto-deploys
```
