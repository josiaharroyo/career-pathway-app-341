import axios from 'axios';

const API_URL = 'http://localhost:5001';

export const getCareerPaths = async () => {
  try {
    const response = await axios.get(`${API_URL}/career-paths`);
    return response.data;
  } catch (error) {
    console.error('Error fetching career paths', error);
    throw error;
  }
};
