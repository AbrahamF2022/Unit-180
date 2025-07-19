
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'ABOUT US', path: '/' },
    { name: 'TESTIMONIALS', path: '/testimonials' },
    { name: 'GALLERY', path: '/gallery' },
    { name: 'JOIN UNIT 180', path: '/join' },
    { name: 'BECOME A MENTOR', path: '/mentor' },
    { name: 'DONATE NOW', path: '/donate' },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 font-sans transition-all duration-500 ${
      scrolled 
        ? 'bg-white/90 backdrop-blur-lg shadow-lg border-b border-green-200/50' 
        : 'bg-white/95 backdrop-blur-sm shadow-md border-b border-green-100'
    }`}>
      <div className="container mx-auto px-4">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'h-14' : 'h-16'
        }`}>
          {/* Enhanced Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <img 
                src="images/Logo unit180.png" 
                alt="Unit 180 Logo" 
                className={`object-contain rounded bg-white shadow-lg p-1 ring-2 ring-green-400 ring-offset-2 ring-offset-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-green-400/50 group-hover:ring-green-500 ${
                  scrolled ? 'w-8 h-8' : 'w-10 h-10'
                }`}
              />
              <div className="absolute -inset-1 bg-green-400/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="leading-tight">
              <div className={`text-green-700 font-extrabold tracking-tight drop-shadow-md group-hover:text-green-600 transition-colors duration-300 ${
                scrolled ? 'text-base' : 'text-base lg:text-lg'
              }`}>
                UNIT 180
              </div>
              <div className={`text-green-400 uppercase tracking-widest font-semibold group-hover:text-green-500 transition-colors duration-300 ${
                scrolled ? 'text-xs' : 'text-xs'
              }`}>
                REWRITING THE NARRATIVE
              </div>
            </div>
          </Link>

          {/* Enhanced Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative font-semibold text-sm uppercase tracking-wide px-4 py-2 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-white group overflow-hidden ${
                  isActive(item.path) 
                    ? 'text-white bg-green-600 shadow-lg transform scale-105' 
                    : 'text-green-700 hover:text-green-900 hover:bg-green-50'
                }`}
              >
                {/* Background animation */}
                <span className={`absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-300 ${
                  isActive(item.path) ? 'opacity-100' : 'opacity-0 group-hover:opacity-10'
                }`} />
                
                {/* Text */}
                <span className="relative z-10">{item.name}</span>
                
                {/* Bottom border animation */}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-green-400 transition-all duration-300 ${
                  isActive(item.path) 
                    ? 'scale-x-100 bg-green-300' 
                    : 'scale-x-0 group-hover:scale-x-100 origin-left'
                }`} />
              </Link>
            ))}
          </div>

          {/* Enhanced Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-green-700 hover:text-green-900 hover:bg-green-50 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 relative overflow-hidden group"
            aria-label="Toggle menu"
          >
            <div className="absolute inset-0 bg-green-100 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-lg" />
            <div className="relative z-10 transition-transform duration-300">
              {isOpen ? (
                <X size={24} className="transform rotate-0 group-hover:rotate-90 transition-transform duration-300" />
              ) : (
                <Menu size={24} className="transform rotate-0 group-hover:rotate-180 transition-transform duration-300" />
              )}
            </div>
          </button>
        </div>

        {/* Enhanced Mobile Menu - Fixed Height */}
        <div className={`lg:hidden transition-all duration-500 ease-in-out ${
          isOpen 
            ? 'max-h-[500px] opacity-100 transform translate-y-0' 
            : 'max-h-0 opacity-0 transform -translate-y-4'
        } overflow-hidden`}>
          <div className="py-6 space-y-3 bg-white/95 backdrop-blur-sm rounded-b-xl border-t border-green-100 shadow-lg">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-6 py-4 font-bold text-base uppercase tracking-wider rounded-xl mx-2 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300 relative overflow-hidden group ${
                  isActive(item.path)
                    ? 'text-white bg-green-600 shadow-lg'
                    : 'text-green-700 hover:bg-green-50 hover:text-green-900'
                }`}
                style={{
                  animationDelay: isOpen ? `${index * 100}ms` : '0ms'
                }}
              >
                {/* Background animation */}
                <span className={`absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-300 ${
                  isActive(item.path) ? 'opacity-100' : 'opacity-0 group-hover:opacity-10'
                }`} />
                
                {/* Text */}
                <span className="relative z-10 flex items-center">
                  {item.name}
                  {isActive(item.path) && (
                    <span className="ml-auto w-2 h-2 bg-green-300 rounded-full animate-pulse" />
                  )}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
