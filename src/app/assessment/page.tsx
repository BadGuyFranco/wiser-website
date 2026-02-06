import Link from "next/link";

export default function AssessmentPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="container-narrow">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            WISER Fit Assessment
          </h1>
          <p className="text-sm text-foreground-muted italic mb-8">
            Based on principles from the bestselling <em>Age of Invisible Machines</em> (Wiley).
          </p>
        </header>

        {/* Instructions */}
        <section className="mb-12 max-w-2xl mx-auto">
          <div className="p-6 bg-background-alt rounded-xl mb-6">
            <p className="text-lg text-gray-700 mb-4">
              A 15-minute conversation about how you think. Answer based on how you actually operate, not how you think you should.
            </p>
            <p className="text-gray-700 mb-4">
              Answer honestly. If WISER isn&apos;t a fit, we&apos;ll tell you why and suggest what might work better.
            </p>
            <p className="text-foreground-muted text-sm">
              The chatbot will ask follow-ups if your answers need clarification.
            </p>
          </div>
        </section>

        {/* Assessment Dimensions Preview */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-center mb-8">What We&apos;ll Explore</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="p-5 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-primary mb-2">Action Orientation</h3>
              <p className="text-sm text-foreground-muted">
                How you balance planning with execution, and your comfort with learning through doing.
              </p>
            </div>
            <div className="p-5 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-primary mb-2">Uncertainty Tolerance</h3>
              <p className="text-sm text-foreground-muted">
                Your ability to make progress when outcomes aren&apos;t guaranteed.
              </p>
            </div>
            <div className="p-5 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-primary mb-2">Systems Thinking</h3>
              <p className="text-sm text-foreground-muted">
                How you approach complexity and interconnected problems.
              </p>
            </div>
            <div className="p-5 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-primary mb-2">Evolution Mindset</h3>
              <p className="text-sm text-foreground-muted">
                Your preference for incremental improvement vs. wholesale change.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center mb-16">
          <div className="p-8 bg-primary/5 rounded-xl border-2 border-primary/20 max-w-xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Assessment Coming Soon</h3>
            <p className="text-foreground-muted mb-6">
              The interactive WISER Fit Assessment is currently being developed. Join the waitlist to be notified when it launches.
            </p>
            <Link
              href="/waitlist"
              className="inline-block bg-accent text-white px-8 py-3 rounded-lg font-medium hover:bg-accent-dark transition-colors"
            >
              Join the Waitlist
            </Link>
          </div>
        </section>

        {/* What Happens After */}
        <section className="border-t border-gray-200 pt-12">
          <h2 className="text-2xl font-semibold text-center mb-8">What Happens After</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2 text-green-700">Strong/Good Fit</h3>
              <p className="text-sm text-foreground-muted">
                You&apos;ll be directed to join the waitlist for the founding cohort.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2 text-yellow-700">Marginal Fit</h3>
              <p className="text-sm text-foreground-muted">
                We&apos;ll suggest diving deeper into the Method to see if WISER aligns with your goals.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2 text-gray-700">Not a Fit</h3>
              <p className="text-sm text-foreground-muted">
                We&apos;ll provide honest feedback and suggest alternatives that might work better for you.
              </p>
            </div>
          </div>
        </section>

        {/* Alternative */}
        <section className="mt-16 text-center">
          <p className="text-foreground-muted mb-4">
            Want to understand the methodology first?
          </p>
          <Link
            href="/method"
            className="text-primary font-medium hover:text-primary-dark transition-colors inline-flex items-center gap-2"
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
