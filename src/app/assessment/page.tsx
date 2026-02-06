import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Assessment | WISER Method",
  description: "Assess your AI collaboration readiness",
};

export default function AssessmentPage() {
  return (
    <div className="container-wide py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-6">WISER Assessment</h1>
        <p className="text-secondary text-lg max-w-2xl mx-auto">
          {/* Assessment intro copy goes here */}
          Evaluate your current approach to AI collaboration.
        </p>
      </div>
      
      {/* Assessment component or link to assessment app will go here */}
      <div className="text-center py-12 bg-gray-50 rounded-lg">
        <p className="text-secondary">
          Assessment integration to be configured.
        </p>
      </div>
    </div>
  );
}
