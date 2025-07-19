
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const images = [
    { src: 'images/Front Page image.png', position: 'center 30%' },
    { src: 'images/changingimage1.JPEG', position: 'center 40%' },
    { src: 'images/changingimage2.JPEG', position: 'center 35%' },
    { src: 'images/changingimage3.JPG', position: 'center 45%' },
    { src: 'images/changingimage4.JPG', position: 'center 40%' },
    { src: 'images/changingimage5.JPG', position: 'center 35%' },
    { src: 'images/changingimage6.JPG', position: 'center 40%' }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    console.log('Slideshow started, current index:', currentImageIndex);
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % images.length;
        console.log('Changing from index', prevIndex, 'to', newIndex);
        return newIndex;
      });
    }, 2000); // Faster for testing - 2 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div 
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden font-sans"
    >
      {/* Animated SVG Pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="#22c55e" fillOpacity="0.1" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
      </svg>
      {/* Lighter Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-400/30 via-green-600/20 to-black/40 animate-gradient-x" />
      
      {/* Debug Display */}
      <div className="absolute top-4 left-4 z-30 bg-black/70 text-white p-2 rounded text-sm">
        Current Image: {currentImageIndex + 1} / {images.length}
      </div>
      
      {/* Slideshow Background */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((image, index) => (
          <img 
            key={index}
            src={image.src} 
            alt={`Mentorship slideshow ${index + 1}`} 
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              objectPosition: image.position, // Individual positioning for each image
              transform: 'scale(1.05)', // Reduced scale for better fitting
            }}
            onLoad={() => console.log(`Image ${index + 1} loaded:`, image.src)}
            onError={() => console.error(`Failed to load image ${index + 1}:`, image.src)}
          />
        ))}
        {/* Much lighter overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Slideshow Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              console.log('Manual slide change to:', index);
              setCurrentImageIndex(index);
            }}
            className={`w-4 h-4 rounded-full transition-all duration-300 border-2 border-white ${
              index === currentImageIndex 
                ? 'bg-white scale-125' 
                : 'bg-transparent hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
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
