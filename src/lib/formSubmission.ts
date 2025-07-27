// Google Apps Script URL for form submissions (using the new working script)
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwGX9iv85sPFxBnCwRl2Ms0-jjvMPtQno_KyR3ESq6iIcgZ7XSD-9NvybhHptpDu354/exec';

export interface MentorFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  occupation: string;
  company: string;
  education: string;
  experience: string;
  motivation: string;
  availability: string;
  specialSkills: string;
  backgroundCheck: boolean;
  agreeToTerms: boolean;
  allowContact: boolean;
}

export interface MenteeFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  address: string;
  city: string;
  zipCode: string;
  guardianName: string;
  guardianEmail: string;
  guardianPhone: string;
  schoolName: string;
  gradeLevel: string;
  interests: string;
  goals: string;
  challenges: string;
  additionalInfo: string;
  agreeToTerms: boolean;
  allowContact: boolean;
}

// Helper function to create URL parameters
const createUrlParams = (data: Record<string, string | boolean>) => {
  const params = new URLSearchParams();
  Object.keys(data).forEach(key => {
    params.append(key, String(data[key]));
  });
  return params.toString();
};

// Production-ready form submission using hidden iframe
const submitFormViaIframe = (url: string): Promise<{ success: boolean; message?: string; error?: string }> => {
  return new Promise((resolve) => {
    // Create a unique callback name
    const callbackName = 'formCallback_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    
    // Create the iframe
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = url;
    
    // Set up a timeout to handle cases where the script doesn't respond
    const timeout = setTimeout(() => {
      window.removeEventListener('message', messageHandler);
      document.body.removeChild(iframe);
      resolve({
        success: false,
        error: 'Request timed out. Please try again.'
      });
    }, 10000); // 10 second timeout
    
    // Handle the response from the iframe
    const messageHandler = (event: MessageEvent) => {
      if (event.data && typeof event.data === 'object' && event.data.type === 'formResponse') {
        clearTimeout(timeout);
        window.removeEventListener('message', messageHandler);
        document.body.removeChild(iframe);
        resolve(event.data.result);
      }
    };
    
    window.addEventListener('message', messageHandler);
    document.body.appendChild(iframe);
    
    // Fallback: check iframe load completion
    iframe.onload = () => {
      setTimeout(() => {
        clearTimeout(timeout);
        window.removeEventListener('message', messageHandler);
        document.body.removeChild(iframe);
        resolve({
          success: true,
          message: 'Form submitted successfully!'
        });
      }, 2000);
    };
    
    iframe.onerror = () => {
      clearTimeout(timeout);
      window.removeEventListener('message', messageHandler);
      document.body.removeChild(iframe);
      resolve({
        success: false,
        error: 'Failed to submit form. Please try again.'
      });
    };
  });
};

// Form submission functions
export const submitMentorForm = async (formData: MentorFormData): Promise<{ success: boolean; message?: string; error?: string }> => {
  try {
    const params = createUrlParams({
      type: 'mentor',
      ...formData
    });

    const fullUrl = `${GOOGLE_SCRIPT_URL}?${params}`;
    
    const result = await submitFormViaIframe(fullUrl);
    return result;
  } catch (error) {
    console.error('Form submission error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
};

export const submitMenteeForm = async (formData: MenteeFormData): Promise<{ success: boolean; message?: string; error?: string }> => {
  try {
    const params = createUrlParams({
      type: 'mentee',
      ...formData
    });

    const fullUrl = `${GOOGLE_SCRIPT_URL}?${params}`;
    
    const result = await submitFormViaIframe(fullUrl);
    return result;
  } catch (error) {
    console.error('Form submission error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
}; 