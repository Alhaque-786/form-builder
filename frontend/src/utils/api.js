import axios from 'axios';

const API_URL = 'http://localhost:5007/api/forms';

export const saveForm = async (form) => {
  try {
    const response = await axios.post(`${API_URL}`, form);
    return response.data;
  } catch (error) {
    console.error('Error saving form:', error);
  }
};

export const getForm = async (formId) => {
  try {
    const response = await axios.get(`${API_URL}/${formId}`);
    return response.data;
  } catch (error) {
    console.error('Error getting form:', error);
  }
};

export const submitForm = async (formId, formData) => {
  try {
    const response = await axios.post(`${API_URL}/${formId}/submit`, formData);
    return response.data;
  } catch (error) {
    console.error('Error submitting form:', error);
  }
};
