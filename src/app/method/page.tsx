import Link from "next/link";

export default function MethodPage() {
  return (
    <div className="py-12 md:py-16">
      {/* Header */}
      <header className="container-narrow mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">The WISER Method</h1>
        <p className="text-xl text-primary font-medium mb-6">
          Mastering perpetual innovation using{" "}
          <a
            href="https://aifirstprinciples.org"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-primary-dark"
          >
            AI First Principles
          </a>
        </p>
        
        {/* Quick Navigation */}
        <div className="flex flex-wrap gap-3 text-sm">
          <span className="text-foreground-muted">Jump to:</span>
          <a href="#witness" className="text-primary hover:text-primary-dark">Witness</a>
          <a href="#interrogate" className="text-primary hover:text-primary-dark">Interrogate</a>
          <a href="#solve" className="text-primary hover:text-primary-dark">Solve</a>
          <a href="#expand" className="text-primary hover:text-primary-dark">Expand</a>
          <a href="#refine" className="text-primary hover:text-primary-dark">Refine</a>
        </div>
      </header>

      {/* Content */}
      <article className="container-narrow prose">
        {/* The Objective */}
        <section className="mb-12">
          <h2>The Objective</h2>
          <p>
            WISER enables teams to innovate continuously without operational disruption. The method produces four capabilities: continuous evolution, systematic risk burn-down, living documentation, and clear ownership of every decision.
          </p>
        </section>

        {/* The Problem */}
        <section className="mb-12">
          <h2>The Problem</h2>
          <p>
            WISER is built for teams where stagnation is more dangerous than change: where maintaining systems that competitors are replacing feels like the safe choice, where changing things feels riskier than living with dysfunction, where opportunities pass because moving feels too risky.
          </p>
          <p>
            AI can obliterate that stagnation, but only if teams dismantle bureaucracy rather than automate it. Bolting AI onto broken processes scales the mess. Since organizations can&apos;t pause operations to rebuild from scratch, they need a way to advance that fixes what&apos;s broken without stopping what works.
          </p>
        </section>

        {/* The Worldview */}
        <section className="mb-12">
          <h2>The Worldview</h2>
          <p>The method operates on a specific worldview:</p>
          <ul>
            <li><strong>Action over theory:</strong> Trusting what can be proven, not what can be planned.</li>
            <li><strong>Evolution over disruption:</strong> Rebuilding the system while it runs, not shutting it down for a rewrite.</li>
            <li><strong>People over proxies:</strong> Valuing the experts doing the work over the ones documenting it.</li>
          </ul>
          <p>
            For teams committed to perpetual innovation as competitive strategy, WISER provides the structure that makes it possible: <strong>disciplined momentum</strong>.
          </p>
        </section>

        {/* How WISER Works */}
        <section className="mb-12">
          <h2>How WISER Works</h2>
          <p>
            WISER builds perpetual innovation through systematic risk burn-down: identify the highest-risk items, reduce them through evidence and iteration, move to the next. Bounded improvements reveal system behavior, validate what works, expand capability. Capability creates decisions. Decisions drive action. Action expands capability. The cycle feeds itself when you have structure to prevent chaos.
          </p>
        </section>

        {/* WISER Method Structure */}
        <section className="mb-12">
          <h2>WISER Method Structure</h2>
          <p>
            WISER operates as a cohesive system, not a linear checklist. <strong>Canons</strong> drive the strategic momentum, moving from observation to scale, while <strong>Plays</strong> adapt that strategy to the specific reality of the domain. To prevent this speed from breaking the organization, a <strong>Playbook</strong> enforces explicit constraints (serving as living documentation that prevents organizational amnesia), and <strong>Positions</strong> assign human accountability for critical decisions. The result is a self-correcting engine that scales innovation while managing risk deliberately.
          </p>

          <h3>What Makes WISER Different</h3>
          <p>WISER&apos;s competitive advantage emerges from three integrated layers:</p>
          <ol>
            <li><strong>AI First Principles</strong> - A principled foundation specifically designed for AI system development, addressing unique challenges (silent failures, probabilistic behavior, accountability needs)</li>
            <li><strong>Play Architecture</strong> - Systematic context adaptation without rigid prescription or &quot;figure it out yourself&quot; flexibility</li>
            <li><strong>Integration</strong> - Principles constrain and inform Plays; Plays operationalize Principles in context. Neither works effectively without the other.</li>
          </ol>
          <p>
            This creates a methodology that&apos;s simultaneously principled and practical, structured and adaptable characteristics that don&apos;t often coexist in process frameworks.
          </p>

          <h3>How WISER Works in Practice</h3>
          <p>
            WISER Canons follow a logical sequence (Witness to Interrogate to Solve to Expand to Refine), but iteration is expected, not failure. Discovering new information while in Expand may require returning to Interrogate to test assumptions. This scaffolded flexibility (structure that permits discovery) is what enables lateral thinking at scale without descending into chaos.
          </p>
        </section>

        {/* WISER Canons */}
        <section className="mb-12">
          <h2>WISER Canons</h2>
          <p>
            The W-I-S-E-R Canons build organizational capacity to innovate continuously without rebuilding from scratch. They reflect what works when teams need to evolve systems that can&apos;t shut down.
          </p>

          {/* Witness */}
          <div id="witness" className="scroll-mt-24 mt-10 p-6 bg-background-alt rounded-xl">
            <h3 className="text-primary">Witness</h3>
            <p className="italic text-lg text-foreground-muted mb-4">
              Observation reveals what planning conceals.
            </p>
            <p>
              This phase begins here because documentation theater often hides the workarounds and hacks that keep systems running. Optimizing based on the official process often means optimizing fiction. Witness demands mapping the friction people actually feel, forcing the solution to address real problems rather than theoretical ones.
            </p>
            <blockquote>
              <strong>AI First Principles Driving Witness:</strong>
              <ul>
                <li><strong>Build from User Experience:</strong> Design systems from lived experience, not distant observation.</li>
                <li><strong>Reveal the Invisible:</strong> Pursue what is hard to explain to expose ignorance hiding in documentation.</li>
                <li><strong>Discovery Before Disruption:</strong> Identify purpose before simplifying systems that aren&apos;t fully understood.</li>
                <li><strong>Deception Destroys Trust:</strong> Expose broken reality. Pretending broken processes work destroys consensus needed to fix them.</li>
              </ul>
            </blockquote>
          </div>

          {/* Interrogate */}
          <div id="interrogate" className="scroll-mt-24 mt-10 p-6 bg-background-alt rounded-xl">
            <h3 className="text-primary">Interrogate</h3>
            <p className="italic text-lg text-foreground-muted mb-4">
              Observation finds pain. Experiments find causes.
            </p>
            <p>
              This phase exists to avoid the most common failure mode: building the wrong solution perfectly. Instead of committing to months of development, rapid experiments reveal root causes. The goal is not to guess what is broken, but to force the system to reveal it.
            </p>
            <blockquote>
              <strong>AI First Principles Driving Interrogate:</strong>
              <ul>
                <li><strong>Iterate Towards What Works:</strong> Learn by doing, not planning. Test assumptions before committing to solutions.</li>
                <li><strong>Reveal the Invisible:</strong> Expose hidden root causes that surface-level observation misses.</li>
                <li><strong>Build from User Experience:</strong> Test hypotheses with people doing the work, not proxies or managers.</li>
                <li><strong>AI Inherits Messiness:</strong> Define what&apos;s prohibited over what&apos;s required, acknowledging variation is inevitable.</li>
                <li><strong>Ambiguity Is Wisdom:</strong> Surface probabilities rather than forcing binary answers during exploration.</li>
                <li><strong>Deception Destroys Trust:</strong> Label assumptions explicitly. False certainty during experimentation kills credibility.</li>
              </ul>
            </blockquote>
          </div>

          {/* Solve */}
          <div id="solve" className="scroll-mt-24 mt-10 p-6 bg-background-alt rounded-xl">
            <h3 className="text-primary">Solve</h3>
            <p className="italic text-lg text-foreground-muted mb-4">
              Experiments find causes. Solutions earn trust.
            </p>
            <p>
              The focus is on delivering a single, working solution that demonstrates undeniable value. Working software settles arguments. This approach secures the organizational permission required to touch critical systems by delivering a win that matters.
            </p>
            <blockquote>
              <strong>AI First Principles Driving Solve:</strong>
              <ul>
                <li><strong>Iterate Towards What Works:</strong> Validate what works gradually through tangible impact.</li>
                <li><strong>Reveal the Invisible:</strong> Demonstrate value that was previously theoretical through working software.</li>
                <li><strong>Build from User Experience:</strong> Solutions must fit user reality, not just technical requirements.</li>
                <li><strong>Justify Resource Consumption:</strong> Optimize value-per-resource ratio by focusing on high-impact solutions.</li>
                <li><strong>People Own Objectives:</strong> Ensure a person is accountable for outcomes, not the algorithm.</li>
                <li><strong>Deception Destroys Trust:</strong> Demonstrate verifiable impact. Solutions hiding flaws break at scale.</li>
              </ul>
            </blockquote>
          </div>

          {/* Expand */}
          <div id="expand" className="scroll-mt-24 mt-10 p-6 bg-background-alt rounded-xl">
            <h3 className="text-primary">Expand</h3>
            <p className="italic text-lg text-foreground-muted mb-4">
              Earned trust enables systematic change toward autonomy.
            </p>
            <p>
              Modularizing the successful component allows it to solve related problems while maintaining explicit human oversight. This scales the solution&apos;s reach without introducing the systemic risk that comes from all-or-nothing deployments.
            </p>
            <blockquote>
              <strong>AI First Principles Driving Expand:</strong>
              <ul>
                <li><strong>Decompose Incrementally:</strong> Dismantle legacy complexity piece-by-piece, allowing isolated components to decompose naturally.</li>
                <li><strong>Reveal the Invisible:</strong> Identify invisible dependencies and downstream effects before they become systemic failures.</li>
                <li><strong>Build from User Experience:</strong> User experience must remain primary constraint as systems scale, not an afterthought.</li>
                <li><strong>Justify Resource Consumption:</strong> Scale only what earns its cost. Expansion must improve unit economics, not just volume.</li>
                <li><strong>AI Fails Silently:</strong> Build feedback loops over post-mortems as systems expand beyond initial pilots.</li>
                <li><strong>People Own Objectives:</strong> Maintain human ownership even as AI capabilities scale.</li>
                <li><strong>Deception Destroys Trust:</strong> Make AI obvious. As systems expand, users must distinguish between human and AI interactions.</li>
              </ul>
            </blockquote>
          </div>

          {/* Refine */}
          <div id="refine" className="scroll-mt-24 mt-10 p-6 bg-background-alt rounded-xl">
            <h3 className="text-primary">Refine</h3>
            <p className="italic text-lg text-foreground-muted mb-4">
              Autonomy is not designed, it is grown.
            </p>
            <p>
              AI autonomy increases as reliability is proven. Trust is earned, not designed. Agency transfers to the system as it proves it can make the decision correctly without breaking the boundaries defined in your Playbook.
            </p>
            <blockquote>
              <strong>AI First Principles Driving Refine:</strong>
              <ul>
                <li><strong>AI Inherits Messiness:</strong> Accept that AI is inconsistent and requires structure to operate effectively.</li>
                <li><strong>Reveal the Invisible:</strong> Detect invisible drift and silent failures through rigorous feedback loops.</li>
                <li><strong>Build from User Experience:</strong> Autonomy should reduce friction, not create new cognitive load.</li>
                <li><strong>Justify Resource Consumption:</strong> Refinement should increase efficiency. Roll back autonomy that costs more than it solves.</li>
                <li><strong>Decompose Incrementally:</strong> Autonomy is not binary; it grows in stages (supervised, semi-autonomous, fully autonomous).</li>
                <li><strong>AI Fails Silently:</strong> Rely on feedback loops to catch errors before they compound.</li>
                <li><strong>Deception Destroys Trust:</strong> Make AI obvious, ensuring people know when they&apos;re interacting with the system as autonomy grows.</li>
              </ul>
            </blockquote>
          </div>
        </section>

        {/* WISER Plays */}
        <section className="mb-12">
          <h2>WISER Plays</h2>
          <p>
            Plays transform the abstract WISER framework into tactical execution for specific contexts, giving practitioners proven patterns instead of blank pages.
          </p>
          <p>Plays operate at variable specificity:</p>
          <ul>
            <li><strong>Domain-specific:</strong> Healthcare, financial services, manufacturing</li>
            <li><strong>Context-specific:</strong> Startups, enterprises, regulated industries</li>
            <li><strong>Generic:</strong> Broadly applicable across contexts</li>
          </ul>
          <p>
            This flexibility is intentional. Plays aren&apos;t prescriptive rules; they&apos;re starting points for iteration. A startup might begin with a generic Play, adapt it to their context, then contribute a refined &quot;B2B SaaS Startup Play&quot; back to the community.
          </p>
          <p>
            Plays don&apos;t just execute the Canons; they define how a Playbook is structured and how Positions are filled for a specific context. Instead of starting with a blank page, builders start with a tactical guide proven to work in similar domains.
          </p>
        </section>

        {/* WISER Playbooks */}
        <section className="mb-12">
          <h2>WISER Playbooks</h2>
          <p>
            A Playbook is the memory that survives the chaos. It captures the current state, objectives, and boundaries in a single place, preventing the insights that drove success in <strong>Solve</strong> from fading before they can be scaled in <strong>Expand</strong>. Every decision builds on previous learning rather than starting from scratch. By making risks and constraints explicit, a Playbook prevents the organizational amnesia that kills momentum.
          </p>
          <p>
            <strong>A Playbook adapts.</strong> Traditional plans execute once and collect dust. A Playbook absorbs every outcome, every adjustment, every hard-won insight. Run a Play, see what happens, update the Playbook. What worked becomes doctrine. What failed becomes warning. The Playbook guiding your next decision carries the memory of every previous one.
          </p>
        </section>

        {/* Positions */}
        <section className="mb-12">
          <h2>Positions</h2>
          <p>
            Principle-driven tensions don&apos;t resolve themselves. Someone must own the decision when the team can&apos;t agree. Someone must advocate for users when builders optimize for elegance. Someone must challenge assumptions before they become expensive failures.
          </p>
          <p>
            Positions assign these nine critical accountabilities to specific people: Authority, Empathy, Translation, Context, Skepticism, Execution, Safety, Stewardship, Integrity. Plays define how to fill them for your team size and domain. One person covering multiple Positions on small teams, distributed across specialists in larger organizations.
          </p>
        </section>

        {/* The Outcome */}
        <section className="mb-12">
          <h2>The Outcome</h2>
          <p>Teams operating on WISER gain four capabilities they lacked before:</p>
          <ul>
            <li><strong>Continuous evolution</strong> - Rebuild systems while they run</li>
            <li><strong>Systematic risk burn-down</strong> - Identify and reduce risk through evidence</li>
            <li><strong>Living documentation</strong> - A Playbook that prevents organizational amnesia</li>
            <li><strong>Clear ownership</strong> - Every decision has a person accountable, even as AI scales</li>
          </ul>
        </section>
      </article>

      {/* Footer CTA */}
      <section className="container-narrow mt-16 p-8 bg-primary rounded-xl text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Ready to Implement?</h2>
        <p className="text-white/80 mb-6 max-w-xl mx-auto">
          The methodology is free. The WISER Certified Partner program gives you live training, cohort accountability, and professional certification.
        </p>
        <Link
          href="/waitlist"
          className="inline-block bg-accent text-white px-8 py-3 rounded-lg font-medium hover:bg-accent-dark transition-colors"
        >
          Join the Founding Cohort Waitlist
        </Link>
      </section>
    </div>
  );
}
