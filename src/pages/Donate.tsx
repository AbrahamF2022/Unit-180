
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import { Heart, DollarSign, Users, Target, ArrowRight, Check } from 'lucide-react';

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(250);
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');
  const [showComment, setShowComment] = useState(false);
  const [comment, setComment] = useState('');

  const predefinedAmounts = [100, 250, 500, 1000];

  const impactMessages = {
    100: "Provides mentorship materials for 5 young men",
    250: "Funds a full month of group activities",
    500: "Sponsors a leadership workshop series",
    1000: "Supports our program for an entire quarter"
  };

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

  const getImpactMessage = () => {
    const amount = getCurrentAmount();
    if (amount >= 1000) return impactMessages[1000];
    if (amount >= 500) return impactMessages[500];
    if (amount >= 250) return impactMessages[250];
    if (amount >= 100) return impactMessages[100];
    return "Every dollar makes a difference in a young man's life";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <div className="pt-24 pb-12 bg-gradient-to-r from-green-600 to-green-400">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
            DONATE NOW
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-300">
            Your support directly impacts the lives of young men in our community, 
            helping them grow into confident leaders and positive role models.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Side - Impact Stats */}
          <div className="space-y-8 animate-fade-in">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Your Impact</h2>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <Users className="mx-auto text-green-600 mb-2" size={32} />
                  <div className="text-2xl font-bold text-gray-800">500+</div>
                  <div className="text-gray-600">Lives Changed</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <Target className="mx-auto text-green-600 mb-2" size={32} />
                  <div className="text-2xl font-bold text-gray-800">95%</div>
                  <div className="text-gray-600">Success Rate</div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-400 to-green-600 rounded-xl p-6 text-white">
                <Heart className="mb-3" size={32} />
                <h3 className="text-xl font-bold mb-2">Current Impact</h3>
                <p className="text-green-100">{getImpactMessage()}</p>
              </div>
            </div>

            {/* Success Stories Preview */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Success Stories</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-400 pl-4">
                  <p className="text-gray-700 italic">"Unit 180 changed my life completely. I went from struggling in school to graduating with honors."</p>
                  <p className="text-green-600 font-semibold mt-2">- Marcus, Age 18</p>
                </div>
                <div className="border-l-4 border-green-400 pl-4">
                  <p className="text-gray-700 italic">"The mentorship program gave my son the guidance he needed when I couldn't be there."</p>
                  <p className="text-green-600 font-semibold mt-2">- Sarah, Parent</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Donation Form */}
          <div className="animate-scale-in">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Choose amount</h2>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                    <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="p-8">
                {/* Donation Type Toggle */}
                <div className="flex bg-gray-100 rounded-lg p-1 mb-8">
                  <button
                    onClick={() => setDonationType('one-time')}
                    className={`flex-1 py-3 px-4 rounded-md font-semibold transition-all duration-300 ${
                      donationType === 'one-time'
                        ? 'bg-gray-800 text-white shadow-md'
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    One-time
                  </button>
                  <button
                    onClick={() => setDonationType('monthly')}
                    className={`flex-1 py-3 px-4 rounded-md font-semibold transition-all duration-300 ${
                      donationType === 'monthly'
                        ? 'bg-gray-800 text-white shadow-md'
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    Monthly
                  </button>
                </div>

                {/* Amount Selection */}
                <div className="grid grid-cols-3 gap-3 mb-6">
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
                <div className="mb-6">
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

                {/* Comment Toggle */}
                <div className="mb-6">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={showComment}
                      onChange={(e) => setShowComment(e.target.checked)}
                      className="w-5 h-5 text-green-600 border-2 border-gray-300 rounded focus:ring-green-500"
                    />
                    <span className="text-gray-700">Write us a comment</span>
                  </label>
                </div>

                {/* Comment Field */}
                {showComment && (
                  <div className="mb-6 animate-fade-in">
                    <textarea
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder="Share why you're supporting Unit 180..."
                      className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 resize-none"
                      rows={4}
                    />
                  </div>
                )}

                {/* Donate Button */}
                <button
                  disabled={getCurrentAmount() === 0}
                  className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white py-4 rounded-lg font-bold text-lg hover:from-green-700 hover:to-green-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 shadow-lg flex items-center justify-center group"
                >
                  Donate ${getCurrentAmount()} {donationType === 'monthly' ? '/month' : ''}
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </button>

                {/* Security Note */}
                <div className="mt-4 flex items-center justify-center text-sm text-gray-500">
                  <Check className="mr-2" size={16} />
                  Secure donation powered by Stripe
                </div>
              </div>

              {/* Footer */}
              <div className="bg-gray-50 px-8 py-4 text-center">
                <p className="text-sm text-gray-600">
                  Powered by Donorbox
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
