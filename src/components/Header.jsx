import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/kts-logo-1.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4">
      <nav className="max-w-5xl mx-auto bg-kts-nav rounded-full bg-kts-nav/90 backdrop-blur-md shadow-lg px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="KTS Logo" className="w-13 h-12" />
          {/* <span className="hidden sm:inline text-kts-blue font-bold text-lg">KTS</span> */}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 text-kts-blue font-semibold">
          <Link to="/kts-world" className="hover:text-white transition">KTS World</Link>
          <Link to="/meet-kts" className="hover:text-white transition">Meet KTS</Link>
          <Link to="/what-we-offer" className="hover:text-white transition">What We Offer</Link>
          <Link to="/inside-kts" className="hover:text-white transition">Inside KTS</Link>
        </div>

        {/* Get a Quote Button */}
        <div className="flex items-center space-x-4">
          <a href="https://wa.me/919994746541?text=I%20need%20a%20quote" target="_blank" rel="noopener noreferrer" className="hidden md:block px-6 py-2 bg-kts-blue text-white rounded-full font-semibold hover:bg-opacity-90 transition-colors">
            Get a Quote
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-kts-blue"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-kts-nav rounded-b-2xl mx-4 sm:mx-6 lg:mx-8 border-t-2 border-kts-blue shadow-lg">
          <div className="px-4 py-4 space-y-4 text-kts-blue font-semibold">
            <Link to="/kts-world" className="block hover:text-white transition">KTS World</Link>
            <Link to="/meet-kts" className="block hover:text-white transition">Meet KTS</Link>
            <Link to="/what-we-offer" className="block hover:text-white transition">What We Offer</Link>
            <Link to="/inside-kts" className="block hover:text-white transition">Inside KTS</Link>
            <a href="https://wa.me/919994746541?text=I%20need%20a%20quote" target="_blank" rel="noopener noreferrer" className="w-full block px-6 py-2 bg-kts-blue text-white rounded-full font-semibold hover:bg-opacity-90 transition-colors text-center">
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
