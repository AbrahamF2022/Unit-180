import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const images = [
  { src: 'images/IMG_8392.jpg', alt: 'Mentorship moment 1', caption: 'Building Bonds', description: 'Mentors and mentees connecting through shared experiences' },
  { src: 'images/IMG_8394.jpg', alt: 'Mentorship moment 2', caption: 'Celebrating Success', description: 'Recognizing achievements and milestones together' },
  { src: 'images/IMG_8395.jpg', alt: 'Mentorship moment 3', caption: 'Growing Together', description: 'Learning and developing side by side' },
  { src: 'images/c.png', alt: 'Mentorship event', caption: 'Community Impact', description: 'Making a difference in our community' },
];

const Gallery = () => {
  const [lightbox, setLightbox] = useState<null | number>(null);
  const [scrollY, setScrollY] = useState(0);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.gallery-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-emerald-800 font-sans overflow-hidden">
      <Navigation />
      
      {/* Hero Section with Parallax */}
      <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-green-600/20 via-emerald-500/30 to-teal-600/20"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-7xl md:text-8xl font-black mb-6 bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent drop-shadow-2xl animate-fade-in-up">
            GALLERY
          </h1>
          <p className="text-2xl md:text-3xl font-light mb-8 opacity-90 animate-fade-in-up delay-200">
            Moments That Matter • Stories That Inspire
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-emerald-300 mx-auto rounded-full animate-fade-in-up delay-400" />
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-4 h-4 bg-green-400 rounded-full opacity-60 animate-float" />
          <div className="absolute top-40 right-20 w-6 h-6 bg-emerald-300 rounded-full opacity-40 animate-float-delayed" />
          <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-teal-400 rounded-full opacity-50 animate-float" />
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="relative z-10 py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="masonry-grid">
            {images.map((img, idx) => (
              <div
                key={img.src}
                data-index={idx}
                className={`gallery-card group relative bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl hover:shadow-green-500/20 transition-all duration-700 transform hover:-translate-y-2 hover:scale-105 cursor-pointer border border-white/20 ${
                  visibleCards.includes(idx) ? 'animate-slide-up' : 'opacity-0'
                }`}
                style={{ 
                  animationDelay: `${idx * 200}ms`,
                  height: `${300 + (idx % 3) * 100}px`
                }}
                onClick={() => setLightbox(idx)}
              >
                {/* Image with overlay effects */}
                <div className="relative h-full overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                  
                  {/* Content overlay */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-bold mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {img.caption}
                    </h3>
                    <p className="text-sm opacity-0 group-hover:opacity-80 transition-opacity duration-500 delay-200 line-clamp-2">
                      {img.description}
                    </p>
                  </div>

                  {/* Hover effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400/0 to-emerald-600/0 group-hover:from-green-400/20 group-hover:to-emerald-600/20 transition-all duration-500" />
                  
                  {/* Corner accent */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Lightbox Modal */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-5xl mx-4 animate-scale-in">
            <img
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              className="max-h-[85vh] max-w-full rounded-2xl shadow-2xl border border-white/20"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">{images[lightbox].caption}</h3>
              <p className="text-gray-200">{images[lightbox].description}</p>
            </div>
          </div>
          <button
            className="absolute top-8 right-8 text-white text-2xl font-bold bg-black/60 rounded-full w-12 h-12 flex items-center justify-center hover:bg-green-600 transition-colors duration-300 backdrop-blur-sm border border-white/20"
            onClick={e => { e.stopPropagation(); setLightbox(null); }}
            aria-label="Close"
          >
            ✕
          </button>
          
          {/* Navigation arrows */}
          <button
            className="absolute left-8 top-1/2 -translate-y-1/2 text-white text-2xl font-bold bg-black/60 rounded-full w-12 h-12 flex items-center justify-center hover:bg-green-600 transition-colors duration-300 backdrop-blur-sm border border-white/20"
            onClick={e => { e.stopPropagation(); setLightbox(lightbox > 0 ? lightbox - 1 : images.length - 1); }}
            aria-label="Previous"
          >
            ‹
          </button>
          <button
            className="absolute right-8 top-1/2 -translate-y-1/2 text-white text-2xl font-bold bg-black/60 rounded-full w-12 h-12 flex items-center justify-center hover:bg-green-600 transition-colors duration-300 backdrop-blur-sm border border-white/20"
            onClick={e => { e.stopPropagation(); setLightbox(lightbox < images.length - 1 ? lightbox + 1 : 0); }}
            aria-label="Next"
          >
            ›
          </button>
        </div>
      )}

      {/* Enhanced Styles */}
      <style>{`
        .masonry-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          align-items: start;
        }
        
        @media (max-width: 768px) {
          .masonry-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }

        .animate-fade-in-up {
          opacity: 0;
          transform: translateY(30px);
          animation: fade-in-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }

        .animate-scale-in {
          animation: scale-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float 6s ease-in-out infinite 2s;
        }

        .delay-200 { animation-delay: 200ms; }
        .delay-400 { animation-delay: 400ms; }

        @keyframes fade-in-up {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(60px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Gallery; 