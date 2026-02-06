import { notFound } from "next/navigation";
import { sanityFetch } from "@/sanity/client";
import { SectionRenderer } from "@/components/SectionRenderer";

interface PageData {
  _id: string;
  title: string;
  slug: { current: string };
  seoDescription?: string;
  sections?: any[];
}

// Generate static params for known pages
export async function generateStaticParams() {
  const pages = await sanityFetch<{ slug: { current: string } }[]>(
    `*[_type == "page" && defined(slug.current)]{slug}`
  );
  
  if (!pages) return [];
  
  return pages.map((page) => ({
    slug: page.slug.current,
  }));
}

// Generate metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = await sanityFetch<PageData>(
    `*[_type == "page" && slug.current == $slug][0]{title, seoDescription}`,
    { slug }
  );

  if (!page) {
    return { title: "Page Not Found" };
  }

  return {
    title: `${page.title} | WISER Method`,
    description: page.seoDescription,
  };
}

export default async function DynamicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // List of routes that have dedicated page files (not Sanity-managed)
  const dedicatedRoutes = ["blog", "studio"];
  
  if (dedicatedRoutes.includes(slug)) {
    notFound();
  }

  const page = await sanityFetch<PageData>(
    `*[_type == "page" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      seoDescription,
      sections[]{
        _type,
        _key,
        ...,
        "coverImageUrl": coverImage.asset->url,
        authors[]{
          ...,
          "imageUrl": image.asset->url
        },
        leftColumn{
          ...,
          content[]{...}
        },
        rightColumn{
          ...,
          content[]{...}
        },
        content[]{...},
        description[]{...},
        parts[]{
          ...,
          chapters[]
        }
      }
    }`,
    { slug }
  );

  if (!page) {
    notFound();
  }

  return (
    <div>
      {page.sections?.map((section, index) => (
        <SectionRenderer key={section._key || index} section={section} />
      ))}
    </div>
  );
}
