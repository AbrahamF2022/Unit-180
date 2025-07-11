
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import { User, Mail, Phone, MapPin, Calendar, FileText, Send, CheckCircle, ArrowRight, ArrowLeft, Loader2 } from 'lucide-react';
import { submitMenteeForm } from '../lib/formSubmission';

const JoinMentee = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    address: '',
    city: '',
    zipCode: '',
    guardianName: '',
    guardianEmail: '',
    guardianPhone: '',
    schoolName: '',
    gradeLevel: '',
    interests: '',
    goals: '',
    challenges: '',
    additionalInfo: '',
    agreeToTerms: false,
    allowContact: false
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      const result = await submitMenteeForm(formData);
      if (result.success) {
        setIsSubmitted(true);
      } else {
        setSubmitError(result.error || 'Failed to submit form. Please try again.');
      }
    } catch (error) {
      setSubmitError('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
                  Thank you for your interest in joining Unit 180. We'll review your application and contact you soon.
                </p>
                <div className="bg-green-50 rounded-xl p-6 mb-8">
                  <h3 className="text-lg font-semibold text-green-800 mb-2">What's Next?</h3>
                  <ul className="space-y-2 text-green-700 text-left">
                    <li>• Application review within 3-5 business days</li>
                    <li>• Initial meeting with our team</li>
                    <li>• Mentor compatibility assessment</li>
                    <li>• Begin your Unit 180 journey!</li>
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
              JOIN UNIT 180
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your future? Apply to become part of our mentorship program and join a brotherhood committed to growth and leadership.
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
                    currentStep === 2 ? 'Guardian & School Info' :
                    'Goals & Interests'
                  }
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white border-2 border-gray-100 rounded-2xl shadow-lg overflow-hidden">
              {submitError && (
                <div className="bg-red-50 border-l-4 border-red-400 p-4 m-8">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-red-700">{submitError}</p>
                    </div>
                  </div>
                </div>
              )}
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
                      <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth *</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                          type="date"
                          name="dateOfBirth"
                          value={formData.dateOfBirth}
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

              {/* Step 2: Guardian & School Information */}
              {currentStep === 2 && (
                <div className="p-8">
                  <div className="flex items-center mb-8">
                    <User className="text-green-500 mr-3" size={32} />
                    <h2 className="text-3xl font-bold text-gray-900">Guardian & School Information</h2>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Guardian Information</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-2">Guardian/Parent Name *</label>
                          <input
                            type="text"
                            name="guardianName"
                            value={formData.guardianName}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 transition-all duration-300"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Guardian Email *</label>
                          <input
                            type="email"
                            name="guardianEmail"
                            value={formData.guardianEmail}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 transition-all duration-300"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Guardian Phone *</label>
                          <input
                            type="tel"
                            name="guardianPhone"
                            value={formData.guardianPhone}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 transition-all duration-300"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">School Information</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">School Name *</label>
                          <input
                            type="text"
                            name="schoolName"
                            value={formData.schoolName}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 transition-all duration-300"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Grade Level *</label>
                          <select
                            name="gradeLevel"
                            value={formData.gradeLevel}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 transition-all duration-300"
                          >
                            <option value="">Select Grade</option>
                            <option value="6">6th Grade</option>
                            <option value="7">7th Grade</option>
                            <option value="8">8th Grade</option>
                            <option value="9">9th Grade</option>
                            <option value="10">10th Grade</option>
                            <option value="11">11th Grade</option>
                            <option value="12">12th Grade</option>
                          </select>
                        </div>
                      </div>
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

              {/* Step 3: Goals & Interests */}
              {currentStep === 3 && (
                <div className="p-8">
                  <div className="flex items-center mb-8">
                    <FileText className="text-green-500 mr-3" size={32} />
                    <h2 className="text-3xl font-bold text-gray-900">Goals & Interests</h2>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">What are your interests and hobbies? *</label>
                      <textarea
                        name="interests"
                        value={formData.interests}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 transition-all duration-300 resize-none"
                        placeholder="Tell us about your hobbies, sports, activities, or subjects you enjoy..."
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">What are your goals for the future? *</label>
                      <textarea
                        name="goals"
                        value={formData.goals}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 transition-all duration-300 resize-none"
                        placeholder="Share your academic, career, or personal goals..."
                      />
                    </div>

                    <div className="space-y-4 pt-6">
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
                          I agree to the terms and conditions of the Unit 180 mentorship program and understand the commitment involved. *
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
                      disabled={isSubmitting}
                      className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-all duration-300 flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 animate-spin" size={20} />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit Application
                          <Send className="ml-2" size={20} />
                        </>
                      )}
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

export default JoinMentee;
