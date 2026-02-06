import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--accent) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="container-wide text-center relative">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground tracking-tight">
            Build What Matters
          </h1>
          <p className="text-2xl md:text-3xl text-accent font-medium mb-10">
            with AI First Principles
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/method"
              className="bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent-light transition-all text-lg"
            >
              Review the Method
            </Link>
            <Link
              href="/assessment"
              className="border-2 border-foreground text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-foreground hover:text-background transition-all text-lg"
            >
              Take Assessment
            </Link>
          </div>
        </div>
      </section>

      {/* Abundance Section */}
      <section className="py-20 md:py-28 border-t border-border">
        <div className="container-wide">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-foreground">
            WISER Enables Abundance
          </h2>
          <p className="text-lg text-foreground-muted text-center max-w-3xl mx-auto mb-16">
            AI eliminates bureaucracy, not work. The question is what you do with that liberated capacity: contract or expand?
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {/* Scarcity Path */}
            <div className="p-8 border border-border rounded-xl bg-background-elevated">
              <h3 className="text-xl font-semibold mb-4 text-foreground-muted">Scarcity Path</h3>
              <p className="text-foreground-subtle">
                Uses AI to do the same work with fewer people. Short-term efficiency. Long-term stagnation.
              </p>
            </div>
            
            {/* Abundance Path */}
            <div className="p-8 border-2 border-accent rounded-xl bg-background-elevated">
              <h3 className="text-xl font-semibold mb-4 text-accent">Abundance Path</h3>
              <p className="text-foreground-muted">
                Uses AI to tackle bigger problems with more capacity. The highest-value companies chose expansion.
              </p>
            </div>
          </div>
          
          <p className="text-center text-lg text-foreground-muted max-w-3xl mx-auto">
            The highest-value companies (NVIDIA, Tesla, Epic, ASML) chose expansion. They build defensible advantage with lateral-thinking teams solving problems so complex that competitors can&apos;t replicate the solution.
          </p>
          
          <p className="text-center text-xl font-semibold text-accent mt-8 max-w-3xl mx-auto">
            WISER teaches teams to build AI systems that grow capability, not shrink headcount.
          </p>
        </div>
      </section>

      {/* Disciplined Momentum Section */}
      <section className="py-20 md:py-28 bg-background-alt border-t border-border">
        <div className="container-wide">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            Disciplined Momentum
          </h2>
          <p className="text-xl text-foreground-muted text-center mb-16">
            For Teams That Can&apos;t Afford to Stop
          </p>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-foreground-muted mb-6">
              WISER is built for teams where stagnation is more dangerous than change. Where maintaining systems that competitors are replacing feels like the safe choice. Where opportunities pass because moving feels too risky.
            </p>
            
            <p className="text-lg text-foreground-muted mb-12">
              AI can obliterate that stagnation, but only if you dismantle bureaucracy rather than automate it. Bolting AI onto broken processes scales the mess.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="p-6 bg-background-elevated rounded-xl border border-border">
                <h4 className="font-semibold text-accent mb-2">Continuous Evolution</h4>
                <p className="text-foreground-muted text-sm">Rebuild systems while they run</p>
              </div>
              <div className="p-6 bg-background-elevated rounded-xl border border-border">
                <h4 className="font-semibold text-accent mb-2">Systematic Risk Burn-down</h4>
                <p className="text-foreground-muted text-sm">Reduce risk through evidence, not avoidance</p>
              </div>
              <div className="p-6 bg-background-elevated rounded-xl border border-border">
                <h4 className="font-semibold text-accent mb-2">Living Documentation</h4>
                <p className="text-foreground-muted text-sm">Memory that survives the chaos</p>
              </div>
              <div className="p-6 bg-background-elevated rounded-xl border border-border">
                <h4 className="font-semibold text-accent mb-2">Clear Ownership</h4>
                <p className="text-foreground-muted text-sm">Every decision has a person accountable</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Worldview Section */}
      <section className="py-20 md:py-28 border-t border-border">
        <div className="container-wide">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
            The Method Operates on a Specific Worldview
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-8">
              <div className="text-5xl font-bold text-accent mb-6">01</div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Action over Theory</h3>
              <p className="text-foreground-muted">
                Trust what can be proven, not what can be planned.
              </p>
            </div>
            
            <div className="text-center p-8">
              <div className="text-5xl font-bold text-accent mb-6">02</div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Evolution over Disruption</h3>
              <p className="text-foreground-muted">
                Rebuild the system while it runs, not shutting it down for a rewrite.
              </p>
            </div>
            
            <div className="text-center p-8">
              <div className="text-5xl font-bold text-accent mb-6">03</div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">People over Proxies</h3>
              <p className="text-foreground-muted">
                Value the experts doing the work over the ones documenting it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WISER Overview Section */}
      <section className="py-20 md:py-28 bg-background-alt border-t border-border">
        <div className="container-wide">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            The WISER Method
          </h2>
          <p className="text-lg text-foreground-muted text-center mb-16 max-w-2xl mx-auto">
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
              <div key={phase.letter} className="text-center p-6">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-4">{phase.letter}</div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{phase.name}</h3>
                <p className="text-sm text-foreground-muted">{phase.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/method"
              className="text-accent font-semibold hover:text-accent-light transition-colors inline-flex items-center gap-2"
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
      <section className="py-20 md:py-28 border-t border-border">
        <div className="container-wide">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            For Practitioners Who Build
          </h2>
          <p className="text-lg text-foreground-muted text-center mb-16 max-w-3xl mx-auto">
            WISER develops three capabilities that compound across your career: lateral thinking that AI can&apos;t replicate, professional certification that carries weight, and meaningful work that produces visible impact.
          </p>
          
          <div className="bg-background-elevated border border-border p-8 rounded-xl max-w-3xl mx-auto mb-16">
            <p className="text-foreground-muted italic">
              The bestselling <em className="text-foreground">Age of Invisible Machines</em> (Wiley) defines how organizations should implement AI. WISER puts that book into practice. Its author and other founding contributors to AI First Principles created the WISER Method after years helping Fortune 100 companies and federal institutions deploy transformative technology.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-8 border border-border rounded-xl bg-background-elevated">
              <h3 className="text-xl font-semibold mb-4 text-accent">Career Investors</h3>
              <p className="text-foreground-muted text-sm">
                Your employer may not be investing in AI methodology training. The market will reward you anyway. WISER builds the judgment and creative problem-solving skills that make you irreplaceable.
              </p>
            </div>
            
            <div className="p-8 border border-border rounded-xl bg-background-elevated">
              <h3 className="text-xl font-semibold mb-4 text-accent">Independent Practitioners</h3>
              <p className="text-foreground-muted text-sm">
                Clients hire consultants who can deliver results, not just advice. WISER provides the proven framework that makes your expertise systematically deliverable.
              </p>
            </div>
            
            <div className="p-8 border border-border rounded-xl bg-background-elevated">
              <h3 className="text-xl font-semibold mb-4 text-accent">Organizations</h3>
              <p className="text-foreground-muted text-sm">
                The highest-value companies chose expansion over efficiency. WISER enables that abundance path, and investing in your team&apos;s development demonstrates you&apos;re on it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-background-alt border-t border-border">
        <div className="container-wide">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Ready to Start?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-8 rounded-xl text-center border border-border bg-background-elevated">
              <h3 className="text-xl font-semibold text-foreground mb-4">Check Fit</h3>
              <p className="text-foreground-muted text-sm mb-6">
                Twelve questions. Honest feedback. See if WISER aligns.
              </p>
              <Link
                href="/assessment"
                className="inline-block border-2 border-foreground text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-foreground hover:text-background transition-all"
              >
                Take Assessment
              </Link>
            </div>
            
            <div className="p-8 rounded-xl text-center border border-border bg-background-elevated">
              <h3 className="text-xl font-semibold text-foreground mb-4">Dive Deeper</h3>
              <p className="text-foreground-muted text-sm mb-6">
                Full methodology. Nothing hidden. Understand how WISER works.
              </p>
              <Link
                href="/method"
                className="inline-block border-2 border-foreground text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-foreground hover:text-background transition-all"
              >
                Read Method
              </Link>
            </div>
            
            <div className="p-8 rounded-xl text-center border-2 border-accent bg-background-elevated">
              <h3 className="text-xl font-semibold text-foreground mb-4">Get Started</h3>
              <p className="text-foreground-muted text-sm mb-6">
                Founding cohort. Limited to serious practitioners.
              </p>
              <Link
                href="/waitlist"
                className="inline-block bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-light transition-all"
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
