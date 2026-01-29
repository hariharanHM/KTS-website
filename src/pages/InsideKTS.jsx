import React from 'react';
import stitchingImage from '../assets/production-stitching.jpg';
import cuttingImage from '../assets/production-cutting.jpg';
import checkingImage from '../assets/production-checking.jpg';

export default function InsideKTS() {
  const sections = [
    {
      title: 'Stitching Section',
      description: 'Our stitching unit delivers high-quality, uniform finishes using advanced equipment and expert craftsmanship—ensuring strong seams and aesthetic precision.',
      image: stitchingImage,
    },
    {
      title: 'Cutting Section',
      description: 'Our cutting process ensures clean, consistent shapes for every fabric piece using precision-guided methods—optimizing both quality and efficiency for large-scale and custom orders.',
      image: cuttingImage,
    },
    {
      title: 'Checking Section',
      description: 'Our dedicated checking team inspects each fabric roll for color, texture, and stitching accuracy—ensuring flawless quality before delivery.',
      image: checkingImage,
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-kts-blue mb-8">Inside KTS</h1>
        <p className="text-xl text-gray-600 mb-12">Behind the scenes of our manufacturing excellence.</p>
        
        <div className="space-y-8 mb-16">
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
        </div>

        {/* Three Cards Section */}
        <h2 className="text-3xl font-bold text-kts-blue mb-8">Our Production Sections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <img 
                  src={section.image} 
                  alt={section.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-kts-blue mb-3">{section.title}</h3>
                <p className="text-gray-600 leading-relaxed">{section.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
