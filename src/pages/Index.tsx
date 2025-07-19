
import React, { useEffect, useState, useRef } from 'react';
import { Eye, ShieldCheck, Target, TrendingUp, Users } from 'lucide-react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import { useInView } from '../hooks/use-in-view';
import { Link } from 'react-router-dom'; // Added Link import

const FASTIDIOUS_5 = [
  { title: 'SELF-AWARENESS', desc: 'Greatness starts with knowing who you are.', icon: Eye, color: 'from-green-400 to-green-600' },
  { title: 'INTEGRITY', desc: 'Stand tall. Do what’s right—always.', icon: ShieldCheck, color: 'from-blue-400 to-blue-600' },
  { title: 'DISCIPLINE', desc: 'Stay focused. Outwork the rest.', icon: Target, color: 'from-yellow-400 to-yellow-600' },
  { title: 'PERSEVERANCE', desc: 'Rise above every obstacle.', icon: TrendingUp, color: 'from-purple-400 to-purple-600' },
  { title: 'BROTHERHOOD', desc: 'We lift as we climb.', icon: Users, color: 'from-pink-400 to-pink-600' },
];

const TIMELINE = [
  { step: 'Join', desc: 'Take the first step and join the brotherhood.', icon: '🚀' },
  { step: 'Mentorship', desc: 'Connect with mentors who care.', icon: '👨‍🏫' },
  { step: 'Growth', desc: 'Build confidence, skills, and purpose.', icon: '📈' },
  { step: 'Leadership', desc: 'Lead by example in your community.', icon: '🌟' },
  { step: 'Give Back', desc: 'Inspire the next generation.', icon: '🔄' },
];

