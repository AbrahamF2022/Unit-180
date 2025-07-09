
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
    <nav className="bg-green-500 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <span className="text-green-500 font-bold text-lg">U180</span>
            </div>
            <div>
              <div className="text-white font-bold text-lg">UNIT 180</div>
              <div className="text-xs text-green-100 uppercase tracking-wide">IGNITING THE INNOVATIVE</div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-bold text-sm uppercase tracking-wide transition-all duration-300 px-4 py-2 rounded ${
                  isActive(item.path)
                    ? 'bg-white text-green-500'
                    : 'text-white hover:bg-green-400'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white hover:text-green-200 transition-colors"
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
                className={`block px-4 py-3 font-bold text-sm uppercase tracking-wide transition-all duration-300 rounded ${
                  isActive(item.path)
                    ? 'bg-white text-green-500'
                    : 'text-white hover:bg-green-400'
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
