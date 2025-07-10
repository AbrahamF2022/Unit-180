
import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div 
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden font-sans"
    >
      {/* Animated SVG Pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="#22c55e" fillOpacity="0.2" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
      </svg>
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-400/80 via-green-600/60 to-black/80 animate-gradient-x" />
      <div className="absolute inset-0 w-full h-full">
        <img src="images/Front Page image.png" alt="Mentorship group" className="w-full h-full object-cover object-center scale-105 blur-[1px]" />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative z-10 container mx-auto px-4 py-24 flex flex-col items-center text-center text-white">
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-tight mb-8 drop-shadow-xl animate-fade-in-up">
          <span className="block text-white">GROW</span>
          <span className="block text-green-400">LEAD</span>
          <span className="block text-white">GIVE BACK</span>
        </h1>
        <p className="text-2xl lg:text-3xl mb-12 max-w-2xl leading-relaxed font-medium drop-shadow-lg animate-fade-in-up delay-200">
          Guiding young men toward confidence, purpose, and leadership through mentorship rooted in self-awareness, perseverance, and integrity.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 w-full max-w-md mx-auto animate-fade-in-up delay-300">
          <Link
            to="/donate"
            className="flex-1 bg-green-500 text-white px-8 py-5 rounded-full font-extrabold text-xl flex items-center justify-center gap-2 shadow-2xl hover:bg-green-400 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white group"
          >
            <svg className="w-6 h-6 text-white group-hover:scale-125 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" /></svg>
            Support US
          </Link>
          <Link
            to="/join"
            className="flex-1 bg-white bg-opacity-90 text-green-700 px-8 py-5 rounded-full font-extrabold text-xl flex items-center justify-center gap-2 shadow-2xl hover:bg-green-100 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-400 group"
          >
            <svg className="w-6 h-6 text-green-700 group-hover:scale-125 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 17l-4 4m0 0l-4-4m4 4V3" /></svg>
            Learn More
          </Link>
        </div>
      </div>
      {/* Animations */}
      <style>{`
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 8s ease-in-out infinite;
        }
        @keyframes gradient-x {
          0%, 100% { background-position: left center; }
          50% { background-position: right center; }
        }
        .animate-fade-in-up {
          opacity: 0;
          transform: translateY(40px);
          animation: fade-in-up 1.2s cubic-bezier(.23,1.01,.32,1) forwards;
        }
        .animate-fade-in-up.delay-200 { animation-delay: 0.2s; }
        .animate-fade-in-up.delay-300 { animation-delay: 0.3s; }
        @keyframes fade-in-up {
          to {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
