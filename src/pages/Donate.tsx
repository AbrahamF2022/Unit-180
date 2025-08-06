
import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Heart, DollarSign, ArrowRight, Check, CreditCard, Loader2 } from 'lucide-react';

// Declare PayPal global object
declare global {
  interface Window {
    paypal: any;
  }
}

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(250);
  const [customAmount, setCustomAmount] = useState('');
  const [paypalLoaded, setPaypalLoaded] = useState(false);
  const [paypalError, setPaypalError] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const predefinedAmounts = [100, 250, 500, 1000];

  // Get current amount function
  const getCurrentAmount = () => {
    return selectedAmount || parseInt(customAmount) || 0;
  };

  // Load PayPal SDK
  useEffect(() => {
    const paypalClientId = import.meta.env.VITE_PAYPAL_CLIENT_ID;
    
    console.log('PayPal Client ID:', paypalClientId ? 'Found' : 'Missing');
    
    if (!paypalClientId) {
      console.error('PayPal Client ID not found in environment variables');
      setPaypalError('PayPal configuration error');
      return;
    }

    console.log('Loading PayPal SDK...');
    const script = document.createElement('script');
    script.src = `https://www.paypal.com/sdk/js?client-id=${paypalClientId}&currency=USD&intent=capture`;
    script.async = true;
    script.onload = () => {
      console.log('PayPal SDK loaded successfully');
      setPaypalLoaded(true);
      setPaypalError(null);
    };
    script.onerror = () => {
      console.error('Failed to load PayPal SDK');
      setPaypalError('Failed to load payment system');
    };
    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[src*="paypal.com/sdk/js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  // Render PayPal button when SDK is loaded and amount is selected
  useEffect(() => {
    console.log('PayPal render effect - paypalLoaded:', paypalLoaded, 'amount:', getCurrentAmount(), 'window.paypal:', !!window.paypal);
    
    if (paypalLoaded && getCurrentAmount() > 0 && window.paypal) {
      // Clear existing buttons
      const container = document.getElementById('paypal-button-container');
      console.log('PayPal container found:', !!container);
      
      if (container) {
        container.innerHTML = '';
        
        console.log('Rendering PayPal button...');
        window.paypal.Buttons({
          createOrder: function(data: any, actions: any) {
            const amount = getCurrentAmount();
            if (amount <= 0) return;
            
            setIsProcessing(true);
            
            return actions.order.create({
              purchase_units: [{
                amount: {
                  value: amount.toString(),
                },
                description: 'Unit 180 One-time Donation',
                custom_id: `unit180_one_time_${Date.now()}`,
              }],
            });
          },
          onApprove: function(data: any, actions: any) {
            return actions.order.capture().then(function(details: any) {
              setIsProcessing(false);
              alert('Thank you for your donation! Transaction completed by ' + details.payer.name.given_name);
              // Reset form
              setSelectedAmount(250);
              setCustomAmount('');
            }).catch(function(err: any) {
              setIsProcessing(false);
              console.error('Payment failed:', err);
              alert('Payment failed. Please try again.');
            });
          },
          onError: function(err: any) {
            setIsProcessing(false);
            console.error('PayPal error:', err);
            alert('An error occurred. Please try again.');
          }
        }).render('#paypal-button-container');
      }
    }
  }, [paypalLoaded, selectedAmount, customAmount]);

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount(null);
  };

  // PayPal button configuration
  const createPayPalOrder = (data: any, actions: any) => {
    const amount = getCurrentAmount();
    if (amount <= 0) return;
    
    setIsProcessing(true);
    
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: amount.toString(),
          },
          description: 'Unit 180 One-time Donation',
          custom_id: `unit180_one_time_${Date.now()}`,
        },
      ],
    });
  };

  const onApprove = (data: any, actions: any) => {
    return actions.order.capture().then((details: any) => {
      setIsProcessing(false);
      // Handle successful payment
      alert(`Thank you for your donation! Transaction completed by ${details.payer.name.given_name}`);
      // Reset form
      setSelectedAmount(250);
      setCustomAmount('');
    }).catch((err: any) => {
      setIsProcessing(false);
      console.error('Payment failed:', err);
      alert('Payment failed. Please try again.');
    });
  };

  const onError = (err: any) => {
    setIsProcessing(false);
    console.error('PayPal error:', err);
    alert('An error occurred. Please try again.');
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
                  
                  {/* PayPal Buttons */}
                  <div className="space-y-4">
                    {paypalLoaded && getCurrentAmount() > 0 && !paypalError && (
                      <div className="w-full">
                        <div
                          id="paypal-button-container"
                          className="w-full"
                        />
                      </div>
                    )}
                    
                    {paypalError && (
                      <div className="w-full bg-red-50 border border-red-200 rounded-lg p-4 text-center">
                        <span className="text-red-600">PayPal Error: {paypalError}</span>
                      </div>
                    )}
                    
                    {!paypalLoaded && getCurrentAmount() > 0 && (
                      <div className="w-full bg-gray-100 rounded-lg p-4 flex items-center justify-center">
                        <Loader2 className="w-6 h-6 animate-spin text-green-500 mr-2" />
                        <span className="text-gray-600">Loading payment options...</span>
                      </div>
                    )}
                    
                    {getCurrentAmount() === 0 && (
                      <div className="w-full bg-gray-100 rounded-lg p-4 text-center">
                        <span className="text-gray-600">Please select an amount to donate</span>
                      </div>
                    )}
                    
                    {/* PayPal Error Display */}
                    {paypalError && (
                      <div className="w-full bg-red-50 border-2 border-red-200 rounded-lg p-4 text-center">
                        <div className="flex items-center justify-center space-x-2 text-red-700">
                          <span className="text-red-500">⚠️</span>
                          <span className="font-medium">{paypalError}</span>
                        </div>
                        <p className="text-sm text-red-600 mt-2">
                          Please try refreshing the page or contact support if the issue persists.
                        </p>
                      </div>
                    )}
                    
                    {/* Alternative Payment Methods */}
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 mb-2">
                        <CreditCard className="w-4 h-4" />
                        <span>Secure payment powered by PayPal</span>
                      </div>
                      <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
                        <span>Visa</span>
                        <span>Mastercard</span>
                        <span>American Express</span>
                        <span>PayPal</span>
                      </div>
                    </div>

                    {/* Cash App Section */}
                    <div className="mt-8 pt-6 border-t border-green-100">
                      <div className="text-center mb-6">
                        <div className="flex items-center justify-center mb-3">
                          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                            <span className="text-white font-bold text-sm">$</span>
                          </div>
                          <h3 className="text-xl font-bold text-green-700">Cash App</h3>
                        </div>
                        <p className="text-sm text-gray-600">Quick and easy mobile payment option</p>
                      </div>
                      
                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                        <div className="text-center mb-6">
                          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full shadow-lg mb-4">
                            <span className="text-white font-bold text-2xl">$</span>
                          </div>
                          <div className="space-y-2">
                            <div className="text-3xl font-black text-green-700 tracking-wide">$Unit180</div>
                            <div className="text-sm text-gray-600 font-medium">Cash App Username</div>
                          </div>
                        </div>
                        
                        <div className="text-center">
                          <a
                            href="https://cash.app/$Unit180"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                          >
                            <span className="mr-3 text-xl">💚</span>
                            <span>Send via Cash App</span>
                            <span className="ml-3 text-sm opacity-80 group-hover:opacity-100">→</span>
                          </a>
                        </div>
                        
                        <div className="mt-4 text-center">
                          <div className="flex items-center justify-center space-x-2 text-xs text-gray-500">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            <span>Opens Cash App in a new window</span>
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Security Note */}
                  <div className="mt-6 flex items-center justify-center text-sm text-green-700">
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

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Donate;
