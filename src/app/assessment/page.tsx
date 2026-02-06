import Link from "next/link";

export default function AssessmentPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container-narrow">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            WISER Fit Assessment
          </h1>
          <p className="text-sm text-foreground-subtle italic mb-8">
            Based on principles from the bestselling <em className="text-foreground-muted">Age of Invisible Machines</em> (Wiley).
          </p>
        </header>

        {/* Instructions */}
        <section className="mb-16 max-w-2xl mx-auto">
          <div className="p-8 bg-background-elevated border border-border rounded-xl mb-6">
            <p className="text-lg text-foreground-muted mb-4">
              A 15-minute conversation about how you think. Answer based on how you actually operate, not how you think you should.
            </p>
            <p className="text-foreground-muted mb-4">
              Answer honestly. If WISER isn&apos;t a fit, we&apos;ll tell you why and suggest what might work better.
            </p>
            <p className="text-foreground-subtle text-sm">
              The chatbot will ask follow-ups if your answers need clarification.
            </p>
          </div>
        </section>

        {/* Assessment Dimensions Preview */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-center mb-12 text-foreground">What We&apos;ll Explore</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="p-6 border border-border rounded-xl bg-background-elevated">
              <h3 className="font-semibold text-accent mb-2">Action Orientation</h3>
              <p className="text-sm text-foreground-muted">
                How you balance planning with execution, and your comfort with learning through doing.
              </p>
            </div>
            <div className="p-6 border border-border rounded-xl bg-background-elevated">
              <h3 className="font-semibold text-accent mb-2">Uncertainty Tolerance</h3>
              <p className="text-sm text-foreground-muted">
                Your ability to make progress when outcomes aren&apos;t guaranteed.
              </p>
            </div>
            <div className="p-6 border border-border rounded-xl bg-background-elevated">
              <h3 className="font-semibold text-accent mb-2">Systems Thinking</h3>
              <p className="text-sm text-foreground-muted">
                How you approach complexity and interconnected problems.
              </p>
            </div>
            <div className="p-6 border border-border rounded-xl bg-background-elevated">
              <h3 className="font-semibold text-accent mb-2">Evolution Mindset</h3>
              <p className="text-sm text-foreground-muted">
                Your preference for incremental improvement vs. wholesale change.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center mb-20">
          <div className="p-10 bg-background-elevated rounded-xl border-2 border-accent max-w-xl mx-auto">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Assessment Coming Soon</h3>
            <p className="text-foreground-muted mb-8">
              The interactive WISER Fit Assessment is currently being developed. Join the waitlist to be notified when it launches.
            </p>
            <Link
              href="/waitlist"
              className="inline-block bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent-light transition-all"
            >
              Join the Waitlist
            </Link>
          </div>
        </div>

        {/* What Happens After */}
        <section className="border-t border-border pt-16">
          <h2 className="text-2xl font-semibold text-center mb-12 text-foreground">What Happens After</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-8">
              <div className="w-12 h-12 bg-green-900/30 border border-green-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2 text-green-500">Strong/Good Fit</h3>
              <p className="text-sm text-foreground-muted">
                You&apos;ll be directed to join the waitlist for the founding cohort.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="w-12 h-12 bg-yellow-900/30 border border-yellow-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2 text-yellow-500">Marginal Fit</h3>
              <p className="text-sm text-foreground-muted">
                We&apos;ll suggest diving deeper into the Method to see if WISER aligns with your goals.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="w-12 h-12 bg-gray-800 border border-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2 text-foreground-muted">Not a Fit</h3>
              <p className="text-sm text-foreground-muted">
                We&apos;ll provide honest feedback and suggest alternatives that might work better for you.
              </p>
            </div>
          </div>
        </section>

        {/* Alternative */}
        <section className="mt-20 text-center">
          <p className="text-foreground-muted mb-4">
            Want to understand the methodology first?
          </p>
          <Link
            href="/method"
            className="text-accent font-semibold hover:text-accent-light transition-colors inline-flex items-center gap-2"
          >
            Read the Full Method
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </section>
      </div>
    </div>
  );
}
