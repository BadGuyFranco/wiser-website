"use client";

import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@/sanity/portable-text";

interface SectionProps {
  section: any;
}

export function SectionRenderer({ section }: SectionProps) {
  switch (section._type) {
    case "heroSection":
      return <HeroSection {...section} />;
    case "pageHeader":
      return <PageHeader {...section} />;
    case "richTextSection":
      return <RichTextSection {...section} />;
    case "canonCard":
      return <CanonCard {...section} />;
    case "featureGrid":
      return <FeatureGrid {...section} />;
    case "numberedList":
      return <NumberedList {...section} />;
    case "twoColumnContent":
      return <TwoColumnContent {...section} />;
    case "tableOfContents":
      return <TableOfContents {...section} />;
    case "authorBios":
      return <AuthorBios {...section} />;
    case "resourceLinks":
      return <ResourceLinks {...section} />;
    case "assessmentDimensions":
      return <AssessmentDimensions {...section} />;
    case "statusCards":
      return <StatusCards {...section} />;
    case "ctaSection":
      return <CtaSection {...section} />;
    case "ctaGrid":
      return <CtaGrid {...section} />;
    case "bookHero":
      return <BookHero {...section} />;
    case "purchaseLinks":
      return <PurchaseLinks {...section} />;
    case "simpleText":
      return <SimpleText {...section} />;
    case "formSection":
      return <FormSection {...section} />;
    case "infoBox":
      return <InfoBox {...section} />;
    default:
      console.warn(`Unknown section type: ${section._type}`);
      return null;
  }
}

