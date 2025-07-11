
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "Emanuel Smith was my Dean in high school from 2014-2017, but luckily, I had the pleasure of meeting him before then in 2013. Due to my wonderful & at times class clown of a brother. Smith took on a role of a Mentor / Father in-school & outside. For Example, During my time in high school I had seizures, I was disobedient & very irresponsible; Smith stuck it out with me through thick & thin. He gave me rides home when my mom was working overtime to make ends meet or when I didn't have bus fare, he always made sure that I was fed and overall taught me better ways to live life. \"I'm from the streets\", and it's not often that you come across mentors like Smith, who only want to see you win with no strings attached. With a willing mindset & someone like \"Dean Smith\" on your side there's nothing but greatness ahead! THANK YOU SMITH! I love that you're gonna expand this wonderful platform & share the amazing wisdom, knowledge & understanding with other young people in our city!",
      author: "Daniel Steen",
      role: "Former Mentee",
      highlight: "With a willing mindset & someone like \"Dean Smith\" on your side there's nothing but greatness ahead!"
    },
    {
      id: 2,
      text: "My son wasn't a so-called \"bad\" kid, but he was heading down a path I knew wasn't right. Then Emanuel aka Mr.Smith came into our lives—right on time. I had been praying hard for help, and God answered through Mr. Smith. He didn't just talk to my son; he spent real time with him—taking him places, playing basketball, and most importantly, showing him what it means to be a good and decent man. Mr. Smith was more than just a mentor. My son really didn't have a father figure or a man in his life to teach him how to be one, so Mr. Smith filled the gap. Mr. Smith gave so much to both of us, and I will be forever grateful for the impact he's had on our lives.",
      author: "Carmen Rivera",
      role: "Parent",
      highlight: "Mr. Smith gave so much to both of us, and I will be forever grateful for the impact he's had on our lives."
    },
    {
      id: 3,
      text: "It has truly been a blessing to have you as a mentor in my son's life. Your consistent presence, leadership, and encouragement helped him grow both in confidence and character. I believe more families could benefit from the support and structure your program offers. Congratulations to you as well for continuing to pour into our youth with such purpose and passion. With gratitude, Derek Shelton",
      author: "Derek Shelton",
      role: "Parent",
      highlight: "With gratitude, Derek Shelton"
    },
    {
      id: 4,
      text: "As an educator with over 23 years of experience, I've had the honor of working with many individuals committed to uplifting our youth; still, few compare to Mr. Emanuel Smith Jr. Over the years, I came to know him not only as a man of deep conviction but as someone with an extraordinary calling: mentoring underserved youth, especially young males. Whether it was a young man with a strong foundation, who didn't want to listen to his parents (\"parents just don't understand\"—Will Smith) or a teen with no positive male role models at all, Emanuel showed up with compassion, consistency, and Christ-like love. I've watched him connect young men with meaningful activities to keep them off the streets. I've seen him walk with them through their darkest times—not with judgment, but with grace. Emanuel is the epitome of a great mentor and I look forward to the many lives he and his team will transform through Unit 180 mentoring. The city of Chicago is in for a treat!",
      author: "Dr. Tarita Murdock",
      role: "Principal",
      highlight: "Emanuel is the epitome of a great mentor and I look forward to the many lives he and his team will transform through Unit 180 mentoring."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 animate-fade-in">Testimonials</h2>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Main Carousel */}
          <div className="relative overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-sm">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 p-8 lg:p-16">
                  <div className="grid lg:grid-cols-5 gap-8 items-center">
                    <div className="lg:col-span-4 space-y-6">
                      <Quote className="text-green-400 mb-4" size={48} />
                      <blockquote className="text-lg lg:text-xl leading-relaxed text-gray-300 max-w-4xl">
                        "{testimonial.text}"
                      </blockquote>
                      {testimonial.highlight && (
                        <p className="text-green-400 font-semibold text-lg italic">
                          "{testimonial.highlight}"
                        </p>
                      )}
                      <div className="border-l-4 border-green-400 pl-4">
                        <div className="font-bold text-xl text-white">{testimonial.author}</div>
                        <div className="text-green-400">{testimonial.role}</div>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-1">
                      <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-2xl p-6 shadow-2xl">
                        <div className="aspect-square bg-white/10 rounded-xl flex items-center justify-center">
                          <div className="text-center">
                            <Quote size={40} className="mx-auto mb-2 opacity-80" />
                            <p className="text-sm opacity-80">Impact Story #{testimonial.id}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all duration-300 backdrop-blur-sm"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all duration-300 backdrop-blur-sm"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-green-400 scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
