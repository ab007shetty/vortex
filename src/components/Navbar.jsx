import { Shield, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar({ onLogoClick, className = 'z-50' }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className={`bg-white/90 backdrop-blur-lg shadow-lg border-b border-gray-200/50 fixed top-0 left-0 right-0 transition-all duration-300 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          type="button"
          className="flex items-center space-x-2 focus:outline-none group transition-all duration-300 hover:scale-105"
          onClick={onLogoClick}
          aria-label="Go to Home"
        >
          <div className="relative">
            <Shield className="h-8 w-8 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse group-hover:bg-green-400"></div>
          </div>
          <span className="text-2xl font-bold text-blue-800 group-hover:text-blue-900 transition-colors duration-300">
            Boilerplate
          </span>
          <span className="text-sm bg-gradient-to-r from-blue-500 to-green-500 text-white px-3 py-1 rounded-full font-medium group-hover:from-blue-600 group-hover:to-green-600 transition-all duration-300 shadow-md">
            Starter
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2">
          {["Features", "Docs", "Community"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative px-4 py-2 text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium rounded-lg hover:bg-blue-50 group"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

          <button className="ml-4 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Login
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 transform rotate-180 transition-transform duration-300" />
          ) : (
            <Menu className="h-6 w-6 transform rotate-0 transition-transform duration-300" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200/50 transition-all duration-300 ease-in-out ${
        isMobileMenuOpen 
          ? 'max-h-96 opacity-100 visible' 
          : 'max-h-0 opacity-0 invisible overflow-hidden'
      }`}>
        <nav className="px-4 py-6 space-y-4">
          {["Features", "Docs", "Community"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-all duration-300 border-l-4 border-transparent hover:border-blue-600"
              onClick={closeMobileMenu}
            >
              {item}
            </a>
          ))}
          <button 
            className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            onClick={closeMobileMenu}
          >
            Login
          </button>
        </nav>
      </div>
    </header>
  );
}
