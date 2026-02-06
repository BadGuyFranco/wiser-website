import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { sanityFetch, client } from "@/sanity/client";
import { postBySlugQuery, postSlugsQuery } from "@/sanity/queries";
import { urlFor } from "@/sanity/image";
import { PortableText } from "@/sanity/portable-text";

interface Props {
  params: Promise<{ slug: string }>;
}

// Revalidate every 60 seconds
export const revalidate = 60;

export async function generateStaticParams() {
  if (!client) {
    return [];
  }
  const slugs = await sanityFetch<string[]>(postSlugsQuery);
  return (slugs || []).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  
  const post = await sanityFetch<any>(postBySlugQuery, { slug });

  if (!post) {
    return {
      title: "Post Not Found | WISER Method",
    };
  }

  return {
    title: `${post.title} | WISER Method`,
    description: post.excerpt || "",
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  
  const post = await sanityFetch<any>(postBySlugQuery, { slug });

  if (!post) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <article className="container-narrow py-20">
      <Link
        href="/blog"
        className="text-secondary hover:text-foreground transition-colors mb-8 inline-block"
      >
        &larr; Back to Blog
      </Link>

      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-secondary">
          {formatDate(post.publishedAt)}
          {post.author && ` · ${post.author}`}
        </p>
        {post.tags && post.tags.length > 0 && (
          <div className="flex gap-2 mt-4">
            {post.tags.map((tag: string) => (
              <span
                key={tag}
                className="bg-gray-100 text-secondary text-sm px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      {post.mainImage && (
        <Image
          src={urlFor(post.mainImage).width(800).height(450).url()}
          alt={post.title}
          width={800}
          height={450}
          className="rounded-lg mb-12 object-cover"
          priority
        />
      )}

      <div className="prose max-w-none">
        <PortableText value={post.body} />
      </div>
    </article>
  );
}
