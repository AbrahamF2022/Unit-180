import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const ApplicationsPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if popup has been shown before
    const hasSeenPopup = localStorage.getItem('applications-popup-seen');
    
    if (!hasSeenPopup) {
      // Show popup after a short delay for better UX
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    // Mark popup as seen in localStorage
    localStorage.setItem('applications-popup-seen', 'true');
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="relative max-w-4xl max-h-[90vh] w-full mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden animate-popup-in">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
          aria-label="Close popup"
        >
          <X className="w-6 h-6 text-gray-700" />
        </button>

        {/* Image Container */}
        <div className="relative w-full h-full">
          <img
            src="/images/Applications are open (3).png"
            alt="Applications are now open - Join Unit 180"
            className="w-full h-auto max-h-[90vh] object-contain"
          />
          
          {/* Optional overlay for better text readability if needed */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>

      <style>{`
        @keyframes popup-in {
          0% {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        .animate-popup-in {
          animation: popup-in 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default ApplicationsPopup;