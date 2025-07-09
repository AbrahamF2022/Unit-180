
import React from 'react';
import { Shield, Lightbulb, Users, Zap, Heart } from 'lucide-react';

const PurposeSection = () => {
  const coreValues = [
    { number: '1', title: 'Self-awareness', icon: Lightbulb },
    { number: '2', title: 'Integrity', icon: Shield },
    { number: '3', title: 'Discipline', icon: Zap },
    { number: '4', title: 'Perseverance', icon: Users },
    { number: '5', title: 'Brotherhood', icon: Heart },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Our Purpose Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">Our Purpose</h2>
        </div>

        {/* Unit 180 Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-block">
              <div className="bg-green-500 text-white px-8 py-3 rounded-full text-2xl font-bold mb-8">
                UNIT 180
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <p className="text-lg text-gray-700 leading-relaxed">
                Provides guidance, support, and positive role models to young men, helping them develop into confident, responsible, and successful individuals.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Believes that through our comprehensive programs centered around youth development, we will prepare young men to be college and career ready, empower them to grow and lead within their communities and become assets to the world.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Believes this task is possible if we lean on the Fastidious 5; self-awareness, perseverance, integrity, brotherhood, and discipline. By building this strong network of young men we increase support, encouragement, and accountability; therefore, inspiring the next generation of young men to grow, lead and give back.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 animate-scale-in">
              <div className="aspect-square bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                <div className="text-center text-white">
                  <Users size={60} className="mx-auto mb-4" />
                  <p className="text-lg font-semibold">Building Leaders</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="bg-green-500 text-white px-8 py-3 rounded-full text-2xl font-bold inline-block mb-8">
              MISSION
            </div>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Meet at-promise young men where they are, help them to develop a "success" plan and ensure they have the necessary tools and skills to achieve their goal.
            </p>
          </div>
        </div>

        {/* The Fastidious 5 */}
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-green-600 mb-4">THE FASTIDIOUS 5:</h3>
          <h4 className="text-2xl font-bold text-gray-800">OUR CORE VALUES</h4>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {coreValues.map((value, index) => (
            <div
              key={value.number}
              className="bg-gradient-to-br from-green-400 to-green-600 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">{value.number}.</div>
                <value.icon size={32} className="mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-lg font-semibold">{value.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PurposeSection;
