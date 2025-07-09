
import React from 'react';
import Navigation from '../components/Navigation';
import { Quote, Star, Heart, Users, Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "Unit 180 transformed my outlook on life. The mentorship I received helped me develop confidence, set goals, and believe in my potential. I went from struggling academically to graduating with honors.",
      author: "Marcus Thompson",
      role: "Program Graduate, College Student",
      rating: 5
    },
    {
      id: 2,
      text: "As a single mother, having Unit 180 provide positive male role models for my son has been invaluable. They've helped him develop confidence, leadership skills, and a sense of direction.",
      author: "Sarah Johnson",
      role: "Parent",
      rating: 5
    },
    {
      id: 3,
      text: "The brotherhood and accountability I found through Unit 180 changed my perspective on what it means to be a leader in my community. I'm now mentoring others and giving back.",
      author: "Anthony Davis",
      role: "Mentor & Former Mentee",
      rating: 5
    },
    {
      id: 4,
      text: "Unit 180 helped me stay focused on my goals when everything else seemed chaotic. The mentors never gave up on me, even when I gave up on myself. I'm forever grateful.",
      author: "Jordan Williams",
      role: "Program Graduate",
      rating: 5
    },
    {
      id: 5,
      text: "Being a mentor with Unit 180 has been one of the most rewarding experiences of my life. Watching young men discover their potential and achieve their dreams is incredible.",
      author: "Michael Rodriguez",
      role: "Mentor",
      rating: 5
    },
    {
      id: 6,
      text: "The program taught me discipline, respect, and the importance of education. Unit 180 didn't just change my grades - it changed my entire future.",
      author: "DeShawn Parker",
      role: "College Bound Senior",
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
      icon: Target,
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
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Header */}
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            SUCCESS STORIES
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear from the young men, families, and mentors whose lives have been transformed through the Unit 180 mentorship program.
          </p>
        </div>
      </div>

      {/* Impact Stats */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact by the Numbers</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These numbers represent real lives changed and futures transformed through mentorship.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {impactStats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 shadow-lg text-center"
              >
                <div className="bg-green-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="text-white" size={32} />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-xl font-semibold text-green-500 mb-3">{stat.label}</div>
                <div className="text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Community Says</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every story is unique, but they all share a common thread of growth, hope, and transformation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="bg-white border-2 border-gray-100 rounded-2xl p-8 shadow-lg"
              >
                <Quote className="text-green-500 mb-4" size={40} />
                
                {/* Star Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>

                <blockquote className="text-gray-700 leading-relaxed mb-6 italic text-lg">
                  "{testimonial.text}"
                </blockquote>

                <div className="border-l-4 border-green-500 pl-4">
                  <div className="font-bold text-gray-900">{testimonial.author}</div>
                  <div className="text-green-500 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-green-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Write Your Success Story?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join the hundreds of young men who have transformed their lives through Unit 180's mentorship program.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/join"
              className="bg-white text-green-500 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center"
            >
              Join as Mentee
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/mentor"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-green-500 transition-all duration-300 hover:scale-105 flex items-center justify-center"
            >
              Become a Mentor
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
