
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'ABOUT US', path: '/' },
    { name: 'TESTIMONIALS', path: '/testimonials' },
    { name: 'JOIN UNIT 180', path: '/join' },
    { name: 'BECOME A MENTOR', path: '/mentor' },
    { name: 'DONATE NOW', path: '/donate' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">U180</span>
            </div>
            <div>
              <div className="text-green-500 font-bold text-xl">UNIT 180</div>
              <div className="text-xs text-gray-500 uppercase tracking-wide">IGNITING THE INNOVATIVE</div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-semibold text-sm uppercase tracking-wide transition-all duration-300 hover:text-green-500 ${
                  isActive(item.path)
                    ? 'text-green-500'
                    : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-green-500 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 font-semibold text-sm uppercase tracking-wide transition-all duration-300 ${
                  isActive(item.path)
                    ? 'text-green-500'
                    : 'text-gray-700 hover:text-green-500'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
