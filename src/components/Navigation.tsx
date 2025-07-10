
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
    <nav className="sticky top-0 z-50 bg-white shadow-md font-sans border-b border-green-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 lg:space-x-3">
            <img src="images/Logo unit180.png" alt="Unit 180 Logo" className="w-12 h-12 object-contain rounded bg-white shadow-lg p-1 ring-2 ring-green-400 ring-offset-2 ring-offset-white transition-all duration-300 hover:scale-105 hover:shadow-green-400/50" />
            <div className="leading-tight">
              <div className="text-green-700 font-extrabold text-lg lg:text-xl tracking-tight drop-shadow-md">UNIT 180</div>
              <div className="text-xs text-green-400 uppercase tracking-widest font-semibold">REWRITING THE NARRATIVE</div>
            </div>
          </Link>
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative font-bold text-base uppercase tracking-wider px-4 py-2 rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-white text-green-700 hover:text-green-900 ${isActive(item.path) ? 'font-extrabold' : ''}`}
              >
                <span className="relative z-10">{item.name}</span>
                <span className="absolute left-0 bottom-1 w-full h-1 rounded bg-green-400 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-x-0 group-hover:scale-x-100 origin-left" />
              </Link>
            ))}
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-green-700 hover:text-green-900 transition-colors focus:outline-none focus:ring-2 focus:ring-green-400"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
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
                className={`block px-4 py-3 font-bold text-base uppercase tracking-wider rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 text-green-700 hover:bg-green-100 transition-all duration-200`}
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
