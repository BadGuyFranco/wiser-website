export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-background-alt py-20">
        <div className="container-wide text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            The WISER Method
          </h1>
          <p className="text-xl text-foreground-muted max-w-2xl mx-auto mb-8">
            Placeholder: A framework for effective AI collaboration. We will craft this content together.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="/waitlist"
              className="bg-accent text-white px-8 py-3 rounded-lg font-medium hover:bg-accent-dark transition-colors"
            >
              Join Waitlist
            </a>
            <a
              href="/method"
              className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary hover:text-white transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why WISER?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">W</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Warm-up</h3>
              <p className="text-foreground-muted">
                Prepare your context and set the stage for effective AI collaboration.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">I</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Interrogate</h3>
              <p className="text-foreground-muted">
                Ask the right questions to get the insights you need.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">S</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Solve</h3>
              <p className="text-foreground-muted">
                Work together with AI to develop solutions.
              </p>
            </div>
            {/* Feature 4 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">E</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expand</h3>
              <p className="text-foreground-muted">
                Build on initial solutions to create comprehensive results.
              </p>
            </div>
            {/* Feature 5 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">R</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Refine</h3>
              <p className="text-foreground-muted">
                Polish and perfect the output through iteration.
              </p>
            </div>
            {/* CTA */}
            <div className="text-center p-6 flex items-center justify-center">
              <a
                href="/method"
                className="text-primary font-medium hover:text-primary-dark transition-colors"
              >
                Learn the full method &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="container-wide text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to transform how you work with AI?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Join the waitlist to be notified when the WISER Method launches.
          </p>
          <a
            href="/waitlist"
            className="bg-accent text-white px-8 py-3 rounded-lg font-medium hover:bg-accent-dark transition-colors inline-block"
          >
            Join the Waitlist
          </a>
        </div>
      </section>
    </div>
  );
}
