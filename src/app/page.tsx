export default function Home() {
  return (
    <div className="container-wide py-20">
      <section className="text-center py-16">
        <h1 className="text-5xl font-bold mb-6">
          {/* Homepage headline goes here */}
          The WISER Method
        </h1>
        <p className="text-xl text-secondary max-w-2xl mx-auto mb-8">
          {/* Homepage subheadline goes here */}
          Placeholder: We will craft this content together.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="/waitlist"
            className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors"
          >
            Join Waitlist
          </a>
          <a
            href="/method"
            className="border border-gray-300 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Additional sections will be added here */}
      <section className="py-16 border-t">
        <p className="text-center text-secondary">
          Additional homepage sections to be developed.
        </p>
      </section>
    </div>
  );
}
