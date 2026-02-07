import Link from "next/link";

const stages = [
  {
    number: 2,
    label: "Automating Myself",
    program: "CoFounder",
    description:
      "You use AI for basic tasks but haven't built systems that extend your capacity. You want a personal AI toolkit that works in production, not just in conversation.",
    href: "/programs/cofounder",
    audience: "Leaders, managers, practitioners",
  },
  {
    number: 3,
    label: "Automating My Team",
    program: "Team Accelerator",
    description:
      "You've automated your own work but your team hasn't. Everyone is doing their own thing with AI. No shared methodology, no shared capability.",
    href: "/programs/team-accelerator",
    audience: "Managers and team leads",
  },
  {
    number: 4,
    label: "Automating My Company",
    program: "AI For Executives",
    description:
      "You lead an organization and need to understand AI Operations at a strategic level. Your teams need direction and your board needs a framework.",
    href: "/programs/ai-for-executives",
    audience: "Senior leaders, C-suite",
  },
  {
    number: 5,
    label: "Becoming a Practitioner",
    program: "Licensed Practitioner",
    description:
      "You want the methodology depth and the credential to lead AI Operations initiatives professionally. You're building a career around AI Operations.",
    href: "/programs/licensed-practitioner",
    audience: "Professionals seeking certification",
  },
  {
    number: 6,
    label: "Becoming a Consultant",
    program: "Licensed Partner",
    description:
      "You want to build an AI consulting practice with a proven methodology, lead generation, and a license to deliver WISER to your own clients.",
    href: "/programs/licensed-partner",
    audience: "Consultants and consulting firms",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
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

        <div className="container-wide text-center relative">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground tracking-tight">
            AI Operations Is a Maturity Problem.
            <br />
            <span className="text-accent">There&apos;s a Structured Path.</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground-muted mb-10 max-w-3xl mx-auto">
            Most organizations have an AI strategy and no methodology for
            executing it. WISER is the AI Operations methodology that takes
            individuals and organizations from basic AI usage to full
            operational maturity, one stage at a time.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#maturity-model"
              className="bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent-light transition-all text-lg"
            >
              See Where You Are
            </a>
            <Link
              href="/programs"
              className="border-2 border-foreground text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-foreground hover:text-background transition-all text-lg"
            >
              Explore Programs
            </Link>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 md:py-28 border-t border-border">
        <div className="container-wide">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-foreground">
            The Gap Between AI Strategy and AI Results
          </h2>
          <p className="text-lg text-foreground-muted text-center max-w-3xl mx-auto mb-16">
            Organizations have frameworks for software development, project
            management, and IT operations. They have nothing equivalent for AI.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-8 border border-border rounded-xl bg-background-elevated">
              <h3 className="text-lg font-semibold mb-4 text-accent">
                &ldquo;We piloted AI and it failed.&rdquo;
              </h3>
              <p className="text-foreground-muted text-sm">
                Not because the technology failed. Because there was no
                operational methodology. Tools deployed without process
                redesign. The technology worked; the operations didn&apos;t.
              </p>
            </div>

            <div className="p-8 border border-border rounded-xl bg-background-elevated">
              <h3 className="text-lg font-semibold mb-4 text-accent">
                &ldquo;We don&apos;t know how to start.&rdquo;
              </h3>
              <p className="text-foreground-muted text-sm">
                Pressure from boards, competitors, and market shifts. No
                structured path from awareness to implementation. Stuck between
                &ldquo;we need to do something&rdquo; and &ldquo;we don&apos;t
                know what to do.&rdquo;
              </p>
            </div>

            <div className="p-8 border border-border rounded-xl bg-background-elevated">
              <h3 className="text-lg font-semibold mb-4 text-accent">
                &ldquo;Our AI tools are disconnected.&rdquo;
              </h3>
              <p className="text-foreground-muted text-sm">
                Multiple teams adopted AI independently. Nothing connects. No
                shared methodology, no organizational learning, no compounding
                value.
              </p>
            </div>
          </div>

          <p className="text-center text-xl font-semibold text-accent mt-12 max-w-3xl mx-auto">
            In all three cases, the gap is the same: there is no methodology for
            AI Operations. WISER fills that gap.
          </p>
        </div>
      </section>

      {/* Maturity Model Section */}
      <section
        id="maturity-model"
        className="py-20 md:py-28 bg-background-alt border-t border-border scroll-mt-20"
      >
        <div className="container-wide">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            Where Are You?
          </h2>
          <p className="text-lg text-foreground-muted text-center mb-6 max-w-2xl mx-auto">
            The AI Operations Maturity Model. Five stages from individual
            automation to organizational AI consulting.
          </p>
          <p className="text-sm text-foreground-subtle text-center mb-16 max-w-2xl mx-auto">
            Already using ChatGPT, Claude, or similar tools for basic tasks?
            Good. That&apos;s Stage 1. You&apos;re ready.
          </p>

          <div className="max-w-3xl mx-auto flex flex-col gap-4">
            {stages.map((stage, index) => (
              <Link
                key={stage.number}
                href={stage.href}
                className="group block p-6 md:p-8 border border-border rounded-xl bg-background-elevated hover:border-accent transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-background border border-border flex items-center justify-center group-hover:border-accent transition-colors">
                    <span className="text-2xl font-bold text-accent">
                      {stage.number}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-baseline gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                        {stage.label}
                      </h3>
                      <span className="text-sm text-foreground-subtle">
                        {stage.program}
                      </span>
                    </div>
                    <p className="text-foreground-muted text-sm mb-2">
                      {stage.description}
                    </p>
                    <p className="text-xs text-foreground-subtle">
                      For: {stage.audience}
                    </p>
                  </div>
                  <div className="flex-shrink-0 hidden md:flex items-center">
                    <svg
                      className="w-5 h-5 text-foreground-subtle group-hover:text-accent transition-colors"
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
                  </div>
                </div>
                {index < stages.length - 1 && (
                  <div className="hidden" />
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why WISER Section */}
      <section className="py-20 md:py-28 border-t border-border">
        <div className="container-wide">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
            The Definitive AI Operations Methodology
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 border border-border rounded-xl bg-background-elevated">
              <h3 className="text-lg font-semibold mb-4 text-accent">
                Purpose-Built for AI
              </h3>
              <p className="text-foreground-muted text-sm">
                Not adapted from Agile, ITIL, or generic change management.
                Built for the realities of probabilistic systems: silent
                failures, continuous evolution, behaviors nobody designed. The 12
                AI First Principles govern how WISER operates.
              </p>
            </div>

            <div className="p-8 border border-border rounded-xl bg-background-elevated">
              <h3 className="text-lg font-semibold mb-4 text-accent">
                Proven Through Enterprise Delivery
              </h3>
              <p className="text-foreground-muted text-sm">
                Codifies how OneReach.ai has delivered AI for Fortune 500
                companies and federal government agencies. Recognized by
                Forrester, Gartner, IDC, Aragon, Quadrant, Opus Research, and
                Everest Group.
              </p>
            </div>

            <div className="p-8 border border-border rounded-xl bg-background-elevated">
              <h3 className="text-lg font-semibold mb-4 text-accent">
                Co-Authored with Robb Wilson
              </h3>
              <p className="text-foreground-muted text-sm">
                Bestselling author of{" "}
                <em>Age of Invisible Machines</em> (Wiley), the definitive book
                on agentic AI. One of the founding contributors to AI First
                Principles.
              </p>
            </div>

            <div className="p-8 border border-border rounded-xl bg-background-elevated">
              <h3 className="text-lg font-semibold mb-4 text-accent">
                Abundance, Not Scarcity
              </h3>
              <p className="text-foreground-muted text-sm">
                Positions AI as expanding what people can do, not replacing what
                people do. The guilt and resistance that stall most AI
                initiatives dissolve when the framing shifts from threat to
                opportunity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-background-alt border-t border-border">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Start Where You Are
          </h2>
          <p className="text-lg text-foreground-muted mb-4 max-w-2xl mx-auto">
            Every stage delivers standalone value while building toward the
            next. No guessing what comes next. Every dollar you invest in an
            earlier stage applies as credit toward the next.
          </p>
          <div className="flex gap-4 justify-center flex-wrap mt-10">
            <Link
              href="/programs"
              className="bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent-light transition-all text-lg"
            >
              Explore All Programs
            </Link>
            <Link
              href="/method"
              className="border-2 border-foreground text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-foreground hover:text-background transition-all text-lg"
            >
              Read the Method
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
