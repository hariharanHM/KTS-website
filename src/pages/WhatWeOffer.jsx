import React from 'react';

export default function WhatWeOffer() {
  const products = [
    { name: 'Bath Cushions', image: 'https://images.unsplash.com/photo-1598083865351-844a74a20e63?w=400&h=400&fit=crop' },
    { name: 'Chair Pads', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop' },
    { name: 'Gloves', image: 'https://images.unsplash.com/photo-1608306403443-21ac6c6099ce?w=400&h=400&fit=crop' },
    { name: 'Table Runners', image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=400&h=400&fit=crop' },
    { name: 'Aprons', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=400&fit=crop' },
    { name: 'Bed Spreads', image: 'https://images.unsplash.com/photo-1597388620319-85c4e88268f6?w=400&h=400&fit=crop' },
    { name: 'Cushions', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop' },
    { name: 'Cushion Covers', image: 'https://images.unsplash.com/photo-1589985643862-a7dda69b3e29?w=400&h=400&fit=crop' },
    { name: 'Kitchen Towels', image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400&h=400&fit=crop' },
    { name: 'Pot Holders', image: 'https://images.unsplash.com/photo-1610701569372-440827207a10?w=400&h=400&fit=crop' },
    { name: 'Table Cloths', image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=400&h=400&fit=crop' },
    { name: 'Pillows', image: 'https://images.unsplash.com/photo-1584622281867-8ec02d01c3b8?w=400&h=400&fit=crop' },
    { name: 'Scarfs', image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=400&fit=crop' },
    { name: 'Rugs Mat', image: 'https://images.unsplash.com/photo-1533506471043-8e88ce7b6d8f?w=400&h=400&fit=crop' },
    { name: 'Mats', image: 'https://images.unsplash.com/photo-1595847510973-c8b76ee9b51b?w=400&h=400&fit=crop' },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-kts-blue mb-8">What We Offer</h1>
        <p className="text-xl text-gray-600 mb-6">Explore our comprehensive range of textile solutions.</p>
        
        <div className="space-y-8">
          <div className=" p-8 rounded-lg" style={{backgroundColor: '#AAC645'}}>
            <h2 className="text-2xl font-bold text-kts-blue mb-4">Product Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-kts-blue mb-2">Fabrics</h3>
                <p className="text-white">Wide range of textile materials for various applications</p>
              </div>
              <div>
                <h3 className="font-bold text-kts-blue mb-2">Custom Solutions</h3>
                <p className="text-white">Tailored products to meet specific requirements</p>
              </div>
              <div>
                <h3 className="font-bold text-kts-blue mb-2">Bulk Orders</h3>
                <p className="text-white">Competitive pricing for large volume requirements</p>
              </div>
              <div>
                <h3 className="font-bold text-kts-blue mb-2">Technical Support</h3>
                <p className="text-white">Expert guidance and consultation services</p>
              </div>
            </div>
          </div>

          <div className=" p-8 rounded-lg" style={{backgroundColor: '#AAC645'}}>
            <h2 className="text-2xl font-bold text-kts-blue mb-4">Quality Standards</h2>
            <p className="text-white">
              All our products meet international quality standards and certifications. 
              We maintain rigorous quality control processes throughout manufacturing and delivery.
            </p>
          </div>

          {/* Products Section */}
          {/* <div className="bg-white p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-kts-blue mb-8">Our Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48 overflow-hidden bg-gray-200">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2" style={{color: '#241C64'}}>{product.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
