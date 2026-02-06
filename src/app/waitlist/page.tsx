import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join the Waitlist | WISER Method",
  description: "Be the first to know when the WISER Method launches",
};

export default function WaitlistPage() {
  return (
    <div className="container-narrow py-20">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6">Join the Waitlist</h1>
        <p className="text-secondary text-lg mb-8">
          {/* Waitlist copy goes here */}
          Be among the first to access the WISER Method.
        </p>
        
        {/* Waitlist form will go here */}
        <div className="max-w-md mx-auto">
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              disabled
            />
            <button
              type="submit"
              className="w-full bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors disabled:opacity-50"
              disabled
            >
              Join Waitlist
            </button>
            <p className="text-sm text-secondary">
              Form integration to be configured.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
