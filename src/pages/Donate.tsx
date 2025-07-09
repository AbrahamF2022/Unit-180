
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
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                SUPPORT OUR MISSION
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Your donation directly impacts young men in our community, helping them develop into confident leaders and positive role models.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Side - Impact */}
              <div className="space-y-8">
                <div className="bg-green-50 rounded-2xl p-8">
                  <div className="flex items-center mb-6">
                    <Heart className="text-green-500 mr-3" size={32} />
                    <h2 className="text-2xl font-bold text-gray-900">Your Impact</h2>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-green-100">
                      <span className="text-gray-700">$100</span>
                      <span className="text-sm text-gray-600">Mentorship materials for 5 young men</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-green-100">
                      <span className="text-gray-700">$250</span>
                      <span className="text-sm text-gray-600">Full month of group activities</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-green-100">
                      <span className="text-gray-700">$500</span>
                      <span className="text-sm text-gray-600">Leadership workshop series</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-gray-700">$1000</span>
                      <span className="text-sm text-gray-600">Program support for entire quarter</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Success Stories</h3>
                  <div className="space-y-4">
                    <blockquote className="border-l-4 border-green-500 pl-4">
                      <p className="text-gray-700 italic">"Unit 180 changed my life completely. I went from struggling in school to graduating with honors."</p>
                      <cite className="text-green-600 font-semibold mt-2 block">- Marcus, Age 18</cite>
                    </blockquote>
                  </div>
                </div>
              </div>

              {/* Right Side - Donation Form */}
              <div className="bg-white border-2 border-gray-100 rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-gray-900 text-white p-6">
                  <h2 className="text-2xl font-bold">Make a Donation</h2>
                </div>

                <div className="p-8">
                  {/* Donation Type Toggle */}
                  <div className="flex bg-gray-100 rounded-lg p-1 mb-8">
                    <button
                      onClick={() => setDonationType('one-time')}
                      className={`flex-1 py-3 px-4 rounded-md font-semibold transition-all duration-300 ${
                        donationType === 'one-time'
                          ? 'bg-gray-900 text-white shadow-md'
                          : 'text-gray-600 hover:text-gray-800'
                      }`}
                    >
                      One-time
                    </button>
                    <button
                      onClick={() => setDonationType('monthly')}
                      className={`flex-1 py-3 px-4 rounded-md font-semibold transition-all duration-300 ${
                        donationType === 'monthly'
                          ? 'bg-gray-900 text-white shadow-md'
                          : 'text-gray-600 hover:text-gray-800'
                      }`}
                    >
                      Monthly
                    </button>
                  </div>

                  {/* Amount Selection */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {predefinedAmounts.map((amount) => (
                      <button
                        key={amount}
                        onClick={() => handleAmountSelect(amount)}
                        className={`p-4 rounded-lg border-2 font-bold text-lg transition-all duration-300 hover:scale-105 ${
                          selectedAmount === amount
                            ? 'border-green-500 bg-green-50 text-green-700'
                            : 'border-gray-200 text-gray-700 hover:border-green-300'
                        }`}
                      >
                        ${amount}
                      </button>
                    ))}
                  </div>

                  {/* Custom Amount */}
                  <div className="mb-8">
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        type="number"
                        placeholder="Custom Amount"
                        value={customAmount}
                        onChange={(e) => handleCustomAmountChange(e.target.value)}
                        className="w-full pl-10 pr-4 py-4 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 text-lg"
                      />
                    </div>
                  </div>

                  {/* Donate Button */}
                  <button
                    disabled={getCurrentAmount() === 0}
                    className="w-full bg-green-500 text-white py-4 rounded-lg font-bold text-lg hover:bg-green-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 shadow-lg flex items-center justify-center group"
                  >
                    Donate ${getCurrentAmount()} {donationType === 'monthly' ? '/month' : ''}
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </button>

                  {/* Security Note */}
                  <div className="mt-4 flex items-center justify-center text-sm text-gray-500">
                    <Check className="mr-2" size={16} />
                    Secure donation processing
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
