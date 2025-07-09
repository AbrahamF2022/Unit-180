
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import { Heart, DollarSign, ArrowRight, Check } from 'lucide-react';

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(250);
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');

  const predefinedAmounts = [100, 250, 500, 1000];

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount(null);
  };

  const getCurrentAmount = () => {
    return selectedAmount || parseInt(customAmount) || 0;
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-green-200 via-white to-green-400 overflow-hidden font-sans">
      {/* Top SVG Divider */}
      <svg className="absolute top-0 left-0 w-full h-24 text-green-300" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" fillOpacity="0.3" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" /></svg>
      <Navigation />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16 animate-fade-in-up">
              <h1 className="text-5xl lg:text-6xl font-extrabold text-green-700 mb-6 tracking-tight drop-shadow-lg">SUPPORT OUR MISSION</h1>
              <div className="w-24 h-1 bg-green-400 mx-auto rounded-full mb-4" />
              <p className="text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
                Your donation directly impacts young men in our community, helping them develop into confident leaders and positive role models.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left Side - Impact */}
              <div className="space-y-10 animate-fade-in-up delay-200">
                <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-10 shadow-2xl border border-green-100">
                  <div className="flex items-center mb-6">
                    <Heart className="text-green-500 mr-3" size={32} />
                    <h2 className="text-2xl font-bold text-green-700">Your Impact</h2>
                  </div>
                  {/* Animated Progress Bar */}
                  <div className="mb-6">
                    <div className="flex justify-between mb-1 text-sm font-semibold text-green-700">
                      <span>Goal: $10,000</span>
                      <span>Raised: $4,200</span>
                    </div>
                    <div className="w-full bg-green-100 rounded-full h-4 overflow-hidden">
                      <div className="bg-gradient-to-r from-green-400 to-green-600 h-4 rounded-full animate-progress-bar" style={{ width: '42%' }} />
                    </div>
                    <style>{`
                      .animate-progress-bar {
                        animation: progress-bar 2s cubic-bezier(.23,1.01,.32,1) forwards;
                      }
                      @keyframes progress-bar {
                        from { width: 0; }
                        to { width: 42%; }
                      }
                    `}</style>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-green-100">
                      <span className="text-green-700 font-bold">$100</span>
                      <span className="text-sm text-gray-600">Mentorship materials for 5 young men</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-green-100">
                      <span className="text-green-700 font-bold">$250</span>
                      <span className="text-sm text-gray-600">Full month of group activities</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-green-100">
                      <span className="text-green-700 font-bold">$500</span>
                      <span className="text-sm text-gray-600">Leadership workshop series</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-green-700 font-bold">$1000</span>
                      <span className="text-sm text-gray-600">Program support for entire quarter</span>
                    </div>
                  </div>
                </div>
                <div className="bg-green-50 rounded-2xl p-8 shadow-lg border border-green-100 animate-fade-in-up delay-300">
                  <h3 className="text-xl font-bold text-green-700 mb-4">Success Stories</h3>
                  <div className="space-y-4">
                    <blockquote className="border-l-4 border-green-500 pl-4">
                      <p className="text-gray-700 italic">"The mentors at Unit 180 helped me find my confidence. I learned that I could be a leader in my community and now I'm helping other young men find their path."</p>
                      <cite className="text-green-600 font-semibold mt-2 block">- Marcus, Age 18</cite>
                    </blockquote>
                  </div>
                </div>
              </div>
              {/* Right Side - Donation Form */}
              <div className="bg-white/80 backdrop-blur-lg border-2 border-green-100 rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up delay-400">
                <div className="bg-gradient-to-r from-green-600 to-green-400 text-white p-8">
                  <h2 className="text-2xl font-bold">Make a Donation</h2>
                </div>
                <div className="p-10">
                  {/* Donation Type Toggle */}
                  <div className="flex bg-green-100 rounded-lg p-1 mb-8">
                    <button
                      onClick={() => setDonationType('one-time')}
                      className={`flex-1 py-3 px-4 rounded-md font-semibold transition-all duration-200 ${
                        donationType === 'one-time'
                          ? 'bg-green-500 text-white shadow-md'
                          : 'text-green-700 hover:text-green-900'
                      }`}
                    >
                      One-time
                    </button>
                    <button
                      onClick={() => setDonationType('monthly')}
                      className={`flex-1 py-3 px-4 rounded-md font-semibold transition-all duration-200 ${
                        donationType === 'monthly'
                          ? 'bg-green-500 text-white shadow-md'
                          : 'text-green-700 hover:text-green-900'
                      }`}
                    >
                      Monthly
                    </button>
                  </div>
                  {/* Amount Selection */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {predefinedAmounts.map((amount) => (
                      <button
                        key={amount}
                        onClick={() => handleAmountSelect(amount)}
                        className={`p-4 rounded-lg border-2 font-bold text-lg transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 ${
                          selectedAmount === amount
                            ? 'border-green-500 bg-green-50 text-green-700 shadow-md'
                            : 'border-green-100 text-green-700 hover:border-green-400'
                        }`}
                      >
                        ${amount}
                      </button>
                    ))}
                  </div>
                  {/* Custom Amount */}
                  <div className="mb-8">
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-400" size={20} />
                      <input
                        type="number"
                        placeholder="Custom Amount"
                        value={customAmount}
                        onChange={(e) => handleCustomAmountChange(e.target.value)}
                        className="w-full pl-10 pr-4 py-4 border-2 border-green-100 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200 text-lg"
                      />
                    </div>
                  </div>
                  {/* Donate Button */}
                  <button
                    disabled={getCurrentAmount() === 0}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-full font-extrabold text-xl hover:bg-green-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 shadow-xl flex items-center justify-center group focus:outline-none focus:ring-2 focus:ring-green-400"
                  >
                    Donate ${getCurrentAmount()} {donationType === 'monthly' ? '/month' : ''}
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={24} />
                  </button>
                  {/* Security Note */}
                  <div className="mt-4 flex items-center justify-center text-sm text-green-700">
                    <Check className="mr-2" size={16} />
                    Secure donation processing
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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

export default Donate;
