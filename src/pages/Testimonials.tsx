
import React, { useState, useRef } from 'react';
import Navigation from '../components/Navigation';
import { Quote, Star, Heart, Users, Target, ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "Emanuel Smith was my Dean in high school from 2014-2017, but luckily, I had the pleasure of meeting him before then in 2013. Due to my wonderful & at times class clown of a brother. Smith took on a role of a Mentor / Father in-school & outside. For Example, During my time in high school I had seizures, I was disobedient & very irresponsible; Smith stuck it out with me through thick & thin. He gave me rides home when my mom was working overtime to make ends meet or when I didn't have bus fare, he always made sure that I was fed and overall taught me better ways to live life. \"I'm from the streets\", and it's not often that you come across mentors like Smith, who only want to see you win with no strings attached. With a willing mindset & someone like \"Dean Smith\" on your side there's nothing but greatness ahead! THANK YOU SMITH! I love that you're gonna expand this wonderful platform & share the amazing wisdom, knowledge & understanding with other young people in our city!",
      author: "Daniel Steen",
      role: "Former Mentee",
      rating: 5
    },
    {
      id: 2,
      text: "My son wasn't a so-called \"bad\" kid, but he was heading down a path I knew wasn't right. Then Emanuel aka Mr.Smith came into our lives—right on time. I had been praying hard for help, and God answered through Mr. Smith. He didn't just talk to my son; he spent real time with him—taking him places, playing basketball, and most importantly, showing him what it means to be a good and decent man. Mr. Smith was more than just a mentor. My son really didn't have a father figure or a man in his life to teach him how to be one, so Mr. Smith filled the gap. Mr. Smith gave so much to both of us, and I will be forever grateful for the impact he's had on our lives.",
      author: "Carmen Rivera",
      role: "Parent",
      rating: 5
    },
    {
      id: 3,
      text: "It has truly been a blessing to have you as a mentor in my son's life. Your consistent presence, leadership, and encouragement helped him grow both in confidence and character. I believe more families could benefit from the support and structure your program offers. Congratulations to you as well for continuing to pour into our youth with such purpose and passion. With gratitude, Derek Shelton",
      author: "Derek Shelton",
      role: "Parent",
      rating: 5
    },
    {
      id: 4,
      text: "As an educator with over 23 years of experience, I've had the honor of working with many individuals committed to uplifting our youth; still, few compare to Mr. Emanuel Smith Jr. Over the years, I came to know him not only as a man of deep conviction but as someone with an extraordinary calling: mentoring underserved youth, especially young males. Whether it was a young man with a strong foundation, who didn't want to listen to his parents (\"parents just don't understand\"—Will Smith) or a teen with no positive male role models at all, Emanuel showed up with compassion, consistency, and Christ-like love. I've watched him connect young men with meaningful activities to keep them off the streets. I've seen him walk with them through their darkest times—not with judgment, but with grace. Emanuel is the epitome of a great mentor and I look forward to the many lives he and his team will transform through Unit 180 mentoring. The city of Chicago is in for a treat!",
      author: "Dr. Tarita Murdock",
      role: "Principal",
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

  const [current, setCurrent] = useState(0);
  const nextTestimonial = () => setCurrent((current + 1) % testimonials.length);
  const prevTestimonial = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  // Video play overlay state and ref
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 via-white to-green-400 font-sans">
      <Navigation />
      {/* Header */}
      <div className="pt-24 pb-10 text-center">
        <h1 className="text-6xl lg:text-7xl font-black text-green-700 mb-6 tracking-tight drop-shadow-xl animate-fade-in-up">What People Are Saying</h1>
        <div className="w-24 h-2 bg-green-400 mx-auto rounded-full mb-6 animate-underline" />
        <p className="text-2xl text-gray-700 max-w-2xl mx-auto leading-relaxed font-medium animate-fade-in-up delay-200">
          Real stories from young men, families, and mentors whose lives have been transformed through Unit 180.
        </p>
      </div>
      {/* Written Testimonials Carousel */}
      <div className="py-20 flex flex-col items-center justify-center animate-fade-in-up delay-400">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-700 mb-4">Written Testimonials</h2>
          <p className="text-xl text-gray-600">More stories from our community</p>
        </div>
        
        <div className="relative max-w-6xl w-full mx-auto">
          <button onClick={prevTestimonial} className="absolute left-0 top-1/2 -translate-y-1/2 bg-green-400 text-white rounded-full p-4 shadow-lg hover:bg-green-500 z-10 focus:outline-none focus:ring-2 focus:ring-green-600"><svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg></button>
          <div className="transition-all duration-700 animate-bubble-fade-in">
            <div className="bg-white border-2 border-green-200 rounded-3xl p-12 shadow-2xl flex flex-col items-center max-w-5xl mx-auto relative speech-bubble">
              <div className="w-24 h-24 rounded-full border-4 border-green-400 bg-green-100 flex items-center justify-center mb-6 overflow-hidden shadow-lg">
                <Quote className="w-12 h-12 text-green-400" />
              </div>
              {/* Star Rating */}
              <div className="flex mb-4 animate-bounce-in">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={28} />
                ))}
              </div>
              <blockquote className="text-gray-700 leading-relaxed mb-8 italic text-xl text-center font-semibold max-w-4xl">
                "{testimonials[current].text}"
              </blockquote>
              <div className="border-l-4 border-green-400 pl-4 self-stretch">
                <div className="font-bold text-green-700 text-lg">{testimonials[current].author}</div>
                <div className="text-green-500 text-base">{testimonials[current].role}</div>
              </div>
            </div>
          </div>
          <button onClick={nextTestimonial} className="absolute right-0 top-1/2 -translate-y-1/2 bg-green-400 text-white rounded-full p-4 shadow-lg hover:bg-green-500 z-10 focus:outline-none focus:ring-2 focus:ring-green-600"><svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg></button>
        </div>
      </div>

      {/* Video Testimonial Section */}
      <div className="py-20 animate-fade-in-up delay-500">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-700 mb-4">Video Testimonial</h2>
            <p className="text-xl text-gray-600">Hear directly from our community</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="relative">
                <div className="relative">
                  <div className="relative w-full aspect-w-16 aspect-h-9 bg-black">
                    {/* Always use the original, uncompressed file for best clarity */}
                    <video
                      ref={videoRef}
                      className="w-full max-w-full max-h-[600px] object-contain"
                      controls
                      poster="images/placeholder.svg"
                      onPlay={() => setIsPlaying(true)}
                      onPause={() => setIsPlaying(false)}
                      onError={(e) => console.error('Video error:', e)}
                      onLoadStart={() => console.log('Video loading started')}
                      onCanPlay={() => console.log('Video can play')}
                    >
                      <source src="images/B7E5B2C2-968F-4283-AFE8-35536F1989CF.mov" type="video/quicktime" />
                      <source src="images/testimonial-web.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    {/* Play overlay, only show if not playing */}
                    {!isPlaying && (
                      <button
                        type="button"
                        className="absolute inset-0 flex items-center justify-center w-full h-full focus:outline-none"
                        onClick={handlePlay}
                        aria-label="Play video"
                        style={{ background: 'rgba(0,0,0,0.2)' }}
                      >
                        <div className="bg-black/20 rounded-full p-4 backdrop-blur-sm">
                          <Play className="text-white" size={48} />
                        </div>
                      </button>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-8 lg:p-12">
                <div className="text-center">
                  <Quote className="text-green-400 mx-auto mb-4" size={32} />
                  <div className="border-l-4 border-green-400 pl-6 mb-6">
                    <div className="font-bold text-green-700 text-xl">Melissa Champs</div>
                    <div className="text-green-500 text-lg">College Administrator</div>
                  </div>
                  <p className="text-gray-600 text-lg italic">
                    "Watch Melissa share her experience and insights about Unit 180's impact on our community."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-green-500 animate-fade-in-up delay-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Write Your Success Story?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join the hundreds of young men who have transformed their lives through Unit 180's mentorship program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/join"
              className="bg-white text-green-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all duration-200 hover:scale-105 shadow-lg flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              Join as Mentee
              <ArrowRight className="ml-2" size={24} />
            </Link>
            <Link
              to="/mentor"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-green-500 transition-all duration-200 hover:scale-105 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white"
            >
              Become a Mentor
              <ArrowRight className="ml-2" size={24} />
            </Link>
          </div>
        </div>
      </div>
      <style>{`
        .speech-bubble {
          position: relative;
        }
        .speech-bubble:after {
          content: '';
          position: absolute;
          bottom: -24px;
          left: 50%;
          transform: translateX(-50%);
          border-width: 24px 24px 0 24px;
          border-style: solid;
          border-color: #fff transparent transparent transparent;
          filter: drop-shadow(0 4px 8px rgba(34,197,94,0.15));
        }
        .animate-fade-in-up {
          opacity: 0;
          transform: translateY(40px);
          animation: fade-in-up 1.2s cubic-bezier(.23,1.01,.32,1) forwards;
        }
        .animate-fade-in-up.delay-200 { animation-delay: 0.2s; }
        .animate-fade-in-up.delay-400 { animation-delay: 0.4s; }
        .animate-fade-in-up.delay-600 { animation-delay: 0.6s; }
        @keyframes fade-in-up {
          to {
            opacity: 1;
            transform: none;
          }
        }
        .animate-underline {
          animation: underline-grow 1s cubic-bezier(.23,1.01,.32,1) forwards;
        }
        @keyframes underline-grow {
          from { width: 0; }
          to { width: 6rem; }
        }
        .animate-bubble-fade-in {
          opacity: 0;
          transform: scale(0.95);
          animation: bubble-fade-in 1s cubic-bezier(.23,1.01,.32,1) forwards;
        }
        @keyframes bubble-fade-in {
          to { opacity: 1; transform: none; }
        }
        .animate-bounce-in {
          animation: bounce-in 0.8s cubic-bezier(.23,1.01,.32,1) forwards;
        }
        @keyframes bounce-in {
          0% { transform: scale(0.5); opacity: 0; }
          60% { transform: scale(1.2); opacity: 1; }
          100% { transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default Testimonials;
