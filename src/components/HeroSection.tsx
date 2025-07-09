
import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat relative flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/lovable-uploads/139f84c1-f92b-4afe-8bc7-7d1182205c63.png')`
      }}
    >
      <div className="container mx-auto px-4 text-white">
        <div className="max-w-4xl">
          <h1 className="text-6xl lg:text-8xl font-bold leading-tight mb-8">
            <span className="text-gray-200">GROW</span>
            <br />
            <span className="text-green-400">LEAD</span>
            <br />
            <span className="text-gray-200">GIVE BACK</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-white mb-12 max-w-3xl leading-relaxed">
            Guiding young men toward confidence, purpose, and leadership through mentorship rooted in self-awareness, perseverance, and integrity.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <Link
              to="/donate"
              className="bg-green-500 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-green-600 transition-all duration-300 hover:scale-105 shadow-lg text-center"
            >
              Support US
            </Link>
            <Link
              to="/join"
              className="bg-gray-500 bg-opacity-70 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all duration-300 hover:scale-105 text-center"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
