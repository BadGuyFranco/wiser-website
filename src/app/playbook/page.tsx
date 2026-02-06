import Link from "next/link";

export default function PlaybookPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-background-alt py-16 md:py-24">
        <div className="container-wide text-center">
          <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            The WISER Master Playbook
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground max-w-4xl mx-auto">
            The Memory That Survives the Chaos
          </h1>
          <p className="text-xl text-foreground-muted max-w-2xl mx-auto mb-8">
            A living document that captures your AI implementation strategy, prevents organizational amnesia, and turns every decision into doctrine.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/waitlist"
              className="bg-accent text-white px-8 py-3 rounded-lg font-medium hover:bg-accent-dark transition-colors"
            >
              Get Access
            </Link>
            <Link
              href="/method#playbooks"
              className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary hover:text-white transition-colors"
            >
              Learn How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 md:py-20">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              The Problem with AI Implementation
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Organizations launch AI initiatives with excitement. Teams discover what works through experimentation. Then reality hits:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex gap-3">
                <span className="text-accent text-xl">&#x2717;</span>
                <span className="text-gray-700">The person who understood the system leaves</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent text-xl">&#x2717;</span>
                <span className="text-gray-700">Hard-won insights get lost in Slack threads and forgotten meetings</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent text-xl">&#x2717;</span>
                <span className="text-gray-700">New team members repeat mistakes that were already solved</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent text-xl">&#x2717;</span>
                <span className="text-gray-700">Scaling requires starting from scratch because no one documented what actually worked</span>
              </li>
            </ul>
            <p className="text-lg text-gray-700 font-medium">
              Traditional plans execute once and collect dust. Your AI implementation deserves better.
            </p>
          </div>
        </div>
      </section>

      {/* What is a Playbook Section */}
      <section className="py-16 md:py-20 bg-background-alt">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-center mb-4">
            What is a WISER Playbook?
          </h2>
          <p className="text-lg text-foreground-muted text-center mb-12 max-w-2xl mx-auto">
            A Playbook is living documentation that evolves with your AI implementation, not a static document that gathers dust.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-white rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold text-primary mb-4">Captures Current State</h3>
              <p className="text-gray-700">
                Your Playbook records where you are: what&apos;s working, what&apos;s broken, what&apos;s been tried, and what&apos;s off limits. No more guessing about context.
              </p>
            </div>
            
            <div className="p-6 bg-white rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold text-primary mb-4">Defines Boundaries</h3>
              <p className="text-gray-700">
                Explicit constraints prevent costly mistakes. Your Playbook defines what&apos;s prohibited, not just what&apos;s required, acknowledging that AI variation is inevitable.
              </p>
            </div>
            
            <div className="p-6 bg-white rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold text-primary mb-4">Adapts Continuously</h3>
              <p className="text-gray-700">
                Run a Play, see what happens, update the Playbook. What worked becomes doctrine. What failed becomes warning. Every decision builds on previous learning.
              </p>
            </div>
            
            <div className="p-6 bg-white rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold text-primary mb-4">Enables Scale</h3>
              <p className="text-gray-700">
                The insights that drove success in Solve don&apos;t fade before they can be scaled in Expand. Your Playbook carries the memory of every previous decision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Playbook Components Section */}
      <section className="py-16 md:py-20">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-center mb-12">
            Inside the Master Playbook
          </h2>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Charter */}
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xl font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">WISER Charter</h3>
                <p className="text-gray-700">
                  Your north star document. Defines objectives, constraints, success criteria, and the boundaries within which AI systems operate. Updated as understanding deepens.
                </p>
              </div>
            </div>

            {/* Functions */}
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xl font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Functions Mapping</h3>
                <p className="text-gray-700">
                  Maps organizational functions to AI capabilities. Identifies where AI adds value, where human judgment remains essential, and the handoff points between them.
                </p>
              </div>
            </div>

            {/* Plays Library */}
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xl font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Plays Library</h3>
                <p className="text-gray-700">
                  Proven patterns for your context. Domain-specific, context-specific, or generic. Each Play defines how to execute a Canon phase and what success looks like.
                </p>
              </div>
            </div>

            {/* Positions */}
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xl font-bold">4</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Positions Assignment</h3>
                <p className="text-gray-700">
                  Nine critical accountabilities assigned to specific people: Authority, Empathy, Translation, Context, Skepticism, Execution, Safety, Stewardship, Integrity.
                </p>
              </div>
            </div>

            {/* Decision Log */}
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xl font-bold">5</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Decision Log</h3>
                <p className="text-gray-700">
                  Every significant decision documented with context, rationale, and outcome. Future teams understand not just what was decided, but why.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who It&apos;s For Section */}
      <section className="py-16 md:py-20 bg-background-alt">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-center mb-12">
            Who Uses the Master Playbook?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-6 bg-white rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold text-primary mb-4">WISER Certified Partners</h3>
              <p className="text-gray-700 text-sm mb-4">
                Use the Master Playbook as your starting point when implementing WISER with enterprise clients. Customize it for each engagement.
              </p>
              <Link href="/waitlist" className="text-primary font-medium text-sm hover:text-primary-dark">
                Become a Partner
              </Link>
            </div>

            <div className="p-6 bg-white rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold text-primary mb-4">Enterprise Teams</h3>
              <p className="text-gray-700 text-sm mb-4">
                Implement WISER internally with a framework that scales across departments and survives team changes.
              </p>
              <Link href="/assessment" className="text-primary font-medium text-sm hover:text-primary-dark">
                Check Your Fit
              </Link>
            </div>

            <div className="p-6 bg-white rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold text-primary mb-4">AI Practitioners</h3>
              <p className="text-gray-700 text-sm mb-4">
                Structure your AI work with proven governance patterns instead of reinventing the wheel for every project.
              </p>
              <Link href="/method" className="text-primary font-medium text-sm hover:text-primary-dark">
                Read the Method
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stop Reinventing. Start Building.
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            The WISER Master Playbook is available to certified partners and cohort members. Join the waitlist to get access when the founding cohort launches.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/waitlist"
              className="bg-accent text-white px-8 py-3 rounded-lg font-medium hover:bg-accent-dark transition-colors"
            >
              Join the Waitlist
            </Link>
            <Link
              href="/method"
              className="bg-white/10 text-white px-8 py-3 rounded-lg font-medium hover:bg-white/20 transition-colors"
            >
              Read the Full Method
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
