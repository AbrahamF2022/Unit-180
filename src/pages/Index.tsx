
import React, { useEffect, useState, useRef } from 'react';
import { Eye, ShieldCheck, Target, TrendingUp, Users } from 'lucide-react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import { useInView } from '../hooks/use-in-view';

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
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState('founders');
  
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
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
        <img
          src="images/Logo unit180.png"
          alt="Purpose Watermark"
          className="pointer-events-none select-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15 w-[60vw] max-w-3xl z-0"
          aria-hidden="true"
        />
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start relative z-10">
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
      {/* Enhanced Journey Section: Premium Timeline with Progressive Reveal */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-green-50 via-white to-emerald-50 overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-32 left-16 w-20 h-20 bg-green-300/20 rounded-full blur-2xl animate-float" />
          <div className="absolute bottom-40 right-20 w-32 h-32 bg-emerald-400/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-2/3 left-10 w-16 h-16 bg-teal-300/25 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
          {/* Enhanced Header */}
          <div className="text-center mb-16 md:mb-24">
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text mb-6 animate-slide-in-from-top">
              Your Journey
            </h3>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8 animate-fade-in-up delay-200">
              Follow the path from joining our brotherhood to becoming a leader who transforms communities
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full animate-fade-in-up delay-400" />
          </div>

          <div className="relative">
            {/* Enhanced Timeline Design */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-20 bg-gradient-to-b from-green-100 via-green-200 to-green-100 opacity-40 -translate-x-1/2 z-0 rounded-full" />
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400 via-emerald-500 to-teal-400 rounded-full -translate-x-1/2 z-10 shadow-lg" />
            
            {/* Progressive Timeline Line Fill */}
            <div className="hidden md:block absolute left-1/2 top-0 w-1 bg-gradient-to-b from-green-500 to-emerald-600 rounded-full -translate-x-1/2 z-20 transition-all duration-1000 shadow-green-400/50" 
                 style={{ height: `${Math.min(100, (visibleTimelineItems.length / TIMELINE.length) * 100)}%` }} />

            <div className="flex flex-col gap-16 md:gap-28 relative z-20">
              {TIMELINE.map((item, idx) => {
                const isLeft = idx % 2 === 0;
                const isVisible = visibleTimelineItems.includes(idx);
                return (
                  <div
                    key={item.step}
                    className={`timeline-item relative flex flex-col items-center md:flex-row min-h-[320px] md:min-h-[380px] group transition-all duration-1000 ${
                      isVisible 
                        ? `animate-slide-in-from-${isLeft ? 'left' : 'right'}` 
                        : 'opacity-0 translate-x-0'
                    }`}
                    style={{ 
                      animationDelay: isVisible ? `${idx * 0.2}s` : '0s',
                      transform: isVisible ? 'none' : `translateX(${isLeft ? '-100px' : '100px'})`
                    }}
                  >
                    {/* Mobile: Enhanced Timeline dot */}
                    <div className="relative z-30 flex flex-col items-center mb-8 md:mb-0 md:hidden">
                      <div className={`w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-2xl font-black text-white shadow-2xl border-4 border-white ring-8 ring-green-200/50 group-hover:ring-green-400/50 transition-all duration-700 ${
                        isVisible ? 'animate-bounce-slow scale-100' : 'opacity-0 scale-0'
                      }`} style={{ boxShadow: '0 0 40px 0 rgba(34, 197, 94, 0.3)' }}>
                        {idx + 1}
                      </div>
                      <div className={`w-14 h-14 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-2xl mt-4 shadow-xl border-4 border-green-300 transition-all duration-700 ${
                        isVisible ? 'animate-float' : 'opacity-0 scale-0'
                      }`}>
                        {item.icon}
                      </div>
                    </div>
                    
                    {/* Enhanced Content Cards */}
                    <div className={`flex-1 flex w-full ${isLeft ? 'justify-end md:pr-12' : 'justify-start md:pl-12'}`}> 
                      {isLeft ? (
                        <div className="w-full max-w-lg">
                          <div className={`relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border-t-8 border-green-400 p-8 md:p-12 flex flex-col items-center md:items-end group-hover:shadow-green-300/40 group-hover:bg-white/90 transition-all duration-700 overflow-hidden transform group-hover:-translate-y-2 group-hover:scale-105 ${
                            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-20'
                          }`} style={{ 
                            borderLeft: '6px solid #22c55e', 
                            background: 'linear-gradient(135deg, rgba(240, 253, 244, 0.9) 60%, rgba(187, 247, 208, 0.8) 100%)',
                            boxShadow: isVisible ? '0 25px 50px -12px rgba(34, 197, 94, 0.25)' : 'none'
                          }}>
                            
                            <img src={
                              idx === 1
                                ? 'images/Image of kids.jpg'
                                : idx === 2
                                  ? 'images/picture of kids 4.jpg'
                                  : JOURNEY_IMAGES[idx % JOURNEY_IMAGES.length]
                            } alt={item.step + ' photo'} className="w-full max-w-md h-48 md:h-64 lg:h-80 object-cover object-center rounded-2xl shadow-xl border-4 border-green-300 mb-8 transition-all duration-700 group-hover:-rotate-1 group-hover:scale-105 ring-4 ring-green-200/50 group-hover:ring-green-300/70" 
                            style={{ 
                              boxShadow: '0 20px 40px -8px rgba(34, 197, 94, 0.3)',
                              objectPosition: isMobile ? 
                                (idx === 0 ? 'center 50%' : 
                                 idx === 1 ? 'center 0%' : 
                                 idx === 2 ? 'center 55%' : 
                                 idx === 3 ? 'center 65%' : 
                                 idx === 4 ? 'center 0%' : 'center 60%') :
                                (idx === 0 ? 'center 30%' : 
                                 idx === 1 ? 'center 40%' : 
                                 idx === 2 ? 'center 35%' : 
                                 idx === 3 ? 'center 45%' : 
                                 idx === 4 ? 'center 40%' : 'center 40%'),
                              transform: isMobile && idx === 1 ? 'translateY(-150px) !important' : 'none'
                            }} />
                            
                            <div className="flex items-center gap-4 mb-6">
                              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-2xl font-black text-white shadow-xl border-4 border-white group-hover:scale-110 transition-all duration-500">
                                {idx + 1}
                              </div>
                              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-200 to-emerald-300 flex items-center justify-center text-2xl shadow-lg border-2 border-green-300 group-hover:rotate-12 transition-all duration-500">
                                {item.icon}
                              </div>
                            </div>
                            
                            <div className="flex flex-col items-center w-full mb-6">
                              <div className="text-3xl md:text-4xl lg:text-5xl font-black text-green-700 text-center tracking-tight leading-tight group-hover:text-green-600 transition-colors duration-500">
                                {item.step}
                              </div>
                              <div className="w-32 h-2 rounded-full mt-3 bg-gradient-to-r from-green-400 to-emerald-500 group-hover:from-green-500 group-hover:to-emerald-600 transition-all duration-500" />
                            </div>
                            
                            <div className="text-lg md:text-xl lg:text-2xl text-gray-700 max-w-md text-center font-medium leading-relaxed group-hover:text-gray-800 transition-colors duration-500">
                              {item.desc}
                            </div>
                          </div>
                        </div>
                      ) : <div className="hidden md:block" style={{ minWidth: '3rem' }} />}
                    </div>
                    
                    {/* Enhanced Desktop Timeline Node */}
                    <div className="relative z-30 flex flex-col items-center hidden md:flex">
                      <div className={`w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-3xl font-black text-white shadow-2xl border-6 border-white ring-8 ring-green-200/50 group-hover:ring-green-400/70 group-hover:scale-125 transition-all duration-700 ${
                        isVisible ? 'animate-bounce-slow scale-100' : 'opacity-0 scale-0'
                      }`} style={{ boxShadow: '0 0 50px 0 rgba(34, 197, 94, 0.4)' }}>
                        {idx + 1}
                      </div>
                      
                      <div className={`w-4 h-32 bg-gradient-to-b from-green-300 to-emerald-400 rounded-full my-4 transition-all duration-1000 ${
                        isVisible ? 'animate-pulse-slow opacity-70' : 'opacity-0'
                      }`} />
                      
                      <div className={`w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-3xl shadow-xl border-4 border-green-300 group-hover:rotate-12 group-hover:scale-110 transition-all duration-700 ${
                        isVisible ? 'animate-float' : 'opacity-0 scale-0'
                      }`}>
                        {item.icon}
                      </div>
                    </div>
                    
                    {/* Right content (mirror of left) */}
                    <div className={`flex-1 flex w-full ${!isLeft ? 'justify-start md:pl-12' : 'justify-end md:pr-12'}`}>
                      {!isLeft ? (
                        <div className="w-full max-w-lg">
                          <div className={`relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border-t-8 border-green-400 p-8 md:p-12 flex flex-col items-center md:items-start group-hover:shadow-green-300/40 group-hover:bg-white/90 transition-all duration-700 overflow-hidden transform group-hover:-translate-y-2 group-hover:scale-105 ${
                            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-20'
                          }`} style={{ 
                            borderRight: '6px solid #22c55e', 
                            background: 'linear-gradient(135deg, rgba(240, 253, 244, 0.9) 60%, rgba(187, 247, 208, 0.8) 100%)',
                            boxShadow: isVisible ? '0 25px 50px -12px rgba(34, 197, 94, 0.25)' : 'none'
                          }}>
                            
                            <img src={
                              idx === 1
                                ? 'images/Image of kids.jpg'
                                : idx === 2
                                  ? 'images/picture of kids 4.jpg'
                                  : JOURNEY_IMAGES[idx % JOURNEY_IMAGES.length]
                            } alt={item.step + ' photo'} className="w-full max-w-md h-48 md:h-64 lg:h-80 object-cover object-center rounded-2xl shadow-xl border-4 border-green-300 mb-8 transition-all duration-700 group-hover:rotate-1 group-hover:scale-105 ring-4 ring-green-200/50 group-hover:ring-green-300/70" 
                            style={{ 
                              boxShadow: '0 20px 40px -8px rgba(34, 197, 94, 0.3)',
                              objectPosition: isMobile ? 
                                (idx === 0 ? 'center 50%' : 
                                 idx === 1 ? 'center 0%' : 
                                 idx === 2 ? 'center 55%' : 
                                 idx === 3 ? 'center 65%' : 
                                 idx === 4 ? 'center 80%' : 'center 60%') :
                                (idx === 0 ? 'center 30%' : 
                                 idx === 1 ? 'center 40%' : 
                                 idx === 2 ? 'center 35%' : 
                                 idx === 3 ? 'center 45%' : 
                                 idx === 4 ? 'center 40%' : 'center 40%'),
                              transform: isMobile && idx === 1 ? 'translateY(-150px) !important' : 'none'
                            }} />
                            
                            <div className="flex items-center gap-4 mb-6">
                              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-2xl font-black text-white shadow-xl border-4 border-white group-hover:scale-110 transition-all duration-500">
                                {idx + 1}
                              </div>
                              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-200 to-emerald-300 flex items-center justify-center text-2xl shadow-lg border-2 border-green-300 group-hover:rotate-12 transition-all duration-500">
                                {item.icon}
                              </div>
                            </div>
                            
                            <div className="flex flex-col items-center w-full mb-6">
                              <div className="text-3xl md:text-4xl lg:text-5xl font-black text-green-700 text-center tracking-tight leading-tight group-hover:text-green-600 transition-colors duration-500">
                                {item.step}
                              </div>
                              <div className="w-32 h-2 rounded-full mt-3 bg-gradient-to-r from-green-400 to-emerald-500 group-hover:from-green-500 group-hover:to-emerald-600 transition-all duration-500" />
                            </div>
                            
                            <div className="text-lg md:text-xl lg:text-2xl text-gray-700 max-w-md text-center font-medium leading-relaxed group-hover:text-gray-800 transition-colors duration-500">
                              {item.desc}
                            </div>
                          </div>
                        </div>
                      ) : <div className="hidden md:block" style={{ minWidth: '3rem' }} />}
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

      {/* Leadership Section: Professional Tabs Design */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-gray-900 via-green-900 to-black text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-green-400/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-500/8 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-teal-400/12 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-20">
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text mb-6 animate-slide-in-from-top">
              Our Leadership
            </h3>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8 animate-fade-in-up delay-200">
              Meet the visionary founders and dedicated board members who drive our mission forward
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full animate-fade-in-up delay-400" />
          </div>

          {/* Professional Tab Navigation */}
          <div className="flex justify-center mb-12 md:mb-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-2 border border-white/20 shadow-2xl">
              <div className="flex space-x-2">
                <button
                  onClick={() => setActiveTab('founders')}
                  className={`px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-sm md:text-base transition-all duration-300 ${
                    activeTab === 'founders'
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg scale-105'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  Our Founder/Visionary
                </button>
                <button
                  onClick={() => setActiveTab('board')}
                  className={`px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-sm md:text-base transition-all duration-300 ${
                    activeTab === 'board'
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg scale-105'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  Board of Directors
                </button>
              </div>
            </div>
          </div>

          {/* Tab Content */}
          <div className="relative">
            {/* Founders Tab */}
            <div className={`transition-all duration-500 ${activeTab === 'founders' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 absolute inset-0 pointer-events-none'}`}>
              <div className="flex justify-center">
                <div className="max-w-2xl">
                {/* Founder Card 1 */}
                <div className="group relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 hover:border-green-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
                    {/* Emanuel Smith Image */}
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 group-hover:border-green-300/50 transition-all duration-500 group-hover:scale-110">
                      <img 
                        src="/images/Emmanuel Smith.jpg" 
                        alt="Emanuel Smith Jr" 
                        className="w-full h-full object-cover object-center"
                        style={{ objectPosition: 'center -5%' }}
                      />
                    </div>
                    
                    <div className="flex-1 text-center md:text-left">
                      <h4 className="text-2xl md:text-3xl font-black text-white mb-3 group-hover:text-green-300 transition-colors duration-300">
                        Emanuel A. Smith Jr
                      </h4>
                      <p className="text-lg md:text-xl text-green-300 font-semibold mb-4">
                        Founder & Executive Director
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        A passionate leader dedicated to transforming young lives through mentorship, education, and community building. With years of experience in youth development, Emmanuel brings innovative approaches to creating lasting positive change and has been the driving force behind Unit 180's mission to empower young men.
                      </p>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>

            {/* Board of Directors Tab */}
            <div className={`transition-all duration-500 ${activeTab === 'board' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 absolute inset-0 pointer-events-none'}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {/* Board Member 1 */}
                <div className="group relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 hover:border-green-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20 text-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    {/* Emanuel Smith Image */}
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 group-hover:border-green-300/50 transition-all duration-500 group-hover:scale-110 mx-auto mb-6">
                      <img 
                        src="/images/Emmanuel Smith.jpg" 
                        alt="Emanuel A. Smith Jr" 
                        className="w-full h-full object-cover object-center"
                        style={{ objectPosition: 'center -5%' }}
                      />
                    </div>
                    
                    <h4 className="text-xl md:text-3xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors duration-300">
                      Emanuel A. Smith Jr
                    </h4>
                    <p className="text-base md:text-lg text-green-300 font-medium mb-4">
                      Founder & Executive Director
                    </p>
                    <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                      Dedicated to advancing our mission through strategic leadership and community engagement.
                    </p>
                  </div>
                </div>

                {/* Board Member 2 */}
                <div className="group relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 hover:border-green-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20 text-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    {/* Ramiri Image */}
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 group-hover:border-emerald-300/50 transition-all duration-500 group-hover:scale-110 mx-auto mb-6">
                      <img 
                        src="/images/Ramiri inside final.jpg" 
                        alt="Ramiri" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <h4 className="text-xl md:text-3xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors duration-300">
                      Ra'Marri Jones
                    </h4>
                    <p className="text-base md:text-lg text-emerald-300 font-medium mb-4">
                      Board Member
                    </p>
                    <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                      Committed to fostering positive change and supporting youth development initiatives.
                    </p>
                  </div>
                </div>

                {/* Board Member 3 */}
                <div className="group relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 hover:border-green-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20 text-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    {/* Theresa Image */}
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 group-hover:border-teal-300/50 transition-all duration-500 group-hover:scale-110 mx-auto mb-6">
                      <img 
                        src="/images/theresa inside.jpg" 
                        alt="Dr. Theresa J. Smith" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <h4 className="text-xl md:text-3xl font-bold text-white mb-3 group-hover:text-teal-300 transition-colors duration-300">
                      Dr. Theresa J. Smith
                    </h4>
                    <p className="text-base md:text-lg text-teal-300 font-medium mb-4">
                      Board Member
                    </p>
                    <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                      Bringing academic expertise and research-driven approaches to youth mentorship programs.
                    </p>
                  </div>
                </div>

                {/* Board Member 4 */}
                <div className="group relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 hover:border-green-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20 text-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    {/* Alexis Image */}
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 group-hover:border-cyan-300/50 transition-all duration-500 group-hover:scale-110 mx-auto mb-6">
                      <img 
                        src="/images/alexis inside final.jpg" 
                        alt="Alexis Y. Hardy" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <h4 className="text-xl md:text-3xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                      Alexis Y. Hardy
                    </h4>
                    <p className="text-base md:text-lg text-cyan-300 font-medium mb-4">
                      Board Member
                    </p>
                    <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                      Passionate about creating opportunities and building strong community partnerships.
                    </p>
                  </div>
                </div>
              </div>
            </div>
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

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Index;
