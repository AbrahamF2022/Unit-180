
import React, { useEffect, useState, useRef } from 'react';
import Navigation from '../components/Navigation';
import { useInView } from '../hooks/use-in-view';

const FASTIDIOUS_5 = [
  { title: 'SELF-AWARENESS', desc: 'Greatness starts with knowing who you are.', icon: '🧠', color: 'from-green-400 to-green-600' },
  { title: 'INTEGRITY', desc: 'Stand tall. Do what’s right—always.', icon: '🛡️', color: 'from-blue-400 to-blue-600' },
  { title: 'DISCIPLINE', desc: 'Stay focused. Outwork the rest.', icon: '🎯', color: 'from-yellow-400 to-yellow-600' },
  { title: 'PERSEVERANCE', desc: 'Rise above every obstacle.', icon: '💪', color: 'from-purple-400 to-purple-600' },
  { title: 'BROTHERHOOD', desc: 'We lift as we climb.', icon: '🤝', color: 'from-pink-400 to-pink-600' },
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
  'images/Image of kids.jpeg', // Mentorship step (idx 1)
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
      <div className="relative min-h-screen font-sans bg-black">
        {/* Fixed Nav Bar */}
        <div className="sticky top-0 z-40">
      <Navigation />
      </div>
      {/* Full-bleed Hero Section: Vibrant Image, Popping Text, Light Nav */}
      <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-black">
        <img src="images/Front Page image.png" alt="Mentorship group" className="absolute inset-0 w-full h-full object-cover z-0 fade-in-hero-image" style={{ objectPosition: 'center 0%', filter: 'saturate(1.5) contrast(1.15) brightness(1.05)' }} />
        <style>{`
          .fade-in-hero-image {
            opacity: 0;
            filter: brightness(0.3) contrast(0.8) saturate(0.5);
            animation: fadeInHero 4.5s cubic-bezier(.23,1.01,.32,1) forwards;
          }
          @keyframes fadeInHero {
            0% { 
              opacity: 0; 
              filter: brightness(0.1) contrast(0.5) saturate(0.3);
            }
            30% { 
              opacity: 0.3; 
              filter: brightness(0.4) contrast(0.7) saturate(0.6);
            }
            60% { 
              opacity: 0.7; 
              filter: brightness(0.8) contrast(0.9) saturate(0.9);
            }
            100% { 
              opacity: 1; 
              filter: brightness(1.05) contrast(1.15) saturate(1.5);
            }
          }
        `}</style>
        {/* Very subtle overlay for readability, but keep image vibrant */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-black/10 to-green-100/10 z-10" />
        <div className="relative z-30 flex flex-col items-center md:items-start justify-center w-full px-4 md:px-24 py-16 md:py-32 min-h-[70vh] text-center md:text-left">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-4 md:mb-6 tracking-tight" style={{ textShadow: '0 4px 24px rgba(0,0,0,0.45), 0 1px 0 #fff' }}>
            <span className="block">GROW</span>
            <span className="block text-green-600">LEAD</span>
            <span className="block">GIVE BACK</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-medium mb-6 md:mb-10 max-w-2xl md:mx-0 mx-auto px-2" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.35)' }}>
            Guiding young men toward confidence, purpose, and leadership through mentorship rooted in self-awareness, perseverance, and integrity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 w-full max-w-md md:mx-0 mx-auto px-4">
            <a href="/donate" className="flex-1 bg-green-600 text-white px-6 md:px-8 py-4 md:py-5 rounded-full font-extrabold text-lg md:text-xl flex items-center justify-center gap-2 shadow-xl hover:bg-green-700 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white group">
              Support US
            </a>
            <a href="/join" className="flex-1 bg-white bg-opacity-90 text-green-700 px-6 md:px-8 py-4 md:py-5 rounded-full font-extrabold text-lg md:text-xl flex items-center justify-center gap-2 shadow-xl hover:bg-green-100 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-400 group">
              Learn More
            </a>
          </div>
        </div>
      </div>
      {/* Animated SVG wave at bottom */}
      <div className="absolute bottom-0 left-0 w-full z-30 pointer-events-none">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-20">
          <path fill="#bbf7d0" fillOpacity="0.5" d="M0,40 C480,80 960,0 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </div>
      {/* Purpose & Mission Section: Glassmorphic, Modern, Visually Striking */}
      <section className="relative py-16 md:py-32 bg-gradient-to-br from-green-100 via-white to-green-50 animate-fade-in-up">
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
      {/* Journey Section: Premium Timeline with Card Borders and Enhanced Text */}
      <section className="relative py-16 md:py-32 bg-gradient-to-br from-green-50 via-white to-green-100 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 md:px-6 relative z-10">
          <h3 className="text-3xl md:text-5xl font-extrabold text-green-700 mb-8 md:mb-16 text-center tracking-tight animate-slide-in-from-top">The Journey</h3>
          <div className="relative">
            {/* Faint green highlight behind timeline */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-16 bg-gradient-to-b from-green-100 via-green-200 to-green-100 opacity-60 -translate-x-1/2 z-0 rounded-full animate-pulse-slow" />
            {/* Vertical timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-2 bg-gradient-to-b from-green-200 via-green-400 to-green-100 rounded-full -translate-x-1/2 z-10 animate-timeline-grow" />
            <div className="flex flex-col gap-12 md:gap-24 relative z-20">
              {TIMELINE.map((item, idx) => {
                const isLeft = idx % 2 === 0;
                const isVisible = visibleTimelineItems.includes(idx);
                return (
                  <div
                    key={item.step}
                    className={`timeline-item relative flex flex-col items-center md:flex-row min-h-[280px] md:min-h-[320px] group transition-all duration-700 ${
                      isVisible 
                        ? `animate-slide-in-from-${isLeft ? 'left' : 'right'}` 
                        : 'opacity-0 translate-x-0'
                    }`}
                    style={{ 
                      animationDelay: isVisible ? '0.1s' : '0s',
                      transform: isVisible ? 'none' : `translateX(${isLeft ? '-100px' : '100px'})`
                    }}
                  >
                    {/* Timeline connector for all but first step */}
                    {idx > 0 && (
                      <div className="hidden md:block absolute left-1/2 top-0 w-2 h-1/2 bg-green-200 -translate-x-1/2 z-0" />
                    )}
                    
                    {/* Mobile: Timeline dot at top */}
                    <div className="relative z-30 flex flex-col items-center mb-6 md:mb-0 md:hidden">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-2xl font-black text-white shadow-2xl border-4 border-white ring-4 ring-green-200 group-hover:ring-green-400 transition-all duration-500 ${
                        isVisible ? 'animate-bounce-slow' : 'opacity-0 scale-0'
                      }`} style={{ boxShadow: '0 0 32px 0 #bbf7d0' }}>{idx + 1}</div>
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-xl mt-2 shadow-xl border-4 border-green-300 transition-all duration-500 ${
                        isVisible ? 'animate-float' : 'opacity-0 scale-0'
                      }`}>
                        {item.icon}
                      </div>
                    </div>
                    
                    {/* Left or right content */}
                    <div className={`flex-1 flex w-full ${isLeft ? 'justify-end md:pr-8' : 'justify-start md:pl-8'}`}> 
                      {isLeft ? (
                        <div className="w-full max-w-md">
                          <div className={`relative bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl border-t-8 border-green-400 p-6 md:p-10 lg:p-12 flex flex-col items-center md:items-end group-hover:shadow-green-200/40 transition-all duration-700 overflow-hidden ${
                            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-20'
                          }`} style={{ borderLeft: '6px solid #22c55e', background: 'linear-gradient(135deg, #f0fdf4 60%, #bbf7d0 100%)' }}>
                            {/* Subtle pattern/gradient */}
                            <div className="absolute inset-0 bg-[url('images/extra%20picture.png')] bg-cover bg-center opacity-5 pointer-events-none" />
                            <img src={
                              idx === 1
                                ? 'images/Image of kids.jpeg'
                                : idx === 2
                                  ? 'images/picture of kids 4.jpg'
                                  : JOURNEY_IMAGES[idx % JOURNEY_IMAGES.length]
                            } alt={item.step + ' photo'} className="w-full max-w-[32rem] h-48 md:h-72 lg:h-96 object-cover object-center rounded-3xl shadow-2xl border-4 md:border-8 border-green-300 mb-6 md:mb-8 transition-all duration-500 group-hover:-rotate-2 group-hover:scale-105 ring-4 ring-green-200/60 animate-float" style={{ boxShadow: '0 8px 48px 0 #bbf7d0, 0 2px 16px 0 #22c55e22' }} />
                            <div className="flex items-center mb-2">
                              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-xl md:text-2xl font-black text-white shadow-xl border-4 border-white mr-3 animate-bounce-slow">{idx + 1}</div>
                              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-green-200 to-green-400 flex items-center justify-center text-lg md:text-2xl shadow-lg border-2 border-green-200 animate-pulse">
                                {item.icon}
                              </div>
                            </div>
                            <div className="flex flex-col items-center w-full mb-4">
                              <div className="text-3xl md:text-4xl lg:text-5xl font-black text-green-700 text-center tracking-tight leading-tight">{item.step}</div>
                              <div className="w-24 h-2 rounded-full mt-2 bg-gradient-to-r from-green-400 to-green-600" />
                            </div>
                            <div className="text-xl md:text-2xl lg:text-3xl text-gray-700 max-w-md text-center font-medium leading-relaxed mb-6">{item.desc}</div>
                          </div>
                        </div>
                      ) : <div className="hidden md:block" style={{ minWidth: '1.5rem' }} />}
                    </div>
                    
                    {/* Desktop: Timeline dot/step badge */}
                    <div className="relative z-30 flex flex-col items-center hidden md:flex">
                      <div className={`w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-3xl font-black text-white shadow-2xl border-4 border-white ring-4 ring-green-200 group-hover:ring-green-400 transition-all duration-500 ${
                        isVisible ? 'animate-bounce-slow' : 'opacity-0 scale-0'
                      }`} style={{ boxShadow: '0 0 32px 0 #bbf7d0' }}>{idx + 1}</div>
                      <div className={`w-3 h-24 bg-green-200 rounded-full transition-all duration-700 ${
                        isVisible ? 'animate-pulse-slow' : 'opacity-0'
                      }`} />
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-3xl mt-4 shadow-xl border-4 border-green-300 transition-all duration-500 ${
                        isVisible ? 'animate-float' : 'opacity-0 scale-0'
                      }`}>
                        {item.icon}
                      </div>
                    </div>
                    
                    {/* Right or left content */}
                    <div className={`flex-1 flex w-full ${!isLeft ? 'justify-start md:pl-8' : 'justify-end md:pr-8'}`}>
                      {!isLeft ? (
                        <div className="w-full max-w-md">
                          <div className={`relative bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl border-t-8 border-green-400 p-6 md:p-10 lg:p-12 flex flex-col items-center md:items-start group-hover:shadow-green-200/40 transition-all duration-700 overflow-hidden ${
                            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-20'
                          }`} style={{ borderRight: '6px solid #22c55e', background: 'linear-gradient(135deg, #f0fdf4 60%, #bbf7d0 100%)' }}>
                            {/* Subtle pattern/gradient */}
                            <div className="absolute inset-0 bg-[url('images/extra%20picture.png')] bg-cover bg-center opacity-5 pointer-events-none" />
                            <img src={
                              idx === 1
                                ? 'images/Image of kids.jpeg'
                                : idx === 2
                                  ? 'images/picture of kids 4.jpg'
                                  : JOURNEY_IMAGES[idx % JOURNEY_IMAGES.length]
                            } alt={item.step + ' photo'} className="w-full max-w-[32rem] h-48 md:h-72 lg:h-96 object-cover object-center rounded-3xl shadow-2xl border-4 md:border-8 border-green-300 mb-6 md:mb-8 transition-all duration-500 group-hover:rotate-2 group-hover:scale-105 ring-4 ring-green-200/60 animate-float" style={{ boxShadow: '0 8px 48px 0 #bbf7d0, 0 2px 16px 0 #22c55e22' }} />
                            <div className="flex items-center mb-2">
                              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-xl md:text-2xl font-black text-white shadow-xl border-4 border-white mr-3 animate-bounce-slow">{idx + 1}</div>
                              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-green-200 to-green-400 flex items-center justify-center text-lg md:text-2xl shadow-lg border-2 border-green-200 animate-pulse">
                                {item.icon}
                              </div>
                            </div>
                            <div className="flex flex-col items-center w-full mb-4">
                              <div className="text-3xl md:text-4xl lg:text-5xl font-black text-green-700 text-center tracking-tight leading-tight">{item.step}</div>
                              <div className="w-24 h-2 rounded-full mt-2 bg-gradient-to-r from-green-400 to-green-600" />
                            </div>
                            <div className="text-xl md:text-2xl lg:text-3xl text-gray-700 max-w-md text-center font-medium leading-relaxed mb-6">{item.desc}</div>
                          </div>
                        </div>
                      ) : <div className="hidden md:block" style={{ minWidth: '1.5rem' }} />}
                    </div>
                  </div>
                );
              })}
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-6 w-full max-w-6xl justify-items-center">
            {FASTIDIOUS_5.map((item, idx) => {
              const isVisible = visibleTimelineItems.includes(idx + 10); // Offset to match scroll handler
              return (
                <div
                  key={item.title}
                  className={`fastidious-item flex flex-col items-center bg-white rounded-2xl md:rounded-3xl shadow-lg md:shadow-xl border border-green-100 p-4 md:p-6 lg:p-8 transition-all duration-700 hover:-translate-y-2 hover:shadow-xl group min-h-[280px] md:min-h-[320px] lg:min-h-[360px] relative overflow-hidden w-full max-w-xs sm:w-auto sm:max-w-none ${
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
                  {item.icon}
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
    `}</style>
    </>
  );
};

export default Index;
