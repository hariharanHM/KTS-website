import React from 'react';
import ktsLogo from '../assets/kts-logo.png';

export default function Footer() {
  return (
    <footer className="bg-kts-blue text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img src={ktsLogo} alt="KTS Fabrics Logo" className="h-25 w-25 object-contain" />
            </div>
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
              <li>Email: kts@ktsfabricx.com / marketing@ktsfabricx.com</li>
              <li>Phone: +91 9994746541</li>
              <li>Address: No. 16/2, Vella Gounder Nagar, Rayanoor, Thanthonimalai (Post), Karur – 639 005.
</li>
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
