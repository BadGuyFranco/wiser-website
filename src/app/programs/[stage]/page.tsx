import { notFound } from "next/navigation";
import Link from "next/link";
import { getStage, getAllStageSlugs, type StageData } from "../stage-data";

export async function generateStaticParams() {
  return getAllStageSlugs().map((stage) => ({ stage }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ stage: string }>;
}) {
  const { stage } = await params;
  const data = getStage(stage);
  if (!data) return { title: "Page Not Found" };

  return {
    title: `${data.program} | WISER Method`,
    description: data.subheadline,
  };
}

export default async function StagePage({
  params,
}: {
  params: Promise<{ stage: string }>;
}) {
  const { stage } = await params;
  const data = getStage(stage);

  if (!data) {
    notFound();
  }

  return (
    <div>
      {/* Hero */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, var(--accent) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        <div className="container-wide relative">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-semibold">
                Stage {data.number}
              </span>
              <span className="text-foreground-subtle text-sm">
                {data.maturityLabel}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground tracking-tight">
              {data.headline}
            </h1>
            <p className="text-lg md:text-xl text-foreground-muted mb-8">
              {data.subheadline}
            </p>
            <div className="flex flex-wrap items-center gap-6 mb-8">
              <span className="text-3xl font-bold text-accent">
                {data.investment}
              </span>
              {data.investmentNote && (
                <span className="text-foreground-subtle">
                  {data.investmentNote}
                </span>
              )}
            </div>
            <div className="flex gap-4 flex-wrap">
              <button className="bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent-light transition-all text-lg">
                {data.ctaText}
              </button>
              <Link
                href="/programs"
                className="border-2 border-foreground text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-foreground hover:text-background transition-all text-lg"
              >
                See All Programs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 md:py-28 border-t border-border">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
              {data.problemHeadline}
            </h2>
            {data.problemText.map((paragraph, idx) => (
              <p
                key={idx}
                className="text-lg text-foreground-muted mb-6 last:mb-0"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 md:py-28 bg-background-alt border-t border-border">
        <div className="container-wide">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
            {data.outcomeHeadline}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {data.outcomes.map((outcome, idx) => (
              <div
                key={idx}
                className="p-8 border border-border rounded-xl bg-background-elevated"
              >
                <h3 className="text-lg font-semibold mb-3 text-accent">
                  {outcome.title}
                </h3>
                <p className="text-foreground-muted text-sm">
                  {outcome.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-20 md:py-28 border-t border-border">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-center mb-16 text-foreground">
            Program Details
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid gap-4">
              {data.details.map((detail, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row sm:items-center gap-2 p-4 border-b border-border"
                >
                  <span className="font-semibold text-foreground min-w-[140px]">
                    {detail.label}
                  </span>
                  <span className="text-foreground-muted">{detail.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 md:py-28 bg-background-alt border-t border-border">
        <div className="container-wide">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
            {data.audienceHeadline}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {data.audienceGroups.map((group, idx) => (
              <div
                key={idx}
                className="p-8 border border-border rounded-xl bg-background-elevated"
              >
                <h3 className="text-lg font-semibold mb-3 text-accent">
                  {group.title}
                </h3>
                <p className="text-foreground-muted text-sm">
                  {group.description}
                </p>
              </div>
            ))}
          </div>

          {data.notRightFit.length > 0 && (
            <div className="max-w-3xl mx-auto mt-12">
              <h3 className="text-lg font-semibold text-foreground mb-4 text-center">
                Not the right fit?
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {data.notRightFit.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.link}
                    className="text-sm text-foreground-muted hover:text-accent transition-colors"
                  >
                    {item.text}?{" "}
                    <span className="text-accent underline">
                      {item.linkText}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Proof */}
      <section className="py-20 md:py-28 border-t border-border">
        <div className="container-wide">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
            {data.proofHeadline}
          </h2>
          <div className="max-w-3xl mx-auto flex flex-col gap-8">
            {data.proofPoints.map((point, idx) => (
              <div key={idx}>
                <h3 className="text-lg font-semibold mb-2 text-accent">
                  {point.title}
                </h3>
                <p className="text-foreground-muted">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objections */}
      <section className="py-20 md:py-28 bg-background-alt border-t border-border">
        <div className="container-wide">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
            Common Questions
          </h2>
          <div className="max-w-3xl mx-auto flex flex-col gap-8">
            {data.objections.map((obj, idx) => (
              <div
                key={idx}
                className="p-8 border border-border rounded-xl bg-background-elevated"
              >
                <h3 className="text-lg font-semibold mb-3 text-foreground">
                  &ldquo;{obj.question}&rdquo;
                </h3>
                <p className="text-foreground-muted">{obj.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment */}
      <section className="py-20 md:py-28 border-t border-border">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
            Investment
          </h2>
          <p className="text-5xl font-bold text-accent mb-8">
            {data.investment}
          </p>
          {data.investmentNote && (
            <p className="text-lg text-foreground-subtle mb-8">
              {data.investmentNote}
            </p>
          )}
          <div className="max-w-2xl mx-auto text-left mb-12">
            {data.investmentDetails.map((detail, idx) => (
              <p key={idx} className="text-foreground-muted mb-3">
                {detail}
              </p>
            ))}
          </div>
          <button className="bg-accent text-white px-10 py-4 rounded-lg font-semibold hover:bg-accent-light transition-all text-lg">
            {data.ctaText}
          </button>
        </div>
      </section>

      {/* Next Steps */}
      {data.nextSteps.length > 0 && (
        <section className="py-20 md:py-28 bg-background-alt border-t border-border">
          <div className="container-wide">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
              Where This Leads
            </h2>
            <div
              className={`grid gap-8 max-w-4xl mx-auto ${
                data.nextSteps.length > 1 ? "md:grid-cols-2" : ""
              }`}
            >
              {data.nextSteps.map((next, idx) => (
                <div
                  key={idx}
                  className="p-8 border border-border rounded-xl bg-background-elevated"
                >
                  <h3 className="text-lg font-semibold mb-3 text-accent">
                    {next.title}
                  </h3>
                  <p className="text-foreground-muted text-sm mb-4">
                    {next.description}
                  </p>
                  <Link
                    href={next.href}
                    className="text-accent font-semibold hover:text-accent-light transition-colors inline-flex items-center gap-2"
                  >
                    {next.linkText}
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
