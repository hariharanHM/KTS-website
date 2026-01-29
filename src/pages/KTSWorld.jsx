import React from 'react';

export default function KTSWorld() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-kts-blue mb-8">KTS World</h1>
        <p className="text-xl text-gray-600 mb-6">Discover our global presence and impact in the textile industry.</p>
        
        <div className="p-12 rounded-lg" style={{backgroundColor: '#AAC645'}}>
          <h2 className="text-2xl font-bold text-kts-blue mb-4">Global Reach</h2>
          <p className="text-white mb-6">
            KTS Fabrics operates across multiple continents, serving clients in North America, Europe, Asia, and beyond. 
            Our global network ensures reliable supply and support wherever you are.
          </p>
          
          <h2 className="text-2xl font-bold text-kts-blue mb-4 mt-8">Our Vision</h2>
          <p className="text-white">
            To be the world's most trusted textile solutions provider, delivering excellence in quality, innovation, and customer service.
          </p>
        </div>
      </div>
    </div>
  );
}
