import React from 'react';
import fabricImage from '../assets/hero-fabric.png';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${fabricImage})`,
        }}
      ></div>

      {/* Dark Overlay for text readability */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* KTS Logo/Text */}
        <div className="mb-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
            <span className="text-kts-blue">KTS</span>
            <span className="text-kts-lime ml-2 sm:ml-4">FABRICS</span>
          </h1>
        </div>

        {/* Headline */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white drop-shadow-lg mb-8 leading-tight">
          "Global Textile Solutions, Crafted in India"
        </h2>

        {/* Call to Action Button */}
        <a href="https://wa.me/919994746541?text=I%20need%20a%20quote" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-kts-blue text-white rounded-full font-bold text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
          Get a Quote
        </a>
      </div>

      {/* Bottom Stats */}
      <div className="absolute bottom-8 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between text-center sm:text-left">
          <div className="text-white font-semibold text-lg drop-shadow-md mb-4 sm:mb-0">
            26+ Years in Export
          </div>
          <div className="text-white font-semibold text-lg drop-shadow-md">
            Trusted by Global Buyers
          </div>
        </div>
      </div>
    </section>
  );
}
