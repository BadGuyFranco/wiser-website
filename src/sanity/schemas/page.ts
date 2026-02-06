import { defineField, defineType } from "sanity";

export default defineType({
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
      description: "URL path for this page (e.g., 'method' for /method)",
    }),
    defineField({
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      rows: 2,
      description: "Description for search engines",
    }),
    defineField({
      name: "sections",
      title: "Page Sections",
      type: "array",
      of: [
        // Hero Section
        {
          type: "object",
          name: "heroSection",
          title: "Hero Section",
          fields: [
            { name: "headline", type: "string", title: "Headline" },
            { name: "subheadline", type: "text", title: "Subheadline", rows: 2 },
            { name: "accentText", type: "string", title: "Accent Text (colored)" },
            { name: "ctaText", type: "string", title: "CTA Button Text" },
            { name: "ctaLink", type: "string", title: "CTA Button Link" },
            { name: "secondaryCtaText", type: "string", title: "Secondary CTA Text" },
            { name: "secondaryCtaLink", type: "string", title: "Secondary CTA Link" },
            { name: "showPattern", type: "boolean", title: "Show Background Pattern", initialValue: false },
          ],
          preview: {
            select: { title: "headline" },
            prepare({ title }) {
              return { title: title || "Hero Section", subtitle: "Hero" };
            },
          },
        },

        // Page Header (for content pages like Method)
        {
          type: "object",
          name: "pageHeader",
          title: "Page Header",
          fields: [
            { name: "title", type: "string", title: "Page Title" },
            { name: "subtitle", type: "text", title: "Subtitle", rows: 2 },
            { name: "externalLink", type: "url", title: "External Link (optional)" },
            { name: "externalLinkText", type: "string", title: "External Link Text" },
            {
              name: "quickLinks",
              type: "array",
              title: "Quick Navigation Links",
              of: [
                {
                  type: "object",
                  fields: [
                    { name: "label", type: "string", title: "Label" },
                    { name: "anchor", type: "string", title: "Anchor ID (e.g., witness)" },
                  ],
                },
              ],
            },
          ],
          preview: {
            select: { title: "title" },
            prepare({ title }) {
              return { title: title || "Page Header", subtitle: "Header" };
            },
          },
        },

        // Rich Text Section
        {
          type: "object",
          name: "richTextSection",
          title: "Rich Text Section",
          fields: [
            { name: "heading", type: "string", title: "Section Heading" },
            { name: "anchorId", type: "string", title: "Anchor ID (for linking)" },
            {
              name: "content",
              type: "array",
              title: "Content",
              of: [
                {
                  type: "block",
                  styles: [
                    { title: "Normal", value: "normal" },
                    { title: "H2", value: "h2" },
                    { title: "H3", value: "h3" },
                    { title: "H4", value: "h4" },
                    { title: "Quote", value: "blockquote" },
                  ],
                  marks: {
                    decorators: [
                      { title: "Bold", value: "strong" },
                      { title: "Italic", value: "em" },
                      { title: "Code", value: "code" },
                    ],
                    annotations: [
                      {
                        name: "link",
                        type: "object",
                        title: "Link",
                        fields: [
                          { name: "href", type: "url", title: "URL" },
                        ],
                      },
                    ],
                  },
                  lists: [
                    { title: "Bullet", value: "bullet" },
                    { title: "Numbered", value: "number" },
                  ],
                },
                { type: "image", options: { hotspot: true } },
              ],
            },
          ],
          preview: {
            select: { title: "heading" },
            prepare({ title }) {
              return { title: title || "Rich Text Section", subtitle: "Rich Text" };
            },
          },
        },

        // Canon Card (for WISER Method canons)
        {
          type: "object",
          name: "canonCard",
          title: "Canon Card (W-I-S-E-R)",
          fields: [
            { name: "letter", type: "string", title: "Letter (W, I, S, E, or R)" },
            { name: "name", type: "string", title: "Canon Name" },
            { name: "tagline", type: "string", title: "Tagline (italic)" },
            { name: "anchorId", type: "string", title: "Anchor ID" },
            {
              name: "description",
              type: "array",
              title: "Description",
              of: [{ type: "block" }],
            },
            {
              name: "principles",
              type: "array",
              title: "AI First Principles",
              of: [
                {
                  type: "object",
                  fields: [
                    { name: "name", type: "string", title: "Principle Name" },
                    { name: "description", type: "text", title: "Description", rows: 2 },
                  ],
                },
              ],
            },
          ],
          preview: {
            select: { letter: "letter", name: "name" },
            prepare({ letter, name }) {
              return { title: `${letter} - ${name}`, subtitle: "Canon Card" };
            },
          },
        },

        // Feature Grid
        {
          type: "object",
          name: "featureGrid",
          title: "Feature Grid",
          fields: [
            { name: "heading", type: "string", title: "Section Heading" },
            { name: "subheading", type: "text", title: "Subheading", rows: 2 },
            { name: "columns", type: "number", title: "Columns (2, 3, or 4)", initialValue: 3 },
            {
              name: "features",
              type: "array",
              title: "Features",
              of: [
                {
                  type: "object",
                  fields: [
                    { name: "title", type: "string", title: "Feature Title" },
                    { name: "description", type: "text", title: "Description", rows: 3 },
                    { name: "icon", type: "string", title: "Icon Name (optional)" },
                  ],
                },
              ],
            },
          ],
          preview: {
            select: { title: "heading" },
            prepare({ title }) {
              return { title: title || "Feature Grid", subtitle: "Features" };
            },
          },
        },

        // Numbered List Section (for steps, expectations, etc.)
        {
          type: "object",
          name: "numberedList",
          title: "Numbered List Section",
          fields: [
            { name: "heading", type: "string", title: "Section Heading" },
            { name: "subheading", type: "text", title: "Subheading", rows: 2 },
            {
              name: "items",
              type: "array",
              title: "List Items",
              of: [
                {
                  type: "object",
                  fields: [
                    { name: "title", type: "string", title: "Item Title" },
                    { name: "description", type: "text", title: "Description", rows: 2 },
                  ],
                },
              ],
            },
          ],
          preview: {
            select: { title: "heading" },
            prepare({ title }) {
              return { title: title || "Numbered List", subtitle: "Numbered List" };
            },
          },
        },

        // Two Column Content
        {
          type: "object",
          name: "twoColumnContent",
          title: "Two Column Content",
          fields: [
            { name: "heading", type: "string", title: "Section Heading" },
            {
              name: "leftColumn",
              type: "object",
              title: "Left Column",
              fields: [
                { name: "title", type: "string", title: "Title" },
                { name: "content", type: "array", of: [{ type: "block" }], title: "Content" },
                { name: "note", type: "text", title: "Note (smaller text)", rows: 2 },
              ],
            },
            {
              name: "rightColumn",
              type: "object",
              title: "Right Column",
              fields: [
                { name: "title", type: "string", title: "Title" },
                { name: "content", type: "array", of: [{ type: "block" }], title: "Content" },
                { name: "note", type: "text", title: "Note (smaller text)", rows: 2 },
              ],
            },
          ],
          preview: {
            select: { title: "heading" },
            prepare({ title }) {
              return { title: title || "Two Column Content", subtitle: "Two Columns" };
            },
          },
        },

        // Table of Contents (for book page)
        {
          type: "object",
          name: "tableOfContents",
          title: "Table of Contents",
          fields: [
            { name: "heading", type: "string", title: "Section Heading" },
            {
              name: "parts",
              type: "array",
              title: "Parts/Sections",
              of: [
                {
                  type: "object",
                  fields: [
                    { name: "partTitle", type: "string", title: "Part Title" },
                    {
                      name: "chapters",
                      type: "array",
                      title: "Chapters",
                      of: [{ type: "string" }],
                    },
                  ],
                },
              ],
            },
          ],
          preview: {
            prepare() {
              return { title: "Table of Contents", subtitle: "TOC" };
            },
          },
        },

        // Author Bio Section
        {
          type: "object",
          name: "authorBios",
          title: "Author Bios",
          fields: [
            { name: "heading", type: "string", title: "Section Heading" },
            {
              name: "authors",
              type: "array",
              title: "Authors",
              of: [
                {
                  type: "object",
                  fields: [
                    { name: "name", type: "string", title: "Name" },
                    { name: "bio", type: "text", title: "Bio", rows: 3 },
                    { name: "image", type: "image", title: "Photo", options: { hotspot: true } },
                  ],
                },
              ],
            },
            { name: "additionalText", type: "text", title: "Additional Text", rows: 3 },
          ],
          preview: {
            prepare() {
              return { title: "Author Bios", subtitle: "Authors" };
            },
          },
        },

        // Resource Links Grid
        {
          type: "object",
          name: "resourceLinks",
          title: "Resource Links Grid",
          fields: [
            { name: "heading", type: "string", title: "Section Heading" },
            { name: "subheading", type: "text", title: "Subheading", rows: 2 },
            {
              name: "resources",
              type: "array",
              title: "Resources",
              of: [
                {
                  type: "object",
                  fields: [
                    { name: "title", type: "string", title: "Resource Title" },
                    { name: "description", type: "text", title: "Description", rows: 2 },
                    { name: "linkText", type: "string", title: "Link Text" },
                    { name: "linkUrl", type: "string", title: "Link URL" },
                    { name: "isExternal", type: "boolean", title: "External Link", initialValue: false },
                  ],
                },
              ],
            },
          ],
          preview: {
            select: { title: "heading" },
            prepare({ title }) {
              return { title: title || "Resource Links", subtitle: "Resources" };
            },
          },
        },

        // Assessment Dimensions
        {
          type: "object",
          name: "assessmentDimensions",
          title: "Assessment Dimensions",
          fields: [
            { name: "heading", type: "string", title: "Section Heading" },
            {
              name: "dimensions",
              type: "array",
              title: "Dimensions",
              of: [
                {
                  type: "object",
                  fields: [
                    { name: "name", type: "string", title: "Dimension Name" },
                    { name: "description", type: "text", title: "Description", rows: 2 },
                  ],
                },
              ],
            },
          ],
          preview: {
            select: { title: "heading" },
            prepare({ title }) {
              return { title: title || "Assessment Dimensions", subtitle: "Dimensions" };
            },
          },
        },

        // Status Cards (for assessment outcomes)
        {
          type: "object",
          name: "statusCards",
          title: "Status Cards",
          fields: [
            { name: "heading", type: "string", title: "Section Heading" },
            {
              name: "cards",
              type: "array",
              title: "Status Cards",
              of: [
                {
                  type: "object",
                  fields: [
                    { name: "title", type: "string", title: "Title" },
                    { name: "description", type: "text", title: "Description", rows: 2 },
                    { 
                      name: "status", 
                      type: "string", 
                      title: "Status Type",
                      options: {
                        list: [
                          { title: "Success (Green)", value: "success" },
                          { title: "Warning (Yellow)", value: "warning" },
                          { title: "Neutral (Gray)", value: "neutral" },
                        ],
                      },
                    },
                  ],
                },
              ],
            },
          ],
          preview: {
            select: { title: "heading" },
            prepare({ title }) {
              return { title: title || "Status Cards", subtitle: "Status Cards" };
            },
          },
        },

        // CTA Section
        {
          type: "object",
          name: "ctaSection",
          title: "Call to Action Section",
          fields: [
            { name: "heading", type: "string", title: "Heading" },
            { name: "description", type: "text", title: "Description", rows: 3 },
            { name: "ctaText", type: "string", title: "Button Text" },
            { name: "ctaLink", type: "string", title: "Button Link" },
            { name: "isHighlighted", type: "boolean", title: "Highlighted (accent border)", initialValue: false },
          ],
          preview: {
            select: { title: "heading" },
            prepare({ title }) {
              return { title: title || "CTA Section", subtitle: "Call to Action" };
            },
          },
        },

        // CTA Grid (multiple CTAs)
        {
          type: "object",
          name: "ctaGrid",
          title: "CTA Grid",
          fields: [
            { name: "heading", type: "string", title: "Section Heading" },
            {
              name: "ctas",
              type: "array",
              title: "CTA Cards",
              of: [
                {
                  type: "object",
                  fields: [
                    { name: "title", type: "string", title: "Title" },
                    { name: "description", type: "text", title: "Description", rows: 2 },
                    { name: "buttonText", type: "string", title: "Button Text" },
                    { name: "buttonLink", type: "string", title: "Button Link" },
                    { name: "isPrimary", type: "boolean", title: "Primary Style (accent)", initialValue: false },
                  ],
                },
              ],
            },
          ],
          preview: {
            select: { title: "heading" },
            prepare({ title }) {
              return { title: title || "CTA Grid", subtitle: "CTA Grid" };
            },
          },
        },

        // Book Hero (special hero for playbook page)
        {
          type: "object",
          name: "bookHero",
          title: "Book Hero Section",
          fields: [
            { name: "badge", type: "string", title: "Badge Text (e.g., 'The Book')" },
            { name: "title", type: "string", title: "Book Title" },
            { name: "subtitle", type: "string", title: "Subtitle" },
            { name: "authors", type: "string", title: "Authors" },
            { name: "coverImage", type: "image", title: "Book Cover", options: { hotspot: true } },
            { name: "ctaText", type: "string", title: "Primary CTA Text" },
            { name: "ctaLink", type: "string", title: "Primary CTA Link" },
            { name: "secondaryCtaText", type: "string", title: "Secondary CTA Text" },
            { name: "secondaryCtaLink", type: "string", title: "Secondary CTA Link" },
          ],
          preview: {
            select: { title: "title" },
            prepare({ title }) {
              return { title: title || "Book Hero", subtitle: "Book Hero" };
            },
          },
        },

        // Purchase Links
        {
          type: "object",
          name: "purchaseLinks",
          title: "Purchase Links Section",
          fields: [
            { name: "heading", type: "string", title: "Heading" },
            { name: "description", type: "text", title: "Description", rows: 2 },
            {
              name: "links",
              type: "array",
              title: "Purchase Links",
              of: [
                {
                  type: "object",
                  fields: [
                    { name: "retailer", type: "string", title: "Retailer Name" },
                    { name: "url", type: "url", title: "URL" },
                    { name: "isPrimary", type: "boolean", title: "Primary Style", initialValue: false },
                  ],
                },
              ],
            },
            { name: "isbn", type: "string", title: "ISBN" },
          ],
          preview: {
            select: { title: "heading" },
            prepare({ title }) {
              return { title: title || "Purchase Links", subtitle: "Purchase" };
            },
          },
        },

        // Simple Text Block (for publisher info, etc.)
        {
          type: "object",
          name: "simpleText",
          title: "Simple Text Block",
          fields: [
            { name: "text", type: "text", title: "Text", rows: 3 },
            { name: "alignment", type: "string", title: "Alignment", options: { list: ["left", "center", "right"] }, initialValue: "center" },
            { name: "size", type: "string", title: "Size", options: { list: ["small", "normal", "large"] }, initialValue: "small" },
            {
              name: "links",
              type: "array",
              title: "Links",
              of: [
                {
                  type: "object",
                  fields: [
                    { name: "text", type: "string", title: "Link Text" },
                    { name: "url", type: "url", title: "URL" },
                  ],
                },
              ],
            },
          ],
          preview: {
            select: { title: "text" },
            prepare({ title }) {
              return { title: title?.substring(0, 50) || "Simple Text", subtitle: "Text Block" };
            },
          },
        },

        // Form Section (for waitlist email capture)
        {
          type: "object",
          name: "formSection",
          title: "Form Section",
          fields: [
            { name: "heading", type: "string", title: "Heading" },
            { name: "description", type: "text", title: "Description", rows: 2 },
            { name: "formType", type: "string", title: "Form Type", options: { list: ["email-signup", "contact"] }, initialValue: "email-signup" },
            { name: "buttonText", type: "string", title: "Submit Button Text" },
            { name: "disclaimer", type: "string", title: "Disclaimer Text" },
          ],
          preview: {
            select: { title: "heading" },
            prepare({ title }) {
              return { title: title || "Form Section", subtitle: "Form" };
            },
          },
        },

        // Info Box (for credibility statements, quotes, etc.)
        {
          type: "object",
          name: "infoBox",
          title: "Info Box",
          fields: [
            { name: "content", type: "text", title: "Content", rows: 4 },
            { name: "style", type: "string", title: "Style", options: { list: ["default", "highlighted", "quote"] }, initialValue: "default" },
          ],
          preview: {
            select: { title: "content" },
            prepare({ title }) {
              return { title: title?.substring(0, 50) || "Info Box", subtitle: "Info Box" };
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      slug: "slug.current",
    },
    prepare({ title, slug }) {
      return {
        title,
        subtitle: slug ? `/${slug}` : "No slug",
      };
    },
  },
});
