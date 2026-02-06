import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { sanityFetch } from "@/sanity/client";
import { postsQuery } from "@/sanity/queries";
import { urlFor } from "@/sanity/image";

export const metadata: Metadata = {
  title: "Blog | WISER Method",
  description: "Insights and articles about AI collaboration",
};

// Revalidate every 60 seconds
export const revalidate = 60;

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  author?: string;
  publishedAt: string;
  excerpt?: string;
  tags?: string[];
  mainImage?: any;
}

export default async function BlogPage() {
  const posts = await sanityFetch<Post[]>(postsQuery) || [];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="container-narrow py-20">
      <h1 className="text-4xl font-bold mb-4">Blog</h1>
      <p className="text-secondary text-lg mb-12">
        Insights on AI collaboration and the WISER Method.
      </p>

      {posts.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-secondary">Blog posts coming soon.</p>
          <p className="text-sm text-secondary mt-2">
            Visit <code className="bg-gray-200 px-2 py-1 rounded">/studio</code>{" "}
            to add posts via the visual editor.
          </p>
        </div>
      ) : (
        <div className="space-y-10">
          {posts.map((post) => (
            <article
              key={post._id}
              className="border-b border-gray-100 pb-10"
            >
              {post.mainImage && (
                <Link href={`/blog/${post.slug.current}`}>
                  <Image
                    src={urlFor(post.mainImage).width(800).height(400).url()}
                    alt={post.title}
                    width={800}
                    height={400}
                    className="rounded-lg mb-6 object-cover"
                  />
                </Link>
              )}
              <Link href={`/blog/${post.slug.current}`}>
                <h2 className="text-2xl font-semibold hover:text-primary transition-colors">
                  {post.title}
                </h2>
              </Link>
              <p className="text-secondary text-sm mt-2">
                {formatDate(post.publishedAt)}
                {post.author && ` · ${post.author}`}
              </p>
              {post.tags && post.tags.length > 0 && (
                <div className="flex gap-2 mt-3">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-secondary text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              {post.excerpt && (
                <p className="mt-4 text-secondary">{post.excerpt}</p>
              )}
              <Link
                href={`/blog/${post.slug.current}`}
                className="inline-block mt-4 text-primary hover:underline"
              >
                Read more
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
