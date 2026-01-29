import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-kts-blue text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-kts-lime">KTS</span> FABRICS
            </h3>
            <p className="text-gray-300">Global Textile Solutions, Crafted in India</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-kts-lime">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-kts-lime transition">KTS World</a></li>
              <li><a href="#" className="hover:text-kts-lime transition">Meet KTS</a></li>
              <li><a href="#" className="hover:text-kts-lime transition">What We Offer</a></li>
              <li><a href="#" className="hover:text-kts-lime transition">Inside KTS</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-kts-lime">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Email: info@ktsfabrics.com</li>
              <li>Phone: +91 XXXX XXX XXX</li>
              <li>Address: India</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-kts-lime">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-kts-lime transition">LinkedIn</a>
              <a href="#" className="text-gray-300 hover:text-kts-lime transition">Facebook</a>
              <a href="#" className="text-gray-300 hover:text-kts-lime transition">Twitter</a>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>&copy; 2026 KTS Fabrics. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-kts-lime transition">Privacy Policy</a>
            <a href="#" className="hover:text-kts-lime transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
