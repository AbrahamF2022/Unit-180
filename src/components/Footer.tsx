import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Heart, Users, Target, Award, Instagram } from 'lucide-react';

const Footer = () => {
  const stats = [
    { icon: Users, number: '50+', label: 'Youth Mentored' },
    { icon: Target, number: '100%', label: 'Success Rate' },
    { icon: Award, number: '2+', label: 'Years Impact' },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-green-900 to-black text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20v20h40V20H20z'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10">
        {/* Stats Section */}
        <div className="border-b border-green-800/50 bg-green-800/20 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-6 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="group">
                  <div className="flex items-center justify-center mb-3">
                    <div className="p-3 bg-green-500/20 rounded-full group-hover:bg-green-500/30 transition-colors duration-300">
                      <stat.icon className="w-8 h-8 text-green-400" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-green-400 mb-1">{stat.number}</div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            
            {/* Brand Section */}
            <div className="text-center lg:text-left lg:pr-8">
              <div className="flex items-center justify-center lg:justify-start space-x-3 mb-8">
                <img 
                  src="images/Logo unit180.png" 
                  alt="Unit 180 Logo" 
                  className="w-14 h-14 object-contain rounded bg-white shadow-lg p-1 ring-2 ring-green-400"
                />
                <div>
                  <div className="text-2xl font-bold text-green-400">UNIT 180</div>
                  <div className="text-sm text-green-300 uppercase tracking-wider">Rewriting the Narrative</div>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                Empowering at-promise young men through mentorship, brotherhood, and the Fastidious 5 principles. Building leaders who give back to their communities.
              </p>
              
              {/* Impact Quote */}
              <div className="p-6 bg-gradient-to-r from-green-900/50 to-emerald-900/50 rounded-xl border-l-4 border-green-400">
                <p className="text-base text-gray-300 italic leading-relaxed">
                  "We lift as we climb. Every young man we mentor becomes a leader who transforms his community."
                </p>
                <p className="text-sm text-green-400 mt-3 font-medium">- Unit 180 Philosophy</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="text-center lg:text-left lg:pl-8">
              <h3 className="text-xl font-bold text-green-400 mb-8">Contact Us</h3>
              <div className="space-y-6">
                <div className="flex items-start justify-center lg:justify-start space-x-4 group">
                  <div className="w-12 h-12 p-3 bg-green-500/20 rounded-full group-hover:bg-green-500/30 transition-colors duration-300 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-green-400" />
                  </div>
                  <div className="text-gray-300 text-center lg:text-left flex-1">
                    <p className="font-semibold text-lg mb-1">Unit 180 Headquarters</p>
                    <p className="text-base">2501 Chatham Rd. Suite 5418<br />Sringfield, IL 627049</p>
                  </div>
                </div>
                
                <div className="flex items-start justify-center lg:justify-start space-x-4 group">
                  <div className="w-12 h-12 p-3 bg-green-500/20 rounded-full group-hover:bg-green-500/30 transition-colors duration-300 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-green-400" />
                  </div>
                  <div className="text-gray-300 text-center lg:text-left flex-1">
                    <a href="tel:+13124889668" className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-lg font-medium">
                     (312) 488-9668
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start justify-center lg:justify-start space-x-4 group">
                  <div className="w-12 h-12 p-3 bg-green-500/20 rounded-full group-hover:bg-green-500/30 transition-colors duration-300 flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-6 h-6 text-green-400" />
                  </div>
                  <div className="text-gray-300 text-center lg:text-left flex-1">
                    <a href="https://instagram.com/unit180mentoring" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-lg font-medium">
                      @unit180mentoring
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 