const JOURNEY_IMAGES = [
  'images/picture of kids and mentor.png',
  'images/Image of kids.jpg', // Mentorship step (idx 1)
  'images/picture of kids 4.jpg', // Growth step (idx 2)
  'images/image of mentor and kid.png',
  'images/picture.png',
];
const FASTIDIOUS_IMAGES = [
  'images/picture of kids 4.png',
  'images/extra picture.png',
  'images/Image of kids 2.png',
  'images/picture of kids and mentor.png',
  'images/Image of kids.png',
];

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [selectedValue, setSelectedValue] = useState<number | null>(null);
  const [visibleTimelineItems, setVisibleTimelineItems] = useState<number[]>([]);
  
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);
  
  // Timeline scroll animation handler
  useEffect(() => {
    const handleScroll = () => {
      const timelineItems = document.querySelectorAll('.timeline-item');
      const fastidiousItems = document.querySelectorAll('.fastidious-item');
      const newVisibleItems: number[] = [];
      
      // Check timeline items
      timelineItems.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
        
        if (isVisible && !visibleTimelineItems.includes(index)) {
          newVisibleItems.push(index);
        }
      });
      
      // Check FASTIDIOUS 5 items
      fastidiousItems.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
        
        if (isVisible && !visibleTimelineItems.includes(index + 10)) { // Offset to avoid conflicts
          newVisibleItems.push(index + 10);
        }
      });
      
      if (newVisibleItems.length > 0) {
        setVisibleTimelineItems(prev => [...prev, ...newVisibleItems]);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleTimelineItems]);

  return (
    <>
      {/* Loading Screen */}
      {loading && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-green-500"></div>
        </div>
      )}

      <div className="relative min-h-screen font-sans bg-black">
        {/* Fixed Nav Bar */}
        <div className="sticky top-0 z-40">
      <Navigation />
      </div>
      
      {/* Hero Section with Slideshow */}
      <HeroSection />

      {/* Purpose & Mission Section: Glassmorphic, Modern, Visually Striking */}
      <section className="relative py-16 md:py-32 bg-gradient-to-br from-green-100 via-white to-green-50 animate-fade-in-up">
        {/* Watermark background image */}
        {/* <img
          src="images/Logo unit180.png"
          alt="Purpose Watermark"
          className="pointer-events-none select-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15 w-[70vw] max-w-4xl z-0"
          aria-hidden="true"
        /> */}
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
          {/* Purpose Card */}
          <div className="relative bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-14 border-t-8 border-green-400 flex flex-col justify-start animate-fade-in-up group overflow-hidden">
            {/* Large background icon */}
            <div className="absolute right-6 top-6 opacity-10 text-green-300 text-[8rem] pointer-events-none select-none z-0">
              <svg width="96" height="96" fill="none" viewBox="0 0 96 96"><circle cx="48" cy="48" r="44" stroke="currentColor" strokeWidth="8" /><path d="M48 20v28l20 12" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>
            <h2 className="relative z-10 text-2xl md:text-4xl font-extrabold text-green-700 mb-4 tracking-tight text-center md:text-left flex items-center gap-3">
              Our Purpose
            </h2>
            <div className="relative z-10 w-16 h-2 rounded-full mb-6 md:mb-8 bg-gradient-to-r from-green-400 to-green-600 mx-auto md:mx-0" />
            <p className="relative z-10 text-base md:text-2xl text-gray-700 leading-relaxed font-medium">
              We provide guidance, support, and positive role models to help young men become confident, responsible, and successful individuals. Through comprehensive youth development programs, we prepare them to be college and career ready, empowering them to grow, lead, and give back to their communities. Our approach is rooted in the Fastidious 5—self-awareness, perseverance, integrity, brotherhood, and discipline—building a strong network of support, encouragement, and accountability for the next generation.
            </p>
          </div>
          {/* Mission Card */}
          <div className="relative bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-14 border-t-8 border-green-400 flex flex-col justify-start animate-fade-in-up delay-200 group overflow-hidden">
            {/* Large background icon */}
            <div className="absolute left-6 bottom-6 opacity-10 text-green-300 text-[8rem] pointer-events-none select-none z-0">
              <svg width="96" height="96" fill="none" viewBox="0 0 96 96"><circle cx="48" cy="48" r="44" stroke="currentColor" strokeWidth="8" /><path d="M48 76V48" stroke="currentColor" strokeWidth="8" strokeLinecap="round" /><path d="M48 48l16-16" stroke="currentColor" strokeWidth="8" strokeLinecap="round" /></svg>
            </div>
            <h2 className="relative z-10 text-2xl md:text-4xl font-extrabold text-green-700 mb-4 tracking-tight text-center md:text-left flex items-center gap-3">
              Our Mission
            </h2>
            <div className="relative z-10 w-16 h-2 rounded-full mb-6 md:mb-8 bg-gradient-to-r from-green-400 to-green-600 mx-auto md:mx-0" />
            <p className="relative z-10 text-base md:text-2xl text-gray-700 leading-relaxed font-medium">
              Meet at-promise young men where they are, help them to develop a “success” plan and ensure they have the necessary tools and skills to achieve their goal.
            </p>
          </div>
        </div>
      </section>
      {/* Modern Journey Section - Redesigned with Lighter Theme */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-green-50 via-white to-emerald-50 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-green-400/20 rounded-full blur-xl animate-float" />
          <div className="absolute bottom-32 right-20 w-48 h-48 bg-emerald-500/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-teal-400/20 rounded-full blur-lg animate-float" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h3 className="text-5xl md:text-7xl font-black text-transparent bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text mb-6 animate-fade-in-up">
              Your Journey
            </h3>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              From joining our brotherhood to becoming a leader who gives back—discover your path to greatness
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mt-8 rounded-full animate-fade-in-up delay-400" />
          </div>

          {/* Timeline Cards */}
          <div className="relative">
            {/* Central flowing line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-green-500 via-emerald-500 to-teal-500 -translate-x-1/2 rounded-full opacity-40" />
            
            <div className="grid gap-12 lg:gap-16">
              {TIMELINE.map((item, idx) => {
                const isVisible = visibleTimelineItems.includes(idx);
                const isEven = idx % 2 === 0;
                
                return (
                  <div
                    key={item.step}
                    className={`timeline-item group relative ${
                      isVisible 
                        ? 'animate-slide-up opacity-100' 
                        : 'opacity-0 translate-y-12'
                    }`}
                    style={{ 
                      animationDelay: isVisible ? `${idx * 150}ms` : '0s'
                    }}
                  >
                    {/* Desktop Layout */}
                    <div className={`hidden lg:flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'} gap-8`}>
                      {/* Content Card */}
                      <div className="flex-1 max-w-lg">
                        <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 border border-green-200/50 hover:border-green-400/50 transition-all duration-500 group-hover:bg-white group-hover:scale-105 group-hover:-translate-y-2 shadow-lg hover:shadow-green-200/40">
                          {/* Gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-br from-green-100/20 to-emerald-200/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          
                          {/* Content */}
                          <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-6">
                              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-2xl font-black text-white shadow-lg">
                                {idx + 1}
                              </div>
                              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-2xl border-2 border-green-300">
                                {item.icon}
                              </div>
                            </div>
                            
                            <h4 className="text-3xl font-bold text-gray-800 mb-4 group-hover:text-green-700 transition-colors duration-300">
                              {item.step}
                            </h4>
                            
                            <p className="text-lg text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Central Node */}
                      <div className="relative">
                        <div className="w-4 h-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full shadow-lg group-hover:scale-150 group-hover:shadow-green-400/50 transition-all duration-300" />
                        <div className="absolute inset-0 w-4 h-4 bg-green-400 rounded-full animate-ping opacity-30" />
                      </div>

                      {/* Image */}
                      <div className="flex-1 max-w-lg">
                        <div className="relative overflow-hidden rounded-3xl group-hover:scale-105 transition-transform duration-500 shadow-lg">
                          <img 
                            src={
                              idx === 1 ? 'images/Image of kids.jpg' :
                              idx === 2 ? 'images/picture of kids 4.jpg' :
                              JOURNEY_IMAGES[idx % JOURNEY_IMAGES.length]
                            }
                            alt={`${item.step} journey step`}
                            className="w-full h-80 object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                          <div className="absolute bottom-6 left-6 right-6">
                            <div className="text-white font-semibold text-lg">Step {idx + 1}</div>
                            <div className="text-green-300 text-sm">{item.step}</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Mobile Layout */}
                    <div className="lg:hidden">
                      <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl overflow-hidden border border-green-200/50 hover:border-green-400/50 transition-all duration-500 group-hover:bg-white shadow-lg">
                        {/* Mobile Image */}
                        <div className="relative h-48 overflow-hidden">
                          <img 
                            src={
                              idx === 1 ? 'images/Image of kids.jpg' :
                              idx === 2 ? 'images/picture of kids 4.jpg' :
                              JOURNEY_IMAGES[idx % JOURNEY_IMAGES.length]
                            }
                            alt={`${item.step} journey step`}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                          <div className="absolute top-4 right-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-lg font-black text-white shadow-lg">
                              {idx + 1}
                            </div>
                          </div>
                        </div>

                        {/* Mobile Content */}
                        <div className="p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-xl border-2 border-green-300">
                              {item.icon}
                            </div>
                            <h4 className="text-2xl font-bold text-gray-800 group-hover:text-green-700 transition-colors duration-300">
                              {item.step}
                            </h4>
                          </div>
                          
                          <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-20">
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <Link 
                to="/join"
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-500/25"
              >
                Start Your Journey
              </Link>
              <Link 
                to="/mentor"
                className="border-2 border-green-500 text-green-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-green-500 hover:text-white transition-all duration-300 hover:scale-105"
              >
                Guide Others
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Fastidious 5 Section: Improved Mobile Layout */}
      <section className="relative py-12 md:py-24 bg-gradient-to-br from-green-100 via-white to-green-50 overflow-hidden animate-fade-in-up">
        <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center">
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-black text-green-700 mb-3 md:mb-6 text-center tracking-tight animate-fade-in-up">THE FASTIDIOUS 5</h3>
          <p className="text-base md:text-lg lg:text-xl text-green-800 max-w-3xl mx-auto mb-6 md:mb-12 text-center font-semibold animate-fade-in-up delay-100 px-4">Our core values are the foundation of everything we do. They shape leaders, build brotherhood, and drive us to greatness.</p>
          
          {/* Improved Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 w-full max-w-6xl justify-items-stretch">
            {FASTIDIOUS_5.map((item, idx) => {
              const isVisible = visibleTimelineItems.includes(idx + 10); // Offset to match scroll handler
              return (
                <div
                  key={item.title}
                  className={`fastidious-item flex flex-col items-center bg-white rounded-2xl md:rounded-3xl shadow-lg md:shadow-xl border border-green-100 p-4 md:p-6 lg:p-8 transition-all duration-700 hover:-translate-y-2 hover:shadow-xl group min-h-[280px] md:min-h-[320px] lg:min-h-[360px] relative overflow-hidden w-full ${
                    isVisible ? 'animate-slide-in-from-bottom' : 'opacity-0 translate-y-20'
                  }`}
                  style={{ 
                    animationDelay: isVisible ? `${0.1 + idx * 0.1}s` : '0s',
                    transform: isVisible ? 'none' : 'translateY(20px)'
                  }}
                >
                {/* Subtle gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 to-white opacity-60" />
                
                {/* Icon container with enhanced styling */}
                <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center text-2xl md:text-3xl lg:text-4xl shadow-lg md:shadow-xl border-4 border-green-200 bg-gradient-to-br from-green-100 to-green-50 mb-4 md:mb-6 group-hover:bg-green-200 group-hover:scale-110 transition-all duration-300">
                  <item.icon className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-green-700" />
                </div>
                
                {/* Title with better spacing and larger on mobile */}
                <div className="relative z-10 text-2xl md:text-base lg:text-base font-black uppercase tracking-wider md:tracking-widest text-green-700 mb-3 md:mb-4 text-center leading-tight px-1 whitespace-nowrap overflow-hidden text-ellipsis">{item.title}</div>
                
                {/* Decorative line */}
                <div className="relative z-10 w-8 md:w-12 h-0.5 md:h-1 rounded-full mb-4 md:mb-6 mx-auto bg-gradient-to-r from-green-300 to-green-400" />
                
                {/* Description larger on mobile */}
                <div className="relative z-10 text-lg md:text-lg lg:text-xl text-gray-700 text-center font-medium leading-relaxed px-1">{item.desc}</div>
              </div>
            );
          })}
          </div>
        </div>
      </section>
    </div>
    <style>{`
      .animate-glow {
        animation: glowJourney 2.5s infinite alternate cubic-bezier(.4,0,.2,1);
      }
      
      .animate-slide-in-from-top {
        opacity: 0;
        transform: translateY(-60px);
        animation: slide-in-from-top 1.5s cubic-bezier(.23,1.01,.32,1) forwards;
      }
      
      .animate-slide-in-from-left {
        opacity: 0;
        transform: translateX(-100px);
        animation: slide-in-from-left 1.2s cubic-bezier(.23,1.01,.32,1) forwards;
      }
      
      .animate-slide-in-from-right {
        opacity: 0;
        transform: translateX(100px);
        animation: slide-in-from-right 1.2s cubic-bezier(.23,1.01,.32,1) forwards;
      }
      
      .animate-slide-in-from-bottom {
        opacity: 0;
        transform: translateY(60px);
        animation: slide-in-from-bottom 1.2s cubic-bezier(.23,1.01,.32,1) forwards;
      }
      
      .animate-float {
        animation: float 3s ease-in-out infinite;
      }
      
      .animate-bounce-slow {
        animation: bounce-slow 2s ease-in-out infinite;
      }
      
      .animate-pulse-slow {
        animation: pulse-slow 3s ease-in-out infinite;
      }
      
      .animate-timeline-grow {
        animation: timeline-grow 2s ease-out forwards;
      }
      
      .animate-slide-up {
        animation: slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      }
      
      @keyframes glowJourney {
        0% { box-shadow: 0 0 0 0 #4ade80; }
        100% { box-shadow: 0 0 32px 8px #4ade80; }
      }
      
      @keyframes slide-in-from-top {
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes slide-in-from-left {
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      @keyframes slide-in-from-right {
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      @keyframes slide-in-from-bottom {
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }
      
      @keyframes bounce-slow {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
      }
      
      @keyframes pulse-slow {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.7; }
      }
      
      @keyframes timeline-grow {
        from { height: 0; }
        to { height: 100%; }
      }
      
      @keyframes slide-up {
        from {
          opacity: 0;
          transform: translateY(60px) scale(0.95);
        }
        to {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }
    `}</style>
    </>
  );
};

export default Index;
