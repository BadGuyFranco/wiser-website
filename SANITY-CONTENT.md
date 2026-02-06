# Sanity Content Structure

This document describes the content structure managed through Sanity CMS for the WISER Method website.

## Overview

The website uses a hybrid content management approach:

- **Homepage (`/`)** - Managed in code (`src/app/page.tsx`)
- **All other pages** - Managed through Sanity CMS
- **Blog posts** - Managed through Sanity CMS

## Sanity Project

- **Project ID:** `myjk66jg`
- **Dataset:** `production`
- **Studio URL:** `/studio` (when running locally or deployed)

## Content Types

### Pages (`page`)

Dynamic pages that render at `/{slug}`. Each page consists of ordered sections.

**Fields:**
- `title` (string, required) - Page title
- `slug` (slug, required) - URL path
- `seoDescription` (text) - SEO meta description
- `sections` (array) - Ordered list of section blocks

### Blog Posts (`post`)

Blog articles that render at `/blog/{slug}`.

**Fields:**
- `title` (string, required)
- `slug` (slug, required)
- `author` (string)
- `publishedAt` (datetime)
- `excerpt` (text)
- `mainImage` (image)
- `body` (Portable Text)

## Page Section Types

Pages are composed of reusable section types. Each section type has specific fields and rendering behavior.

### Hero Sections

#### `heroSection`
Standard hero with headline and CTAs.
- `headline` - Main heading
- `subheadline` - Supporting text
- `accentText` - Colored accent text
- `ctaText` / `ctaLink` - Primary button
- `secondaryCtaText` / `secondaryCtaLink` - Secondary button
- `showPattern` - Toggle dot-matrix background

#### `bookHero`
Special hero for book landing pages.
- `badge` - Small label (e.g., "The Book")
- `title` - Book title
- `subtitle` - Subtitle
- `authors` - Author names
- `coverImage` - Book cover image
- Primary and secondary CTAs

### Content Sections

#### `pageHeader`
Header with quick navigation links.
- `title` - Page title
- `subtitle` - Subtitle with optional external link
- `externalLink` / `externalLinkText` - Linked portion of subtitle
- `quickLinks` - Array of `{label, anchor}` for jump navigation

#### `richTextSection`
Flexible rich text content.
- `heading` - Section heading
- `anchorId` - For in-page navigation
- `content` - Portable Text content

#### `canonCard`
WISER method canon display (W, I, S, E, R).
- `letter` - Single letter (W, I, S, E, or R)
- `name` - Canon name (e.g., "Witness")
- `tagline` - Italic tagline
- `anchorId` - For navigation
- `description` - Portable Text description
- `principles` - Array of `{name, description}` for AI First Principles

### Grid Sections

#### `featureGrid`
Grid of feature cards.
- `heading` / `subheading`
- `columns` - 2, 3, or 4 columns
- `features` - Array of `{title, description, icon}`

#### `numberedList`
Numbered items in a grid.
- `heading` / `subheading`
- `items` - Array of `{title, description}`

#### `resourceLinks`
Grid of resource cards with links.
- `heading` / `subheading`
- `resources` - Array of `{title, description, linkText, linkUrl, isExternal}`

### Two-Column Layouts

#### `twoColumnContent`
Side-by-side content blocks.
- `heading`
- `leftColumn` - `{title, content (Portable Text), note}`
- `rightColumn` - `{title, content (Portable Text), note}`

### Assessment/Status Sections

#### `assessmentDimensions`
Grid of assessment dimensions.
- `heading`
- `dimensions` - Array of `{name, description}`

#### `statusCards`
Cards with status indicators.
- `heading`
- `cards` - Array of `{title, description, status}` (status: success/warning/neutral)

### Call-to-Action Sections

#### `ctaSection`
Single centered CTA.
- `heading`
- `description`
- `ctaText` / `ctaLink`
- `isHighlighted` - Accent border toggle

#### `ctaGrid`
Multiple CTA cards in a grid.
- `heading`
- `ctas` - Array of `{title, description, buttonText, buttonLink, isPrimary}`

### Book-Specific Sections

#### `tableOfContents`
Book table of contents.
- `heading`
- `parts` - Array of `{partTitle, chapters[]}` (chapters is string array)

#### `authorBios`
Author information section.
- `heading`
- `authors` - Array of `{name, bio, image}`
- `additionalText` - Closing paragraph

#### `purchaseLinks`
Book purchase options.
- `heading` / `description`
- `links` - Array of `{retailer, url, isPrimary}`
- `isbn`

### Utility Sections

#### `simpleText`
Basic text block.
- `text`
- `alignment` - left/center/right
- `size` - small/normal/large
- `links` - Array of `{text, url}`

#### `formSection`
Email signup or contact form.
- `heading` / `description`
- `formType` - email-signup/contact
- `buttonText`
- `disclaimer`

#### `infoBox`
Styled text box.
- `content`
- `style` - default/highlighted/quote

## Current Pages

| Page | Slug | Sanity ID | Sections |
|------|------|-----------|----------|
| The WISER Method | `/method` | `page-method` | 17 |
| Join the Waitlist | `/waitlist` | `page-waitlist` | 7 |
| WISER Fit Assessment | `/assessment` | `page-assessment` | 5 |
| Master Playbook (Book) | `/playbook` | `page-playbook` | 8 |

## Editing Content

### Via Sanity Studio

1. Navigate to `/studio` on the website
2. Select "Pages" or "Posts" from the sidebar
3. Edit content using the visual editor
4. Changes publish automatically to production

### Via API (for AI Assistant)

The AI assistant has write access to Sanity via API token. To update content:

1. Query current content state
2. Construct mutation with updated fields
3. POST to mutate endpoint

Example query for page content:
```
*[_type == "page" && slug.current == "method"][0]{..., sections[]{...}}
```

## Adding New Pages

1. Create a new Page document in Sanity Studio
2. Set title and slug
3. Add sections in desired order
4. The page will automatically be available at `/{slug}`

## Notes

- Homepage remains code-managed due to complexity
- Blog posts use standard Portable Text rendering
- All pages use the same section renderer (`SectionRenderer.tsx`)
- CSS uses dark theme variables defined in `globals.css`
