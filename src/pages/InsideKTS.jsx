import React from 'react';

export default function InsideKTS() {
  return (
    <div className="min-h-screen pt-20 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-kts-blue mb-8">Inside KTS</h1>
        <p className="text-xl text-gray-600 mb-6">Behind the scenes of our manufacturing excellence.</p>
        
        <div className="space-y-8">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-kts-blue mb-4">Manufacturing Process</h2>
            <p className="text-gray-700 mb-4">
              Our state-of-the-art manufacturing facilities are equipped with the latest technology to ensure precision and quality.
            </p>
            <ol className="text-gray-700 space-y-2 list-decimal list-inside">
              <li>Raw material sourcing and quality verification</li>
              <li>Advanced processing and treatment</li>
              <li>Rigorous quality testing</li>
              <li>Packaging and logistics</li>
            </ol>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-kts-blue mb-4">Our Facilities</h2>
            <p className="text-gray-700">
              Located in India, our manufacturing centers span multiple states with combined capacity to serve global markets efficiently.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-kts-blue mb-4">Innovation & Research</h2>
            <p className="text-gray-700">
              We invest continuously in R&D to develop new fabric technologies and improve our environmental footprint.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
