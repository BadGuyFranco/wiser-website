import Link from "next/link";
import { stages, stageOrder } from "./stage-data";

export const metadata = {
  title: "Programs | WISER Method",
  description:
    "The AI Operations Maturity Model. Five programs from individual automation to organizational AI consulting. Start where you are.",
};

export default function ProgramsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="container-wide text-center relative">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground tracking-tight">
            Every Stage Delivers Standalone Value.
            <br />
            <span className="text-accent">
              Every Stage Builds Toward the Next.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-foreground-muted mb-6 max-w-3xl mx-auto">
            The AI Operations Maturity Model is a six-stage progression from
            basic AI usage to full organizational AI maturity. Start where you
            are. Progress at your own pace.
          </p>
          <p className="text-foreground-subtle max-w-2xl mx-auto">
            Every dollar you invest in an earlier stage applies as credit toward
            the next.
          </p>
        </div>
      </section>

      {/* Stage 1 Baseline */}
      <section className="border-t border-border">
        <div className="container-wide py-8">
          <div className="max-w-4xl mx-auto flex items-center gap-4 px-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-background-elevated border border-border flex items-center justify-center">
              <span className="text-lg font-bold text-foreground-subtle">1</span>
            </div>
            <div>
              <span className="text-foreground-subtle text-sm font-medium">
                Stage 1: Using ChatGPT Well
              </span>
              <span className="text-foreground-subtle text-sm ml-2">
                . Prerequisite, not a program. You can use conversational AI for
                basic tasks.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* All Stages */}
      <section className="py-12 md:py-20 bg-background-alt border-t border-border">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto flex flex-col gap-8">
            {stageOrder.map((slug) => {
              const stage = stages[slug];
              return (
                <div
                  key={slug}
                  className="p-8 md:p-10 border border-border rounded-xl bg-background-elevated"
                >
                  <div className="flex items-start gap-6 mb-6">
                    <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-background border border-border flex items-center justify-center">
                      <span className="text-2xl font-bold text-accent">
                        {stage.number}
                      </span>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-foreground">
                        {stage.maturityLabel}
                      </h2>
                      <p className="text-foreground-subtle">{stage.program}</p>
                    </div>
                  </div>

                  <p className="text-foreground-muted mb-6">
                    {stage.subheadline}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <span className="text-2xl font-bold text-accent">
                      {stage.investment}
                    </span>
                    {stage.investmentNote && (
                      <span className="text-sm text-foreground-subtle">
                        {stage.investmentNote}
                      </span>
                    )}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3 mb-8 text-sm">
                    {stage.details.slice(0, 4).map((detail, idx) => (
                      <div key={idx} className="text-foreground-muted">
                        <span className="text-foreground-subtle">
                          {detail.label}:
                        </span>{" "}
                        {detail.value}
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/programs/${slug}`}
                    className="inline-block bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-light transition-all"
                  >
                    Learn More
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Credit Stacking */}
      <section className="py-20 md:py-28 border-t border-border">
        <div className="container-wide">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            Every Dollar Counts Forward
          </h2>
          <p className="text-lg text-foreground-muted text-center mb-16 max-w-2xl mx-auto">
            Every investment in an earlier stage applies as credit toward the
            next. There is no penalty for starting small and growing.
          </p>

          <div className="max-w-3xl mx-auto">
            <div className="grid gap-4">
              {[
                {
                  from: "CoFounder ($1,500)",
                  to: "Licensed Practitioner ($5,000)",
                  invested: "$1,500",
                  remaining: "$3,500",
                },
                {
                  from: "Licensed Practitioner ($5,000)",
                  to: "Licensed Partner ($40,000)",
                  invested: "$5,000",
                  remaining: "$35,000",
                },
                {
                  from: "CoFounder directly",
                  to: "Licensed Partner ($40,000)",
                  invested: "$1,500",
                  remaining: "$38,500",
                },
              ].map((row, idx) => (
                <div
                  key={idx}
                  className="p-6 border border-border rounded-xl bg-background-elevated flex flex-col sm:flex-row sm:items-center gap-4"
                >
                  <div className="flex-1">
                    <p className="text-sm text-foreground-subtle">
                      From: {row.from}
                    </p>
                    <p className="text-sm text-foreground-subtle">
                      To: {row.to}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-foreground-subtle">
                      Already invested: {row.invested}
                    </p>
                    <p className="text-lg font-bold text-accent">
                      Remaining: {row.remaining}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Buyer Journey */}
      <section className="py-20 md:py-28 bg-background-alt border-t border-border">
        <div className="container-wide">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
            Start Where You Are
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 border border-border rounded-xl bg-background-elevated">
              <h3 className="text-lg font-semibold mb-4 text-accent">
                Individual contributor or manager
              </h3>
              <p className="text-foreground-muted text-sm">
                Start with{" "}
                <Link
                  href="/programs/cofounder"
                  className="text-accent underline"
                >
                  CoFounder
                </Link>{" "}
                (Stage 2). Build personal AI capability. Advance to{" "}
                <Link
                  href="/programs/licensed-practitioner"
                  className="text-accent underline"
                >
                  Licensed Practitioner
                </Link>{" "}
                (Stage 5) when you want the credential.
              </p>
            </div>

            <div className="p-8 border border-border rounded-xl bg-background-elevated">
              <h3 className="text-lg font-semibold mb-4 text-accent">
                Team lead
              </h3>
              <p className="text-foreground-muted text-sm">
                Start with{" "}
                <Link
                  href="/programs/team-accelerator"
                  className="text-accent underline"
                >
                  Team Accelerator
                </Link>{" "}
                (Stage 3) to give your whole team AI capability, or start with{" "}
                <Link
                  href="/programs/cofounder"
                  className="text-accent underline"
                >
                  CoFounder
                </Link>{" "}
                (Stage 2) for yourself first.
              </p>
            </div>

            <div className="p-8 border border-border rounded-xl bg-background-elevated">
              <h3 className="text-lg font-semibold mb-4 text-accent">
                Senior leader or executive
              </h3>
              <p className="text-foreground-muted text-sm">
                Start with{" "}
                <Link
                  href="/programs/ai-for-executives"
                  className="text-accent underline"
                >
                  AI For Executives
                </Link>{" "}
                (Stage 4) to understand the model. Then fund Stages 2 and 3 for
                your teams. Invest in Stage 5 for your key practitioners.
              </p>
            </div>

            <div className="p-8 border border-border rounded-xl bg-background-elevated">
              <h3 className="text-lg font-semibold mb-4 text-accent">
                Consultant
              </h3>
              <p className="text-foreground-muted text-sm">
                Start with{" "}
                <Link
                  href="/programs/licensed-practitioner"
                  className="text-accent underline"
                >
                  Licensed Practitioner
                </Link>{" "}
                (Stage 5) to learn the methodology. Advance to{" "}
                <Link
                  href="/programs/licensed-partner"
                  className="text-accent underline"
                >
                  Licensed Partner
                </Link>{" "}
                (Stage 6) when you&apos;re ready to build your practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Elements */}
      <section className="py-20 md:py-28 border-t border-border">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-foreground">
            Common to All Stages
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Both Books",
                desc: "The WISER Method Master Playbook and Age of Invisible Machines",
              },
              {
                title: "Live Instruction",
                desc: "No programs are self-paced. All include live teaching.",
              },
              {
                title: "Remote Delivery",
                desc: "All programs delivered remotely. Travel for qualifying cohorts.",
              },
              {
                title: "Credit Stacking",
                desc: "Every dollar invested applies toward the next stage.",
              },
            ].map((item, idx) => (
              <div key={idx} className="p-6 text-center">
                <h3 className="font-semibold text-accent mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-foreground-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-background-alt border-t border-border">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Not Sure Where to Start?
          </h2>
          <div className="flex gap-4 justify-center flex-wrap mt-8">
            <Link
              href="/method"
              className="bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent-light transition-all text-lg"
            >
              Read the Method
            </Link>
            <Link
              href="/playbook"
              className="border-2 border-foreground text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-foreground hover:text-background transition-all text-lg"
            >
              Get the Book
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
