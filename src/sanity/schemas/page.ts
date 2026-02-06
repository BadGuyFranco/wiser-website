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
        {
          type: "object",
          name: "heroSection",
          title: "Hero Section",
          fields: [
            { name: "headline", type: "string", title: "Headline" },
            { name: "subheadline", type: "text", title: "Subheadline", rows: 2 },
            { name: "ctaText", type: "string", title: "CTA Button Text" },
            { name: "ctaLink", type: "string", title: "CTA Button Link" },
            { name: "secondaryCtaText", type: "string", title: "Secondary CTA Text" },
            { name: "secondaryCtaLink", type: "string", title: "Secondary CTA Link" },
          ],
          preview: {
            select: { title: "headline" },
            prepare({ title }) {
              return { title: title || "Hero Section", subtitle: "Hero" };
            },
          },
        },
        {
          type: "object",
          name: "textSection",
          title: "Text Section",
          fields: [
            { name: "heading", type: "string", title: "Heading" },
            {
              name: "content",
              type: "array",
              title: "Content",
              of: [{ type: "block" }],
            },
          ],
          preview: {
            select: { title: "heading" },
            prepare({ title }) {
              return { title: title || "Text Section", subtitle: "Text" };
            },
          },
        },
        {
          type: "object",
          name: "featureGrid",
          title: "Feature Grid",
          fields: [
            { name: "heading", type: "string", title: "Section Heading" },
            {
              name: "features",
              type: "array",
              title: "Features",
              of: [
                {
                  type: "object",
                  fields: [
                    { name: "title", type: "string", title: "Feature Title" },
                    { name: "description", type: "text", title: "Description", rows: 2 },
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
        {
          type: "object",
          name: "ctaSection",
          title: "Call to Action Section",
          fields: [
            { name: "heading", type: "string", title: "Heading" },
            { name: "description", type: "text", title: "Description", rows: 2 },
            { name: "ctaText", type: "string", title: "Button Text" },
            { name: "ctaLink", type: "string", title: "Button Link" },
          ],
          preview: {
            select: { title: "heading" },
            prepare({ title }) {
              return { title: title || "CTA Section", subtitle: "Call to Action" };
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
