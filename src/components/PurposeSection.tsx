
import React from 'react';
import { UserCheck, ShieldCheck, Target, TrendingUp, Users } from 'lucide-react';

const PurposeSection = () => {
  const coreValues = [
    { number: '1', title: 'Self-awareness', icon: UserCheck, color: 'from-green-400 to-green-600' },
    { number: '2', title: 'Integrity', icon: ShieldCheck, color: 'from-blue-400 to-blue-600' },
    { number: '3', title: 'Discipline', icon: Target, color: 'from-yellow-400 to-yellow-600' },
    { number: '4', title: 'Perseverance', icon: TrendingUp, color: 'from-purple-400 to-purple-600' },
    { number: '5', title: 'Brotherhood', icon: Users, color: 'from-pink-400 to-pink-600' },
  ];

  return (
    <div className="relative py-32 bg-gradient-to-br from-green-50 via-white to-green-100 overflow-hidden font-sans">
      {/* Top SVG Divider */}
      <svg className="absolute top-0 left-0 w-full h-24 text-green-200" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" fillOpacity="0.3" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" /></svg>
      <div className="container mx-auto px-4 relative z-10">
        {/* Our Purpose Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-5xl font-extrabold text-green-700 mb-4 drop-shadow-lg tracking-tight border-b-4 border-green-400 inline-block pb-2">Our Purpose</h2>
          <div className="w-24 h-1 bg-green-400 mx-auto rounded-full mb-2" />
        </div>
        {/* Alternating Image/Text Blocks */}
        <div className="space-y-24">
          <div className="flex flex-col lg:flex-row items-center gap-12 animate-fade-in-up">
            <div className="flex-1">
              <img src="/images/Image of kids.png" alt="Young men group" className="w-full rounded-2xl shadow-2xl object-cover aspect-[3/1]" />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <div className="bg-white/80 p-8 rounded-2xl shadow-xl">
                <h3 className="text-3xl font-bold text-green-700 mb-4">Guidance & Support</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Provides guidance, support, and positive role models to young men, helping them develop into confident, responsible, and successful individuals.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12 animate-fade-in-up delay-200">
            <div className="flex-1 text-center lg:text-right">
              <div className="bg-white/80 p-8 rounded-2xl shadow-xl">
                <h3 className="text-3xl font-bold text-green-700 mb-4">Empowerment & Readiness</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Believes that through our comprehensive programs centered around youth development, we will prepare young men to be college and career ready, empower them to grow and lead within their communities and become assets to the world.
                </p>
              </div>
            </div>
            <div className="flex-1">
              <img src="/images/picture of kids and mentor.png" alt="Graduation ceremony" className="w-full rounded-2xl shadow-2xl object-cover aspect-[3/1]" />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-12 animate-fade-in-up delay-300">
            <div className="flex-1">
              <img src="/images/Image of kids 2.png" alt="Mentorship meeting" className="w-full rounded-2xl shadow-2xl object-cover aspect-[3/1]" />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <div className="bg-white/80 p-8 rounded-2xl shadow-xl">
                <h3 className="text-3xl font-bold text-green-700 mb-4">The Fastidious 5</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Believes this task is possible if we lean on the Fastidious 5; self-awareness, perseverance, integrity, brotherhood, and discipline. By building this strong network of young men we increase support, encouragement, and accountability; therefore, inspiring the next generation of young men to grow, lead and give back.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Mission Section */}
        <div className="my-32 text-center animate-fade-in-up delay-400">
          <div className="bg-gradient-to-r from-green-400 to-green-600 text-white px-12 py-6 text-4xl font-extrabold mb-8 inline-block rounded-2xl shadow-xl tracking-tight border-b-4 border-white">MISSION</div>
          <div className="bg-white/90 p-10 rounded-2xl shadow-xl max-w-4xl mx-auto">
            <p className="text-2xl text-gray-700 leading-relaxed">
              Meet at-promise young men where they are, help them to develop a "success" plan and ensure they have the necessary tools and skills to achieve their goal.
            </p>
          </div>
        </div>
        {/* The Fastidious 5 */}
        <div className="text-center mb-16 animate-fade-in-up delay-500">
          <div 
            className="py-12 mb-8 bg-cover bg-center relative rounded-2xl shadow-xl border-4 border-green-400 flex flex-col items-center justify-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/extra picture.png')`
            }}
          >
            <h3 className="text-4xl font-extrabold text-green-400 mb-2 tracking-tight">THE FASTIDIOUS 5:</h3>
            <h4 className="text-2xl font-bold text-white">OUR CORE VALUES</h4>
          </div>
          <div className="grid gap-8 max-w-2xl mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {coreValues.map((value, index) => (
              <div
                key={value.number}
                className={`flex flex-col items-center justify-center bg-gradient-to-br ${value.color} text-white px-8 py-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-200 animate-fade-in-up delay-${index * 100}`}
              >
                <div className="mb-2 rounded-full bg-white/20 p-3 shadow-lg">
                  <value.icon className="text-white" size={36} />
                </div>
                <span className="text-xl font-bold">{value.number}. {value.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Bottom SVG Divider */}
      <svg className="absolute bottom-0 left-0 w-full h-24 text-green-200" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" fillOpacity="0.3" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" /></svg>
      {/* Animations */}
      <style>{`
        .animate-fade-in-up {
          opacity: 0;
          transform: translateY(40px);
          animation: fade-in-up 1.2s cubic-bezier(.23,1.01,.32,1) forwards;
        }
        .animate-fade-in-up.delay-200 { animation-delay: 0.2s; }
        .animate-fade-in-up.delay-300 { animation-delay: 0.3s; }
        .animate-fade-in-up.delay-400 { animation-delay: 0.4s; }
        .animate-fade-in-up.delay-500 { animation-delay: 0.5s; }
        @keyframes fade-in-up {
          to {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </div>
  );
};

export default PurposeSection;



