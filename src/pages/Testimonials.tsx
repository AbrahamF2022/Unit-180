
import React from 'react';
import Navigation from '../components/Navigation';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import { Quote, Star, Heart, Users } from 'lucide-react';

const Testimonials = () => {
  const additionalTestimonials = [
    {
      id: 4,
      text: "Unit 180 helped me stay focused on my goals when everything else seemed chaotic. Mr. Smith and the team never gave up on me, even when I gave up on myself.",
      author: "Jordan Williams",
      role: "Former Mentee, College Student",
      rating: 5
    },
    {
      id: 5,
      text: "As a single mother, having Unit 180 provide positive male role models for my son has been invaluable. They've helped him develop confidence and direction.",
      author: "Michelle Johnson",
      role: "Parent",
      rating: 5
    },
    {
      id: 6,
      text: "The brotherhood and accountability I found through Unit 180 changed my perspective on what it means to be a leader in my community.",
      author: "Anthony Davis",
      role: "Program Graduate",
      rating: 5
    }
  ];

  const impactStats = [
    {
      icon: Users,
      number: "500+",
      label: "Young Men Mentored",
      description: "Lives transformed through dedicated mentorship"
    },
    {
      icon: Star,
      number: "95%",
      label: "Success Rate",
      description: "Of participants achieve their goals"
    },
    {
      icon: Heart,
      number: "150+",
      label: "Active Mentors",
      description: "Dedicated volunteers making a difference"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <div className="pt-24 pb-12 bg-gradient-to-r from-green-600 to-green-400">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
            Testimonials
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-300">
            Hear from the young men, families, and mentors whose lives have been 
            transformed through the Unit 180 mentorship program.
          </p>
        </div>
      </div>

      {/* Main Testimonials Carousel */}
      <TestimonialsCarousel />

      {/* Impact Stats */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Impact by the Numbers</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These numbers represent real lives changed and futures transformed through mentorship.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {impactStats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="bg-green-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="text-white" size={32} />
                </div>
                <div className="text-4xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-xl font-semibold text-green-600 mb-3">{stat.label}</div>
                <div className="text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Testimonials Grid */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">More Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every story is unique, but they all share a common thread of growth, hope, and transformation.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {additionalTestimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <Quote className="text-green-400 mb-4" size={40} />
                
                {/* Star Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>

                <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </blockquote>

                <div className="border-l-4 border-green-400 pl-4">
                  <div className="font-bold text-gray-800">{testimonial.author}</div>
                  <div className="text-green-600 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-gradient-to-r from-green-600 to-green-400">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Write Your Success Story?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join the hundreds of young men who have transformed their lives through Unit 180's mentorship program.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/join"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Join as Mentee
            </a>
            <a
              href="/mentor"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-green-600 transition-all duration-300 hover:scale-105"
            >
              Become a Mentor
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
