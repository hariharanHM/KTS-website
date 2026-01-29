import React from 'react';

export default function WhatWeOffer() {
  return (
    <div className="min-h-screen pt-20 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-kts-blue mb-8">What We Offer</h1>
        <p className="text-xl text-gray-600 mb-6">Explore our comprehensive range of textile solutions.</p>
        
        <div className="space-y-8">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-kts-blue mb-4">Product Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-kts-blue mb-2">Fabrics</h3>
                <p className="text-gray-700">Wide range of textile materials for various applications</p>
              </div>
              <div>
                <h3 className="font-bold text-kts-blue mb-2">Custom Solutions</h3>
                <p className="text-gray-700">Tailored products to meet specific requirements</p>
              </div>
              <div>
                <h3 className="font-bold text-kts-blue mb-2">Bulk Orders</h3>
                <p className="text-gray-700">Competitive pricing for large volume requirements</p>
              </div>
              <div>
                <h3 className="font-bold text-kts-blue mb-2">Technical Support</h3>
                <p className="text-gray-700">Expert guidance and consultation services</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-kts-blue mb-4">Quality Standards</h2>
            <p className="text-gray-700">
              All our products meet international quality standards and certifications. 
              We maintain rigorous quality control processes throughout manufacturing and delivery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
