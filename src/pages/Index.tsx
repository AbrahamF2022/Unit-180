
import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import PurposeSection from '../components/PurposeSection';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import { ArrowRight, Heart, Users, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Purpose Section */}
      <PurposeSection />
      
      {/* Testimonials */}
      <TestimonialsCarousel />
      
      {/* Call to Action Section */}
      <div className="py-20 bg-gradient-to-r from-green-600 to-green-400">
        <div className="container mx-auto px-4">
          <div className="text-center text-white mb-16">
            <h2 className="text-5xl font-bold mb-6 animate-fade-in">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-300">
              Whether you're a young man looking for guidance or an adult ready to mentor, 
              Unit 180 is here to help you grow, lead, and give back.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center animate-scale-in">
              <Users className="mx-auto text-green-200 mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-4">Join Unit 180</h3>
              <p className="text-green-100 mb-6">
                Apply to become part of our mentorship program and transform your future.
              </p>
              <Link
                to="/join"
                className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-all duration-300 inline-flex items-center group"
              >
                Apply Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center animate-scale-in delay-200">
              <Heart className="mx-auto text-green-200 mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-4">Become a Mentor</h3>
              <p className="text-green-100 mb-6">
                Share your experience and help guide the next generation of leaders.
              </p>
              <Link
                to="/mentor"
                className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-all duration-300 inline-flex items-center group"
              >
                Get Started
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center animate-scale-in delay-400">
              <Target className="mx-auto text-green-200 mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-4">Support Our Mission</h3>
              <p className="text-green-100 mb-6">
                Help us continue transforming lives through your generous donation.
              </p>
              <Link
                to="/donate"
                className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-all duration-300 inline-flex items-center group"
              >
                Donate Today
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
            </div>
          </div>

          <div className="text-center">
            <p className="text-green-100 text-lg mb-4">
              Questions? Want to learn more about our programs?
            </p>
            <Link
              to="/testimonials"
              className="text-white font-semibold text-lg hover:text-green-100 transition-colors underline"
            >
              Read more success stories →
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">U180</span>
                </div>
                <div>
                  <div className="text-green-400 font-bold text-xl">UNIT 180</div>
                  <div className="text-sm text-gray-400">IGNITING THE INNOVATIVE</div>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Guiding young men toward confidence, purpose, and leadership through mentorship 
                rooted in self-awareness, perseverance, and integrity.
              </p>
              <div className="text-sm text-gray-400">
                © 2024 Unit 180. All rights reserved.
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 text-green-400">Quick Links</h3>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/" className="hover:text-green-400 transition-colors">About Us</Link></li>
                <li><Link to="/testimonials" className="hover:text-green-400 transition-colors">Testimonials</Link></li>
                <li><Link to="/join" className="hover:text-green-400 transition-colors">Join Unit 180</Link></li>
                <li><Link to="/mentor" className="hover:text-green-400 transition-colors">Become a Mentor</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 text-green-400">Get Involved</h3>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/donate" className="hover:text-green-400 transition-colors">Donate Now</Link></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Volunteer</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Partner With Us</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
