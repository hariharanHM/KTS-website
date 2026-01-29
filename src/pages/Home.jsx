import React from 'react';
import Hero from '../components/Hero';
import stitchingImage from '../assets/production-stitching.jpg';
import cuttingImage from '../assets/production-cutting.jpg';
import checkingImage from '../assets/production-checking.jpg';

export default function Home() {
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
    <div>
      <Hero />

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-kts-blue mb-12">Why Choose KTS Fabrics?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition">
              <div className="w-12 h-12 bg-kts-lime rounded-full flex items-center justify-center mb-4">
                <span className="text-kts-blue font-bold text-xl">✓</span>
              </div>
              <h3 className="text-xl font-bold text-kts-blue mb-3">26+ Years Experience</h3>
              <p className="text-gray-600">Over two decades of excellence in textile manufacturing and export.</p>
            </div>

            <div className="p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition">
              <div className="w-12 h-12 bg-kts-lime rounded-full flex items-center justify-center mb-4">
                <span className="text-kts-blue font-bold text-xl">✓</span>
              </div>
              <h3 className="text-xl font-bold text-kts-blue mb-3">Global Trust</h3>
              <p className="text-gray-600">Trusted by buyers worldwide for quality and reliability.</p>
            </div>

            <div className="p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition">
              <div className="w-12 h-12 bg-kts-lime rounded-full flex items-center justify-center mb-4">
                <span className="text-kts-blue font-bold text-xl">✓</span>
              </div>
              <h3 className="text-xl font-bold text-kts-blue mb-3">Made in India</h3>
              <p className="text-gray-600">Premium quality solutions crafted with Indian excellence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Production Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-kts-blue mb-12 text-center">Our Production Sections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
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
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-kts-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Partner With Us?</h2>
          <p className="text-xl text-gray-200 mb-8">Get a personalized quote for your textile needs today.</p>
          <button className="px-8 py-4 bg-kts-lime text-kts-blue rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105">
            Get a Quote Now
          </button>
        </div>
      </section>
    </div>
  );
}
