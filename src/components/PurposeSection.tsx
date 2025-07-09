
import React from 'react';

const PurposeSection = () => {
  const coreValues = [
    { number: '1', title: 'Self-awareness' },
    { number: '2', title: 'Integrity' },
    { number: '3', title: 'Discipline' },
    { number: '4', title: 'Perseverance' },
    { number: '5', title: 'Brotherhood' },
  ];

  return (
    <div 
      className="py-20 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('/lovable-uploads/e17382ea-5582-4838-b1d8-c703453c2e30.png')`
      }}
    >
      <div className="container mx-auto px-4">
        {/* Our Purpose Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6 drop-shadow-lg">Our Purpose</h2>
        </div>

        {/* Unit 180 Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="bg-green-500 text-white px-12 py-4 text-4xl font-bold mb-12 inline-block">
              UNIT 180
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Provides guidance, support, and positive role models to young men, helping them develop into confident, responsible, and successful individuals.
              </p>
              <img 
                src="/lovable-uploads/e17382ea-5582-4838-b1d8-c703453c2e30.png" 
                alt="Young men group" 
                className="w-full h-32 object-cover rounded"
              />
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Believes that through our comprehensive programs centered around youth development, we will prepare young men to be college and career ready, empower them to grow and lead within their communities and become assets to the world.
              </p>
              <img 
                src="/lovable-uploads/e17382ea-5582-4838-b1d8-c703453c2e30.png" 
                alt="Graduation ceremony" 
                className="w-full h-32 object-cover rounded"
              />
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Believes this task is possible if we lean on the Fastidious 5; self-awareness, perseverance, integrity, brotherhood, and discipline. By building this strong network of young men we increase support, encouragement, and accountability; therefore, inspiring the next generation of young men to grow, lead and give back.
              </p>
              <img 
                src="/lovable-uploads/e17382ea-5582-4838-b1d8-c703453c2e30.png" 
                alt="Mentorship meeting" 
                className="w-full h-32 object-cover rounded"
              />
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mb-20 text-center">
          <div className="bg-green-500 text-white px-12 py-4 text-4xl font-bold mb-8 inline-block">
            MISSION
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed">
              Meet at-promise young men where they are, help them to develop a "success" plan and ensure they have the necessary tools and skills to achieve their goal.
            </p>
          </div>
        </div>

        {/* The Fastidious 5 */}
        <div className="text-center mb-12">
          <div 
            className="py-8 mb-8 bg-cover bg-center relative"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/lovable-uploads/e17382ea-5582-4838-b1d8-c703453c2e30.png')`
            }}
          >
            <h3 className="text-4xl font-bold text-green-400 mb-2">THE FASTIDIOUS 5:</h3>
            <h4 className="text-2xl font-bold text-white">OUR CORE VALUES</h4>
          </div>
        </div>

        <div className="grid gap-4 max-w-md mx-auto">
          {coreValues.map((value, index) => (
            <div
              key={value.number}
              className="bg-green-500 text-white px-8 py-4 text-xl font-bold text-center hover:bg-green-600 transition-all duration-300 hover:scale-105"
            >
              {value.number}. {value.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PurposeSection;
