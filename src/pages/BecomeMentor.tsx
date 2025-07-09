
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import { Users, Mail, Phone, MapPin, Briefcase, FileText, Send, CheckCircle, Heart } from 'lucide-react';

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
    employer: '',
    experience: '',
    education: '',
    availability: '',
    motivation: '',
    skills: '',
    previousMentoring: '',
    backgroundCheck: false,
    commitment: false,
    references: '',
    emergencyContact: '',
    emergencyPhone: ''
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
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
        <Navigation />
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-white rounded-2xl shadow-2xl p-12 animate-scale-in">
                <CheckCircle className="mx-auto text-green-500 mb-6" size={80} />
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Application Submitted!</h1>
                <p className="text-xl text-gray-600 mb-8">
                  Thank you for your commitment to becoming a mentor with Unit 180. Your dedication to helping young men grow is truly appreciated.
                </p>
                <div className="bg-green-50 rounded-xl p-6 mb-8">
                  <h3 className="text-lg font-semibold text-green-800 mb-2">What's Next?</h3>
                  <ul className="space-y-2 text-green-700">
                    <li>• Background check and reference verification (1-2 weeks)</li>
                    <li>• Interview with our program coordinator</li>
                    <li>• Mentor training and orientation session</li>
                    <li>• Matching with a mentee based on compatibility</li>
                    <li>• Begin your mentoring journey!</li>
                  </ul>
                </div>
                <button
                  onClick={() => window.history.back()}
                  className="bg-gradient-to-r from-green-600 to-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-600 transition-all duration-300"
                >
                  Return to Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <div className="pt-24 pb-12 bg-gradient-to-r from-green-600 to-green-400">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
            BECOME A MENTOR
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-300">
            Join our community of dedicated mentors and make a lasting impact on the life of a young man. 
            Your guidance can help shape the next generation of leaders.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Impact Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 animate-fade-in">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <Heart className="mx-auto text-green-600 mb-4" size={40} />
              <div className="text-2xl font-bold text-gray-800">500+</div>
              <div className="text-gray-600">Lives Impacted</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <Users className="mx-auto text-green-600 mb-4" size={40} />
              <div className="text-2xl font-bold text-gray-800">150+</div>
              <div className="text-gray-600">Active Mentors</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <CheckCircle className="mx-auto text-green-600 mb-4" size={40} />
              <div className="text-2xl font-bold text-gray-800">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>

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
                  currentStep === 1 ? 'Personal & Professional Info' :
                  currentStep === 2 ? 'Experience & Qualifications' :
                  'Commitment & References'
                }
              </span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-2xl overflow-hidden animate-fade-in">
            {/* Step 1: Personal & Professional Information */}
            {currentStep === 1 && (
              <div className="p-8">
                <div className="flex items-center mb-8">
                  <Users className="text-green-600 mr-3" size={32} />
                  <h2 className="text-3xl font-bold text-gray-800">Personal & Professional Information</h2>
                </div>

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300"
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
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300"
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
                          className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300"
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
                          className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300"
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
                          className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300"
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
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">ZIP Code *</label>
                      <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Occupation *</label>
                      <div className="relative">
                        <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                          type="text"
                          name="occupation"
                          value={formData.occupation}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Employer/Organization</label>
                      <input
                        type="text"
                        name="employer"
                        value={formData.employer}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300"
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
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 resize-none"
                      placeholder="Please describe your educational background..."
                    />
                  </div>
                </div>

                <div className="flex justify-end mt-8">
                  <button
                    type="button"
                    onClick={nextStep}
                    className="bg-gradient-to-r from-green-600 to-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-600 transition-all duration-300"
                  >
                    Next Step
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Experience & Qualifications */}
            {currentStep === 2 && (
              <div className="p-8">
                <div className="flex items-center mb-8">
                  <Briefcase className="text-green-600 mr-3" size={32} />
                  <h2 className="text-3xl font-bold text-gray-800">Experience & Qualifications</h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Professional Experience *</label>
                    <textarea
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 resize-none"
                      placeholder="Describe your professional experience and achievements..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Special Skills or Talents *</label>
                    <textarea
                      name="skills"
                      value={formData.skills}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 resize-none"
                      placeholder="What skills or talents would you like to share with your mentee?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Previous Mentoring/Volunteering Experience</label>
                    <textarea
                      name="previousMentoring"
                      value={formData.previousMentoring}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 resize-none"
                      placeholder="Describe any previous experience working with youth or volunteering..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Availability *</label>
                    <select
                      name="availability"
                      value={formData.availability}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300"
                    >
                      <option value="">Select your availability</option>
                      <option value="weekday-evenings">Weekday Evenings</option>
                      <option value="weekends">Weekends</option>
                      <option value="flexible">Flexible Schedule</option>
                      <option value="limited">Limited Availability</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Why do you want to become a mentor? *</label>
                    <textarea
                      name="motivation"
                      value={formData.motivation}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 resize-none"
                      placeholder="Share your motivation for wanting to mentor young men..."
                    />
                  </div>
                </div>

                <div className="flex justify-between mt-8">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="bg-gray-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-all duration-300"
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    className="bg-gradient-to-r from-green-600 to-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-600 transition-all duration-300"
                  >
                    Next Step
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Commitment & References */}
            {currentStep === 3 && (
              <div className="p-8">
                <div className="flex items-center mb-8">
                  <FileText className="text-green-600 mr-3" size={32} />
                  <h2 className="text-3xl font-bold text-gray-800">Commitment & References</h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Emergency Contact Information *</label>
                    <div className="grid md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="emergencyContact"
                        value={formData.emergencyContact}
                        onChange={handleInputChange}
                        required
                        placeholder="Emergency Contact Name"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300"
                      />
                      <input
                        type="tel"
                        name="emergencyPhone"
                        value={formData.emergencyPhone}
                        onChange={handleInputChange}
                        required
                        placeholder="Emergency Contact Phone"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">References *</label>
                    <textarea
                      name="references"
                      value={formData.references}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 resize-none"
                      placeholder="Please provide 2-3 professional or personal references with their contact information..."
                    />
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-yellow-800 mb-3">Mentor Commitment</h3>
                    <p className="text-yellow-700 mb-4">
                      As a Unit 180 mentor, you'll be expected to:
                    </p>
                    <ul className="space-y-2 text-yellow-700">
                      <li>• Commit to at least 6 months of mentoring</li>
                      <li>• Meet with your mentee regularly (minimum 2-4 hours per month)</li>
                      <li>• Attend mandatory training sessions</li>
                      <li>• Complete monthly progress reports</li>
                      <li>• Maintain professional boundaries and confidentiality</li>
                    </ul>
                  </div>

                  <div className="space-y-4 pt-6">
                    <label className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        name="backgroundCheck"
                        checked={formData.backgroundCheck}
                        onChange={handleInputChange}
                        required
                        className="mt-1 w-5 h-5 text-green-600 border-2 border-gray-300 rounded focus:ring-green-500"
                      />
                      <span className="text-sm text-gray-700">
                        I consent to a background check and understand it's required for all mentors. *
                      </span>
                    </label>
                    
                    <label className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        name="commitment"
                        checked={formData.commitment}
                        onChange={handleInputChange}
                        required
                        className="mt-1 w-5 h-5 text-green-600 border-2 border-gray-300 rounded focus:ring-green-500"
                      />
                      <span className="text-sm text-gray-700">
                        I understand and commit to the responsibilities of being a Unit 180 mentor for at least 6 months. *
                      </span>
                    </label>
                  </div>
                </div>

                <div className="flex justify-between mt-8">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="bg-gray-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-all duration-300"
                  >
                    Previous
                  </button>
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-green-600 to-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-600 transition-all duration-300 flex items-center"
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
  );
};

export default BecomeMentor;
