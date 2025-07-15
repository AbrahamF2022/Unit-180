import React, { useState } from 'react';
import Navigation from '../components/Navigation';

const images = [
  { src: 'images/IMG_8392.jpg', alt: 'Mentorship moment 1', caption: 'Teamwork in action' },
  { src: 'images/IMG_8394.jpg', alt: 'Mentorship moment 2', caption: 'Celebrating growth' },
  { src: 'images/IMG_8395.jpg', alt: 'Mentorship moment 3', caption: 'Building confidence' },
  { src: 'images/c.png', alt: 'Mentorship event', caption: 'Community connection' },
];

const Gallery = () => {
  const [lightbox, setLightbox] = useState<null | number>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 font-sans">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-extrabold text-green-700 mb-4 drop-shadow-lg tracking-tight">Gallery</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-6">
              See what makes our mentorship program special. Hover over each photo for a peek behind the scenes!
            </p>
          </div>
          <div className="flex flex-col gap-12">
            {images.map((img, idx) => (
              <div
                key={img.src}
                className="relative group rounded-3xl shadow-2xl overflow-hidden bg-white/80 hover:bg-white/100 transition-all duration-300"
                style={{ minHeight: 320 }}
              >
                {/* Blurred colored background revealed on hover */}
                <div className="absolute inset-0 z-0 scale-110 blur-xl opacity-0 group-hover:opacity-80 transition-all duration-500 bg-gradient-to-br from-green-300 via-green-100 to-green-400" />
                {/* Full image, fit to container, no cropping */}
                <img
                  src={img.src}
                  alt={img.alt}
                  className="relative z-10 w-full h-auto max-h-[500px] mx-auto block object-contain transition-transform duration-500 group-hover:scale-95 group-hover:shadow-2xl cursor-pointer"
                  onClick={() => setLightbox(idx)}
                  style={{ background: '#e0f2fe' }}
                />
                {/* Animated caption overlay on hover */}
                <div className="absolute bottom-0 left-0 w-full z-20 flex justify-center">
                  <div className="opacity-0 group-hover:opacity-100 translate-y-8 group-hover:translate-y-0 transition-all duration-500 bg-green-700/90 text-white text-lg font-semibold px-8 py-4 rounded-t-2xl shadow-xl mb-0">
                    {img.caption}
                  </div>
                </div>
                {/* Click to enlarge label */}
                <div className="absolute top-4 right-4 z-20 bg-white/80 text-green-700 text-xs font-bold px-3 py-1 rounded-full shadow group-hover:bg-green-600 group-hover:text-white transition-all duration-300 pointer-events-none select-none">
                  Click to Enlarge
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Lightbox Modal */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in-up"
          onClick={() => setLightbox(null)}
        >
          <img
            src={images[lightbox].src}
            alt={images[lightbox].alt}
            className="max-h-[80vh] max-w-[90vw] rounded-2xl shadow-2xl border-4 border-white bg-white"
          />
          <button
            className="absolute top-8 right-8 text-white text-4xl font-bold bg-black/60 rounded-full w-12 h-12 flex items-center justify-center hover:bg-black/80 transition-colors"
            onClick={e => { e.stopPropagation(); setLightbox(null); }}
            aria-label="Close"
          >
            &times;
          </button>
        </div>
      )}
      <style>{`
        .animate-fade-in-up {
          opacity: 0;
          transform: translateY(40px);
          animation: fade-in-up 0.7s cubic-bezier(.23,1.01,.32,1) forwards;
        }
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

export default Gallery; 