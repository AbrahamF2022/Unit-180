
import React from 'react';
import { ArrowRight, Users, Target, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-green-400 via-green-500 to-green-600 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-white/5 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-white/5 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative container mx-auto px-4 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className="text-white space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                GROW
                <span className="block text-green-200">LEAD</span>
                <span className="block">GIVE BACK</span>
              </h1>
              <p className="text-xl lg:text-2xl text-green-100 leading-relaxed max-w-lg">
                Guiding young men toward confidence, purpose, and leadership through mentorship rooted in self-awareness, perseverance, and integrity.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/donate"
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center group"
              >
                Support Us
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link
                to="/join"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-green-600 transition-all duration-300 hover:scale-105 flex items-center justify-center"
              >
                Learn More
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="text-green-200" size={32} />
                </div>
                <div className="text-3xl font-bold">500+</div>
                <div className="text-green-200">Young Men Mentored</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Target className="text-green-200" size={32} />
                </div>
                <div className="text-3xl font-bold">95%</div>
                <div className="text-green-200">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Heart className="text-green-200" size={32} />
                </div>
                <div className="text-3xl font-bold">10</div>
                <div className="text-green-200">Years Impact</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image Placeholder */}
          <div className="relative animate-scale-in delay-500">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
              <div className="aspect-square bg-gradient-to-br from-white/20 to-white/5 rounded-xl flex items-center justify-center">
                <div className="text-center text-white">
                  <Users size={80} className="mx-auto mb-4 opacity-60" />
                  <p className="text-lg opacity-80">Empowering the Next Generation</p>
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
