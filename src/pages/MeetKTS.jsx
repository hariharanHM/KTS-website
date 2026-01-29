import React from 'react';

export default function MeetKTS() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-kts-blue mb-8">Meet KTS</h1>
        <p className="text-xl text-gray-600 mb-6">Learn about our company, team, and values.</p>
        
        <div className="p-12 rounded-lg" style={{backgroundColor: '#AAC645'}}>
          <h2 className="text-2xl font-bold text-kts-blue mb-4">About Us</h2>
          <p className="text-white mb-6">
            Founded with a passion for excellence, KTS Fabrics has grown to become a leading name in the global textile industry. 
            Our commitment to quality and innovation drives everything we do.
          </p>
          
          <h2 className="text-2xl font-bold text-kts-blue mb-4 mt-8">Our Values</h2>
          <ul className="text-white space-y-3">
            <li>• <strong>Quality:</strong> Uncompromising standards in every product</li>
            <li>• <strong>Innovation:</strong> Continuous improvement and new solutions</li>
            <li>• <strong>Integrity:</strong> Honest and transparent dealings</li>
            <li>• <strong>Sustainability:</strong> Responsible manufacturing practices</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
