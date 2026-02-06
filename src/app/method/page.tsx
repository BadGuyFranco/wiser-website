import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Method | WISER Method",
  description: "Learn about the WISER Method framework",
};

export default function MethodPage() {
  return (
    <div className="container-wide py-20">
      <h1 className="text-4xl font-bold mb-8">The WISER Method</h1>
      <p className="text-secondary text-lg mb-8">
        Content for the Method page to be developed.
      </p>
      
      {/* Method sections will go here */}
      {/* W - Warm-up */}
      {/* I - Interrogate */}
      {/* S - Solve */}
      {/* E - Expand */}
      {/* R - Refine */}
    </div>
  );
}
