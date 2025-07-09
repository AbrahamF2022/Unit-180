// Replace this URL with your Google Apps Script web app URL
const GOOGLE_SCRIPT_URL = process.env.REACT_APP_GOOGLE_SCRIPT_URL || 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';

// Local proxy server
const PROXY_SERVER = 'http://localhost:3001/api/submit-form';

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
    
    const response = await fetch(`${PROXY_SERVER}?url=${encodeURIComponent(fullUrl)}`, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
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
    
    const response = await fetch(`${PROXY_SERVER}?url=${encodeURIComponent(fullUrl)}`, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Form submission error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
}; 