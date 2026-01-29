import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 px-4 sm:px-6 lg:px-8 py-4">
      <nav className="max-w-7xl mx-auto bg-kts-nav rounded-2xl shadow-lg px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-kts-blue rounded-full flex items-center justify-center">
            <span className="text-kts-lime font-bold text-lg">K</span>
          </div>
          <span className="hidden sm:inline text-kts-blue font-bold text-lg">KTS</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 text-kts-blue font-semibold">
          <Link to="/kts-world" className="hover:text-opacity-80 transition">KTS World</Link>
          <Link to="/meet-kts" className="hover:text-opacity-80 transition">Meet KTS</Link>
          <Link to="/what-we-offer" className="hover:text-opacity-80 transition">What We Offer</Link>
          <Link to="/inside-kts" className="hover:text-opacity-80 transition">Inside KTS</Link>
        </div>

        {/* Get a Quote Button */}
        <div className="flex items-center space-x-4">
          <button className="hidden md:block px-6 py-2 bg-kts-blue text-white rounded-full font-semibold hover:bg-opacity-90 transition-colors">
            Get a Quote
          </button>

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
            <Link to="/kts-world" className="block hover:text-opacity-80">KTS World</Link>
            <Link to="/meet-kts" className="block hover:text-opacity-80">Meet KTS</Link>
            <Link to="/what-we-offer" className="block hover:text-opacity-80">What We Offer</Link>
            <Link to="/inside-kts" className="block hover:text-opacity-80">Inside KTS</Link>
            <button className="w-full px-6 py-2 bg-kts-blue text-white rounded-full font-semibold hover:bg-opacity-90 transition-colors">
              Get a Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
