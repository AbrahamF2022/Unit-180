
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import { User, Mail, Phone, MapPin, Briefcase, GraduationCap, Heart, Send, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';

const BecomeMentor = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    occupation: '',
    company: '',
    education: '',
    experience: '',
    motivation: '',
    availability: '',
    specialSkills: '',
    backgroundCheck: false,
    agreeToTerms: false,
    allowContact: true
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-white border-2 border-gray-100 rounded-2xl shadow-lg p-12">
                <CheckCircle className="mx-auto text-green-500 mb-6" size={80} />
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Application Submitted!</h1>
                <p className="text-xl text-gray-600 mb-8">
                  Thank you for your interest in becoming a mentor with Unit 180. We'll review your application and contact you soon.
                </p>
                <div className="bg-green-50 rounded-xl p-6 mb-8">
                  <h3 className="text-lg font-semibold text-green-800 mb-2">What's Next?</h3>
                  <ul className="space-y-2 text-green-700 text-left">
                    <li>• Application review and background check</li>
                    <li>• Interview with our mentorship team</li>
                    <li>• Orientation and training session</li>
                    <li>• Matching with your first mentee</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              BECOME A MENTOR
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Make a lasting impact in a young man's life. Join our community of dedicated mentors who guide the next generation toward success.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Progress Indicator */}
            <div className="mb-12">
              <div className="flex items-center justify-center space-x-4">
                {[1, 2, 3].map((step) => (
                  <div key={step} className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                      currentStep >= step ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'
                    }`}>
                      {step}
                    </div>
                    {step < 3 && (
                      <div className={`w-16 h-1 mx-2 transition-all duration-300 ${
                        currentStep > step ? 'bg-green-500' : 'bg-gray-200'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
              <div className="text-center mt-4">
                <span className="text-lg font-semibold text-gray-700">
                  Step {currentStep} of 3: {
                    currentStep === 1 ? 'Personal Information' :
                    currentStep === 2 ? 'Professional Background' :
                    'Mentorship Goals'
                  }
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white border-2 border-gray-100 rounded-2xl shadow-lg overflow-hidden">
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <div className="p-8">
                  <div className="flex items-center mb-8">
                    <User className="text-green-500 mr-3" size={32} />
                    <h2 className="text-3xl font-bold text-gray-900">Personal Information</h2>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 transition-all duration-300"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 transition-all duration-300"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Address *</label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 transition-all duration-300"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end mt-8">
                    <button
                      type="button"
                      onClick={nextStep}
                      className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-all duration-300 flex items-center"
                    >
                      Next Step
                      <ArrowRight className="ml-2" size={20} />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Professional Background */}
              {currentStep === 2 && (
                <div className="p-8">
                  <div className="flex items-center mb-8">
                    <Briefcase className="text-green-500 mr-3" size={32} />
                    <h2 className="text-3xl font-bold text-gray-900">Professional Background</h2>
                  </div>

                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Current Occupation *</label>
                        <input
                          type="text"
                          name="occupation"
                          value={formData.occupation}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 transition-all duration-300"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Company/Organization *</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 transition-all duration-300"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Education Background *</label>
                      <textarea
                        name="education"
                        value={formData.education}
                        onChange={handleInputChange}
                        required
                        rows={3}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 transition-all duration-300 resize-none"
                        placeholder="Describe your educational background..."
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Relevant Experience *</label>
                      <textarea
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 transition-all duration-300 resize-none"
                        placeholder="Share any mentoring, coaching, or youth development experience..."
                      />
                    </div>
                  </div>

                  <div className="flex justify-between mt-8">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="bg-gray-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-all duration-300 flex items-center"
                    >
                      <ArrowLeft className="mr-2" size={20} />
                      Previous
                    </button>
                    <button
                      type="button"
                      onClick={nextStep}
                      className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-all duration-300 flex items-center"
                    >
                      Next Step
                      <ArrowRight className="ml-2" size={20} />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Mentorship Goals */}
              {currentStep === 3 && (
                <div className="p-8">
                  <div className="flex items-center mb-8">
                    <Heart className="text-green-500 mr-3" size={32} />
                    <h2 className="text-3xl font-bold text-gray-900">Mentorship Goals</h2>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Why do you want to become a mentor? *</label>
                      <textarea
                        name="motivation"
                        value={formData.motivation}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 transition-all duration-300 resize-none"
                        placeholder="Share your motivation for mentoring young men..."
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">What is your availability? *</label>
                      <textarea
                        name="availability"
                        value={formData.availability}
                        onChange={handleInputChange}
                        required
                        rows={3}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 transition-all duration-300 resize-none"
                        placeholder="Describe when you're available for mentoring activities..."
                      />
                    </div>

                    <div className="space-y-4 pt-6">
                      <label className="flex items-start space-x-3">
                        <input
                          type="checkbox"
                          name="backgroundCheck"
                          checked={formData.backgroundCheck}
                          onChange={handleInputChange}
                          required
                          className="mt-1 w-5 h-5 text-green-500 border-2 border-gray-300 rounded"
                        />
                        <span className="text-sm text-gray-700">
                          I consent to a background check as required for mentoring minors. *
                        </span>
                      </label>
                      
                      <label className="flex items-start space-x-3">
                        <input
                          type="checkbox"
                          name="agreeToTerms"
                          checked={formData.agreeToTerms}
                          onChange={handleInputChange}
                          required
                          className="mt-1 w-5 h-5 text-green-500 border-2 border-gray-300 rounded"
                        />
                        <span className="text-sm text-gray-700">
                          I agree to the terms and conditions of the Unit 180 mentorship program. *
                        </span>
                      </label>
                    </div>
                  </div>

                  <div className="flex justify-between mt-8">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="bg-gray-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-all duration-300 flex items-center"
                    >
                      <ArrowLeft className="mr-2" size={20} />
                      Previous
                    </button>
                    <button
                      type="submit"
                      className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-all duration-300 flex items-center"
                    >
                      Submit Application
                      <Send className="ml-2" size={20} />
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeMentor;
