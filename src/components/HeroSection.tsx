
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-white flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-8xl font-bold text-gray-900 leading-tight">
                GROW
                <span className="block text-green-500">LEAD</span>
                <span className="block">GIVE BACK</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Guiding young men toward confidence, purpose, and leadership through mentorship rooted in self-awareness, perseverance, and integrity.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/donate"
                className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-600 transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center group"
              >
                Support Us
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link
                to="/join"
                className="border-2 border-green-500 text-green-500 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-500 hover:text-white transition-all duration-300 hover:scale-105 flex items-center justify-center"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-green-100 to-green-50 rounded-3xl flex items-center justify-center overflow-hidden">
              <div className="w-full h-full bg-gray-200 rounded-3xl flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="text-8xl mb-4 font-bold">U180</div>
                  <p className="text-lg">Empowering Young Men</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
