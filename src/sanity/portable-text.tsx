"use client";

import { PortableText as PortableTextComponent } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "./image";

const components = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <figure className="my-8">
          <Image
            src={urlFor(value).width(800).url()}
            alt={value.alt || ""}
            width={800}
            height={450}
            className="rounded-lg border border-border"
          />
          {value.caption && (
            <figcaption className="text-center text-sm text-foreground-subtle mt-2">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
    code: ({ value }: any) => (
      <pre className="bg-background-elevated border border-border text-foreground p-4 rounded-lg overflow-x-auto my-6">
        <code>{value.code}</code>
      </pre>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <a href={value.href} rel={rel} className="text-accent hover:text-accent-light underline underline-offset-2">
          {children}
        </a>
      );
    },
    code: ({ children }: any) => (
      <code className="bg-background-elevated border border-border px-1.5 py-0.5 rounded text-sm text-foreground">
        {children}
      </code>
    ),
    strong: ({ children }: any) => (
      <strong className="font-semibold text-foreground">{children}</strong>
    ),
    em: ({ children }: any) => (
      <em className="italic">{children}</em>
    ),
  },
  block: {
    h2: ({ children }: any) => (
      <h2 className="text-2xl font-semibold mt-10 mb-4 text-foreground">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl font-semibold mt-8 mb-3 text-foreground">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-lg font-semibold mt-6 mb-2 text-foreground">{children}</h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-accent pl-6 my-6 italic text-foreground-muted">
        {children}
      </blockquote>
    ),
    normal: ({ children }: any) => (
      <p className="mb-4 leading-relaxed text-foreground-muted">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc pl-6 mb-6 space-y-2 text-foreground-muted">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal pl-6 mb-6 space-y-2 text-foreground-muted">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li className="text-foreground-muted">{children}</li>
    ),
    number: ({ children }: any) => (
      <li className="text-foreground-muted">{children}</li>
    ),
  },
};

export function PortableText({ value }: { value: any }) {
  return <PortableTextComponent value={value} components={components} />;
}
