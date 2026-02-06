import Link from "next/link";

export default function WaitlistPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="container-narrow">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Join the Waitlist
          </h1>
          <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
            The first cohort of WISER Certified Practitioners launches soon. To join the waitlist, we ask everyone to take the WISER Fit Assessment.
          </p>
        </header>

        {/* Credibility */}
        <div className="text-center mb-12">
          <p className="text-sm text-foreground-muted italic">
            Based on principles from the bestselling <em>Age of Invisible Machines</em> (Wiley).
          </p>
        </div>

        {/* Why Section */}
        <section className="mb-12 p-6 bg-background-alt rounded-xl">
          <h2 className="text-xl font-semibold mb-4">Why Take the Assessment?</h2>
          <p className="text-gray-700">
            WISER isn&apos;t for everyone. The methodology requires a specific way of thinking about problems, uncertainty, and progress. The assessment helps you understand if WISER aligns with how you naturally work, and it helps us understand who&apos;s joining the waitlist.
          </p>
        </section>

        {/* What Happens Section */}
        <section className="mb-12 p-6 bg-background-alt rounded-xl">
          <h2 className="text-xl font-semibold mb-4">What Happens</h2>
          <p className="text-gray-700">
            Complete the assessment (about 10 minutes), and you&apos;ll automatically be added to the waitlist. You&apos;ll also receive a full copy of your assessment results, including your dimensional scores and personalized insights about your thinking patterns.
          </p>
        </section>

        {/* CTA */}
        <div className="text-center mb-16">
          <Link
            href="/assessment"
            className="inline-block bg-accent text-white px-10 py-4 rounded-lg font-medium text-lg hover:bg-accent-dark transition-colors"
          >
            Start the Assessment
          </Link>
          <p className="text-sm text-foreground-muted mt-4">
            About 10 minutes. Honest feedback regardless of outcome.
          </p>
        </div>

        {/* Alternative: Direct Waitlist Form */}
        <section className="border-t border-gray-200 pt-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold mb-2">Already Know WISER is for You?</h2>
            <p className="text-foreground-muted">
              Skip the assessment and join the waitlist directly.
            </p>
          </div>

          <form className="max-w-md mx-auto">
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors whitespace-nowrap"
              >
                Join Waitlist
              </button>
            </div>
            <p className="text-xs text-foreground-muted mt-3 text-center">
              We respect your privacy. No spam, ever.
            </p>
          </form>
        </section>

        {/* What to Expect */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-center mb-8">What to Expect</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-xl font-bold">1</span>
              </div>
              <h3 className="font-semibold mb-2">Early Access</h3>
              <p className="text-sm text-foreground-muted">
                Be the first to know when registration opens for the founding cohort.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-xl font-bold">2</span>
              </div>
              <h3 className="font-semibold mb-2">Methodology Updates</h3>
              <p className="text-sm text-foreground-muted">
                Receive updates as WISER evolves, including new Plays and resources.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-xl font-bold">3</span>
              </div>
              <h3 className="font-semibold mb-2">Community Access</h3>
              <p className="text-sm text-foreground-muted">
                Connect with other practitioners exploring AI-driven transformation.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
