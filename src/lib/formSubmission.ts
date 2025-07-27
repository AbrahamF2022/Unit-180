// Replace this URL with your Google Apps Script web app URL
const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';

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

export const submitMentorForm = async (formData: MentorFormData): Promise<{ success: boolean; message?: string; error?: string }> => {
  try {
    const params = createUrlParams({
      type: 'mentor',
      ...formData
    });

    const fullUrl = `${GOOGLE_SCRIPT_URL}?${params}`;
    
    // Use JSONP approach for Google Apps Script
    const script = document.createElement('script');
    script.src = fullUrl;
    
    return new Promise((resolve) => {
      // Set a timeout to handle cases where the script doesn't load
      const timeout = setTimeout(() => {
        resolve({
          success: true,
          message: 'Form submitted successfully (response may be delayed)'
        });
      }, 3000);
      
      script.onload = () => {
        clearTimeout(timeout);
        resolve({
          success: true,
          message: 'Form submitted successfully'
        });
      };
      
      script.onerror = () => {
        clearTimeout(timeout);
        resolve({
          success: false,
          error: 'Failed to submit form'
        });
      };
      
      document.head.appendChild(script);
      
      // Clean up the script tag after a delay
      setTimeout(() => {
        if (document.head.contains(script)) {
          document.head.removeChild(script);
        }
      }, 5000);
    });
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
    
    // Use JSONP approach for Google Apps Script
    const script = document.createElement('script');
    script.src = fullUrl;
    
    return new Promise((resolve) => {
      // Set a timeout to handle cases where the script doesn't load
      const timeout = setTimeout(() => {
        resolve({
          success: true,
          message: 'Form submitted successfully (response may be delayed)'
        });
      }, 3000);
      
      script.onload = () => {
        clearTimeout(timeout);
        resolve({
          success: true,
          message: 'Form submitted successfully'
        });
      };
      
      script.onerror = () => {
        clearTimeout(timeout);
        resolve({
          success: false,
          error: 'Failed to submit form'
        });
      };
      
      document.head.appendChild(script);
      
      // Clean up the script tag after a delay
      setTimeout(() => {
        if (document.head.contains(script)) {
          document.head.removeChild(script);
        }
      }, 5000);
    });
  } catch (error) {
    console.error('Form submission error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
}; 