import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-background-alt py-20 md:py-28">
        <div className="container-wide text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
            Build What Matters
          </h1>
          <p className="text-2xl md:text-3xl text-primary font-medium mb-8">
            with AI First Principles
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/method"
              className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors"
            >
              Review the Method
            </Link>
            <Link
              href="/assessment"
              className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary hover:text-white transition-colors"
            >
              Take Assessment
            </Link>
          </div>
        </div>
      </section>

      {/* Abundance Section */}
      <section className="py-16 md:py-20">
        <div className="container-wide">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            WISER Enables Abundance
          </h2>
          <p className="text-lg text-foreground-muted text-center max-w-3xl mx-auto mb-12">
            AI eliminates bureaucracy, not work. The question is what you do with that liberated capacity: contract or expand?
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {/* Scarcity Path */}
            <div className="p-6 border-2 border-gray-200 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-foreground-muted">Scarcity Path</h3>
              <p className="text-foreground-muted">
                Uses AI to do the same work with fewer people. Short-term efficiency. Long-term stagnation.
              </p>
            </div>
            
            {/* Abundance Path */}
            <div className="p-6 border-2 border-primary rounded-xl bg-primary/5">
              <h3 className="text-xl font-semibold mb-3 text-primary">Abundance Path</h3>
              <p className="text-gray-700">
                Uses AI to tackle bigger problems with more capacity. The highest-value companies chose expansion.
              </p>
            </div>
          </div>
          
          <p className="text-center text-lg font-medium text-foreground max-w-3xl mx-auto">
            The highest-value companies (NVIDIA, Tesla, Epic, ASML) chose expansion. They build defensible advantage with lateral-thinking teams solving problems so complex that competitors can&apos;t replicate the solution.
          </p>
          
          <p className="text-center text-xl font-semibold text-primary mt-8 max-w-3xl mx-auto">
            WISER teaches teams to build AI systems that grow capability, not shrink headcount.
          </p>
        </div>
      </section>

      {/* Disciplined Momentum Section */}
      <section className="py-16 md:py-20 bg-background-alt">
        <div className="container-wide">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Disciplined Momentum
          </h2>
          <p className="text-xl text-foreground-muted text-center mb-12">
            For Teams That Can&apos;t Afford to Stop
          </p>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              WISER is built for teams where stagnation is more dangerous than change. Where maintaining systems that competitors are replacing feels like the safe choice. Where opportunities pass because moving feels too risky.
            </p>
            
            <p className="text-lg text-gray-700 mb-8">
              AI can obliterate that stagnation, but only if you dismantle bureaucracy rather than automate it. Bolting AI onto broken processes scales the mess.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 bg-white rounded-lg border border-gray-200">
                <h4 className="font-semibold text-primary mb-2">Continuous Evolution</h4>
                <p className="text-foreground-muted text-sm">Rebuild systems while they run</p>
              </div>
              <div className="p-4 bg-white rounded-lg border border-gray-200">
                <h4 className="font-semibold text-primary mb-2">Systematic Risk Burn-down</h4>
                <p className="text-foreground-muted text-sm">Reduce risk through evidence, not avoidance</p>
              </div>
              <div className="p-4 bg-white rounded-lg border border-gray-200">
                <h4 className="font-semibold text-primary mb-2">Living Documentation</h4>
                <p className="text-foreground-muted text-sm">Memory that survives the chaos</p>
              </div>
              <div className="p-4 bg-white rounded-lg border border-gray-200">
                <h4 className="font-semibold text-primary mb-2">Clear Ownership</h4>
                <p className="text-foreground-muted text-sm">Every decision has a person accountable</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Worldview Section */}
      <section className="py-16 md:py-20">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-center mb-12">
            The Method Operates on a Specific Worldview
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Action over Theory</h3>
              <p className="text-foreground-muted">
                Trust what can be proven, not what can be planned.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Evolution over Disruption</h3>
              <p className="text-foreground-muted">
                Rebuild the system while it runs, not shutting it down for a rewrite.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">People over Proxies</h3>
              <p className="text-foreground-muted">
                Value the experts doing the work over the ones documenting it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WISER Overview Section */}
      <section className="py-16 md:py-20 bg-background-alt">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-center mb-4">
            The WISER Method
          </h2>
          <p className="text-lg text-foreground-muted text-center mb-12 max-w-2xl mx-auto">
            Five phases that build organizational capacity to innovate continuously without rebuilding from scratch.
          </p>
          
          <div className="grid md:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {[
              { letter: "W", name: "Witness", desc: "Observation reveals what planning conceals" },
              { letter: "I", name: "Interrogate", desc: "Experiments find causes, not guesses" },
              { letter: "S", name: "Solve", desc: "Working software settles arguments" },
              { letter: "E", name: "Expand", desc: "Scale what earns trust" },
              { letter: "R", name: "Refine", desc: "Autonomy is grown, not designed" },
            ].map((phase) => (
              <div key={phase.letter} className="text-center p-4">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-2xl font-bold">{phase.letter}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{phase.name}</h3>
                <p className="text-sm text-foreground-muted">{phase.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link
              href="/method"
              className="text-primary font-medium hover:text-primary-dark transition-colors inline-flex items-center gap-2"
            >
              Read the Full Method
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* For Practitioners Section */}
      <section className="py-16 md:py-20">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-center mb-4">
            For Practitioners Who Build
          </h2>
          <p className="text-lg text-foreground-muted text-center mb-12 max-w-3xl mx-auto">
            WISER develops three capabilities that compound across your career: lateral thinking that AI can&apos;t replicate, professional certification that carries weight, and meaningful work that produces visible impact.
          </p>
          
          <div className="bg-gray-100 p-6 rounded-xl max-w-3xl mx-auto mb-12">
            <p className="text-gray-700 italic">
              The bestselling <em>Age of Invisible Machines</em> (Wiley) defines how organizations should implement AI. WISER puts that book into practice. Its author and other founding contributors to AI First Principles created the WISER Method after years helping Fortune 100 companies and federal institutions deploy transformative technology.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-6 border border-gray-200 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-primary">Career Investors</h3>
              <p className="text-foreground-muted text-sm">
                Your employer may not be investing in AI methodology training. The market will reward you anyway. WISER builds the judgment and creative problem-solving skills that make you irreplaceable.
              </p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-primary">Independent Practitioners</h3>
              <p className="text-foreground-muted text-sm">
                Clients hire consultants who can deliver results, not just advice. WISER provides the proven framework that makes your expertise systematically deliverable.
              </p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-primary">Organizations</h3>
              <p className="text-foreground-muted text-sm">
                The highest-value companies chose expansion over efficiency. WISER enables that abundance path, and investing in your team&apos;s development demonstrates you&apos;re on it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Ready to Start?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 p-6 rounded-xl text-center">
              <h3 className="text-xl font-semibold text-white mb-3">Check Fit</h3>
              <p className="text-white/80 text-sm mb-4">
                Twelve questions. Honest feedback. See if WISER aligns.
              </p>
              <Link
                href="/assessment"
                className="inline-block bg-white text-primary px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Take Assessment
              </Link>
            </div>
            
            <div className="bg-white/10 p-6 rounded-xl text-center">
              <h3 className="text-xl font-semibold text-white mb-3">Dive Deeper</h3>
              <p className="text-white/80 text-sm mb-4">
                Full methodology. Nothing hidden. Understand how WISER works.
              </p>
              <Link
                href="/method"
                className="inline-block bg-white text-primary px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Read Method
              </Link>
            </div>
            
            <div className="bg-white/10 p-6 rounded-xl text-center">
              <h3 className="text-xl font-semibold text-white mb-3">Get Started</h3>
              <p className="text-white/80 text-sm mb-4">
                Founding cohort. Limited to serious practitioners.
              </p>
              <Link
                href="/waitlist"
                className="inline-block bg-accent text-white px-6 py-2 rounded-lg font-medium hover:bg-accent-dark transition-colors"
              >
                Reserve Spot
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