// Hero Section
function HeroSection({ headline, subheadline, accentText, ctaText, ctaLink, secondaryCtaText, secondaryCtaLink, showPattern }: any) {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {showPattern && (
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--accent) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
      )}
      <div className="container-wide text-center relative">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground tracking-tight">
          {headline}
        </h1>
        {accentText && (
          <p className="text-2xl md:text-3xl text-accent font-medium mb-10">
            {accentText}
          </p>
        )}
        {subheadline && !accentText && (
          <p className="text-xl text-foreground-muted mb-10 max-w-2xl mx-auto">
            {subheadline}
          </p>
        )}
        <div className="flex gap-4 justify-center flex-wrap">
          {ctaText && ctaLink && (
            <Link
              href={ctaLink}
              className="bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent-light transition-all text-lg"
            >
              {ctaText}
            </Link>
          )}
          {secondaryCtaText && secondaryCtaLink && (
            <Link
              href={secondaryCtaLink}
              className="border-2 border-foreground text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-foreground hover:text-background transition-all text-lg"
            >
              {secondaryCtaText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

// Page Header
function PageHeader({ title, subtitle, externalLink, externalLinkText, quickLinks }: any) {
  return (
    <header className="container-narrow py-16 md:py-24 mb-8">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">{title}</h1>
      {subtitle && (
        <p className="text-xl text-accent font-medium mb-8">
          {externalLink ? (
            <>
              {subtitle.split(externalLinkText)[0]}
              <a
                href={externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-accent-light"
              >
                {externalLinkText}
              </a>
              {subtitle.split(externalLinkText)[1]}
            </>
          ) : (
            subtitle
          )}
        </p>
      )}
      {quickLinks && quickLinks.length > 0 && (
        <div className="flex flex-wrap gap-4 text-sm">
          <span className="text-foreground-muted">Jump to:</span>
          {quickLinks.map((link: any, idx: number) => (
            <a key={idx} href={`#${link.anchor}`} className="text-accent hover:text-accent-light">
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

// Rich Text Section
function RichTextSection({ heading, anchorId, content }: any) {
  return (
    <section id={anchorId} className={anchorId ? "scroll-mt-24" : ""}>
      <div className="container-narrow mb-12">
        {heading && <h2 className="text-2xl font-semibold mb-6 text-foreground">{heading}</h2>}
        {content && <PortableText value={content} />}
      </div>
    </section>
  );
}

// Canon Card
function CanonCard({ letter, name, tagline, anchorId, description, principles }: any) {
  return (
    <div id={anchorId} className="scroll-mt-24 container-narrow mb-12">
      <div className="p-8 bg-background-elevated border border-border rounded-xl">
        <div className="text-4xl font-bold text-accent mb-4">{letter}</div>
        <h3 className="text-foreground text-xl font-semibold">{name}</h3>
        {tagline && (
          <p className="italic text-lg text-foreground-muted mb-4">{tagline}</p>
        )}
        {description && <PortableText value={description} />}
        {principles && principles.length > 0 && (
          <blockquote className="border-l-4 border-accent pl-6 mt-6">
            <strong className="text-foreground">AI First Principles Driving {name}:</strong>
            <ul className="mt-2 space-y-2">
              {principles.map((p: any, idx: number) => (
                <li key={idx} className="text-foreground-muted">
                  <strong className="text-foreground">{p.name}:</strong> {p.description}
                </li>
              ))}
            </ul>
          </blockquote>
        )}
      </div>
    </div>
  );
}

// Feature Grid
function FeatureGrid({ heading, subheading, columns = 3, features }: any) {
  const colClass = columns === 2 ? "md:grid-cols-2" : columns === 4 ? "md:grid-cols-4" : "md:grid-cols-3";
  
  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="container-wide">
        {heading && (
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">{heading}</h2>
        )}
        {subheading && (
          <p className="text-lg text-foreground-muted text-center mb-16 max-w-3xl mx-auto">{subheading}</p>
        )}
        <div className={`grid ${colClass} gap-8 max-w-5xl mx-auto`}>
          {features?.map((feature: any, idx: number) => (
            <div key={idx} className="p-8 border border-border rounded-xl bg-background-elevated">
              <h3 className="text-xl font-semibold mb-4 text-accent">{feature.title}</h3>
              <p className="text-foreground-muted text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Numbered List
function NumberedList({ heading, subheading, items }: any) {
  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="container-wide">
        {heading && (
          <h2 className="text-2xl font-semibold text-center mb-12 text-foreground">{heading}</h2>
        )}
        {subheading && (
          <p className="text-foreground-muted text-center mb-12">{subheading}</p>
        )}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {items?.map((item: any, idx: number) => (
            <div key={idx} className="text-center p-8">
              <div className="text-4xl font-bold text-accent mb-4">{idx + 1}</div>
              <h3 className="font-semibold mb-2 text-foreground">{item.title}</h3>
              <p className="text-sm text-foreground-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Two Column Content
function TwoColumnContent({ heading, leftColumn, rightColumn }: any) {
  return (
    <section className="py-20 md:py-28 bg-background-alt border-t border-border">
      <div className="container-wide">
        {heading && (
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">{heading}</h2>
        )}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-8 bg-background-elevated rounded-xl border border-border">
            {leftColumn?.title && (
              <h3 className="text-xl font-semibold text-accent mb-4">{leftColumn.title}</h3>
            )}
            {leftColumn?.content && <PortableText value={leftColumn.content} />}
            {leftColumn?.note && (
              <p className="text-sm text-foreground-subtle mt-4">{leftColumn.note}</p>
            )}
          </div>
          <div className="p-8 bg-background-elevated rounded-xl border border-border">
            {rightColumn?.title && (
              <h3 className="text-xl font-semibold text-accent mb-4">{rightColumn.title}</h3>
            )}
            {rightColumn?.content && <PortableText value={rightColumn.content} />}
            {rightColumn?.note && (
              <p className="text-sm text-foreground-subtle mt-4">{rightColumn.note}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// Table of Contents
function TableOfContents({ heading, parts }: any) {
  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="container-wide">
        {heading && (
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">{heading}</h2>
        )}
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {parts?.map((part: any, idx: number) => (
              <div key={idx}>
                <h3 className="text-lg font-semibold text-accent mb-4">{part.partTitle}</h3>
                <ul className="text-foreground-muted space-y-2 text-sm">
                  {part.chapters?.map((chapter: string, cIdx: number) => (
                    <li key={cIdx}>{chapter}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Author Bios
function AuthorBios({ heading, authors, additionalText }: any) {
  return (
    <section className="py-20 md:py-28 bg-background-alt border-t border-border">
      <div className="container-wide">
        {heading && (
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">{heading}</h2>
        )}
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {authors?.map((author: any, idx: number) => (
            <div key={idx} className="text-center">
              <div className="w-32 h-32 bg-background-elevated border border-border rounded-full mx-auto mb-6 overflow-hidden">
                {author.imageUrl && (
                  <Image src={author.imageUrl} alt={author.name} width={128} height={128} className="object-cover" />
                )}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{author.name}</h3>
              <p className="text-foreground-muted text-sm">{author.bio}</p>
            </div>
          ))}
        </div>
        {additionalText && (
          <p className="text-center text-foreground-muted mt-12 max-w-2xl mx-auto">{additionalText}</p>
        )}
      </div>
    </section>
  );
}

// Resource Links
function ResourceLinks({ heading, subheading, resources }: any) {
  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="container-wide">
        {heading && (
          <h2 className="text-3xl font-bold text-center mb-4 text-foreground">{heading}</h2>
        )}
        {subheading && (
          <p className="text-center text-foreground-muted mb-12 max-w-2xl mx-auto">{subheading}</p>
        )}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {resources?.map((resource: any, idx: number) => (
            <div key={idx} className="p-6 border border-border rounded-xl bg-background-elevated">
              <h3 className="font-semibold mb-3 text-foreground">{resource.title}</h3>
              <p className="text-sm text-foreground-muted mb-4">{resource.description}</p>
              {resource.isExternal ? (
                <a
                  href={resource.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent font-medium text-sm hover:text-accent-light"
                >
                  {resource.linkText}
                </a>
              ) : (
                <Link href={resource.linkUrl} className="text-accent font-medium text-sm hover:text-accent-light">
                  {resource.linkText}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Assessment Dimensions
function AssessmentDimensions({ heading, dimensions }: any) {
  return (
    <section className="mb-16">
      <div className="container-narrow">
        {heading && (
          <h2 className="text-2xl font-semibold text-center mb-12 text-foreground">{heading}</h2>
        )}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {dimensions?.map((dim: any, idx: number) => (
            <div key={idx} className="p-6 border border-border rounded-xl bg-background-elevated">
              <h3 className="font-semibold text-accent mb-2">{dim.name}</h3>
              <p className="text-sm text-foreground-muted">{dim.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Status Cards
function StatusCards({ heading, cards }: any) {
  const statusStyles: Record<string, { bg: string; border: string; text: string }> = {
    success: { bg: "bg-green-900/30", border: "border-green-700/50", text: "text-green-500" },
    warning: { bg: "bg-yellow-900/30", border: "border-yellow-700/50", text: "text-yellow-500" },
    neutral: { bg: "bg-gray-800", border: "border-gray-700", text: "text-foreground-muted" },
  };

  return (
    <section className="border-t border-border pt-16">
      <div className="container-narrow">
        {heading && (
          <h2 className="text-2xl font-semibold text-center mb-12 text-foreground">{heading}</h2>
        )}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {cards?.map((card: any, idx: number) => {
            const styles = statusStyles[card.status] || statusStyles.neutral;
            return (
              <div key={idx} className="text-center p-8">
                <div className={`w-12 h-12 ${styles.bg} border ${styles.border} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  {card.status === "success" && (
                    <svg className={`w-6 h-6 ${styles.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                  {card.status === "warning" && (
                    <svg className={`w-6 h-6 ${styles.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  )}
                  {card.status === "neutral" && (
                    <svg className={`w-6 h-6 ${styles.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                </div>
                <h3 className={`font-semibold mb-2 ${styles.text}`}>{card.title}</h3>
                <p className="text-sm text-foreground-muted">{card.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CtaSection({ heading, description, ctaText, ctaLink, isHighlighted }: any) {
  return (
    <div className="container-narrow my-16">
      <div className={`p-10 bg-background-elevated rounded-xl text-center ${isHighlighted ? "border-2 border-accent" : "border border-border"}`}>
        {heading && <h3 className="text-xl font-semibold mb-4 text-foreground">{heading}</h3>}
        {description && <p className="text-foreground-muted mb-8">{description}</p>}
        {ctaText && ctaLink && (
          <Link
            href={ctaLink}
            className="inline-block bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent-light transition-all"
          >
            {ctaText}
          </Link>
        )}
      </div>
    </div>
  );
}

// CTA Grid
function CtaGrid({ heading, ctas }: any) {
  return (
    <section className="py-20 md:py-28 bg-background-alt border-t border-border">
      <div className="container-wide">
        {heading && (
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">{heading}</h2>
        )}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {ctas?.map((cta: any, idx: number) => (
            <div key={idx} className={`p-8 rounded-xl text-center bg-background-elevated ${cta.isPrimary ? "border-2 border-accent" : "border border-border"}`}>
              <h3 className="text-xl font-semibold text-foreground mb-4">{cta.title}</h3>
              <p className="text-foreground-muted text-sm mb-6">{cta.description}</p>
              <Link
                href={cta.buttonLink}
                className={`inline-block px-6 py-3 rounded-lg font-semibold transition-all ${
                  cta.isPrimary
                    ? "bg-accent text-white hover:bg-accent-light"
                    : "border-2 border-foreground text-foreground hover:bg-foreground hover:text-background"
                }`}
              >
                {cta.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Book Hero
function BookHero({ badge, title, subtitle, authors, coverImageUrl, ctaText, ctaLink, secondaryCtaText, secondaryCtaLink }: any) {
  return (
    <section className="py-20 md:py-28 border-b border-border">
      <div className="container-wide">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            {badge && (
              <div className="inline-block bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                {badge}
              </div>
            )}
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">{title}</h1>
            {subtitle && <p className="text-xl text-accent font-medium mb-6">{subtitle}</p>}
            {authors && <p className="text-lg text-foreground-muted mb-8">{authors}</p>}
            <div className="flex gap-4 flex-wrap">
              {ctaText && ctaLink && (
                <Link href={ctaLink} className="bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent-light transition-all">
                  {ctaText}
                </Link>
              )}
              {secondaryCtaText && secondaryCtaLink && (
                <Link href={secondaryCtaLink} className="border-2 border-foreground text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-foreground hover:text-background transition-all">
                  {secondaryCtaText}
                </Link>
              )}
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-64 h-80 bg-background-elevated border-2 border-accent rounded-lg shadow-2xl flex items-center justify-center overflow-hidden">
              {coverImageUrl ? (
                <Image src={coverImageUrl} alt={title} width={256} height={320} className="object-cover" />
              ) : (
                <div className="text-center p-6">
                  <p className="text-2xl font-bold mb-2 text-foreground">WISER Method</p>
                  <p className="text-lg text-foreground-muted">Master Playbook</p>
                  <p className="text-sm mt-4 text-foreground-subtle">Cover Coming Soon</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Purchase Links
function PurchaseLinks({ heading, description, links, isbn }: any) {
  return (
    <section className="py-20 md:py-28 bg-background-alt border-t border-border">
      <div className="container-wide text-center">
        {heading && <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">{heading}</h2>}
        {description && <p className="text-xl text-foreground-muted mb-12 max-w-2xl mx-auto">{description}</p>}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          {links?.map((link: any, idx: number) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-8 py-4 rounded-lg font-semibold transition-all min-w-[200px] ${
                link.isPrimary
                  ? "bg-accent text-white hover:bg-accent-light"
                  : "border-2 border-foreground text-foreground hover:bg-foreground hover:text-background"
              }`}
            >
              {link.retailer}
            </a>
          ))}
        </div>
        {isbn && <p className="text-foreground-subtle text-sm">ISBN: {isbn}</p>}
      </div>
    </section>
  );
}

// Simple Text
function SimpleText({ text, alignment = "center", size = "small", links }: any) {
  const alignClass = alignment === "left" ? "text-left" : alignment === "right" ? "text-right" : "text-center";
  const sizeClass = size === "large" ? "text-lg" : size === "normal" ? "text-base" : "text-sm";

  return (
    <section className="py-12">
      <div className={`container-wide ${alignClass}`}>
        <p className={`text-foreground-subtle ${sizeClass} mb-2`}>{text}</p>
        {links && links.length > 0 && (
          <p className={`text-foreground-subtle ${sizeClass}`}>
            {links.map((link: any, idx: number) => (
              <span key={idx}>
                {idx > 0 && " | "}
                <a href={link.url} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                  {link.text}
                </a>
              </span>
            ))}
          </p>
        )}
      </div>
    </section>
  );
}

// Form Section
function FormSection({ heading, description, formType, buttonText, disclaimer }: any) {
  return (
    <section className="border-t border-border pt-16">
      <div className="container-narrow">
        {heading && (
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold mb-2 text-foreground">{heading}</h2>
            {description && <p className="text-foreground-muted">{description}</p>}
          </div>
        )}
        <form className="max-w-md mx-auto">
          <div className="flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-background-elevated border border-border rounded-lg text-foreground placeholder:text-foreground-subtle focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              required
            />
            <button
              type="submit"
              className="bg-foreground text-background px-6 py-3 rounded-lg font-semibold hover:bg-foreground-muted transition-all whitespace-nowrap"
            >
              {buttonText || "Submit"}
            </button>
          </div>
          {disclaimer && (
            <p className="text-xs text-foreground-subtle mt-3 text-center">{disclaimer}</p>
          )}
        </form>
      </div>
    </section>
  );
}

// Info Box
function InfoBox({ content, style = "default" }: any) {
  const styleClasses = {
    default: "bg-background-elevated border border-border",
    highlighted: "bg-background-elevated border-2 border-accent",
    quote: "bg-background-elevated border-l-4 border-accent",
  };

  return (
    <div className="container-narrow my-12">
      <div className={`p-8 rounded-xl ${styleClasses[style as keyof typeof styleClasses] || styleClasses.default}`}>
        <p className="text-foreground-muted italic">{content}</p>
      </div>
    </div>
  );
}
