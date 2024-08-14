import axios from 'axios';

const BASE_URL = 'https://hn.algolia.com/api/v1';

export const fetchTopStories = async (query = '') => {
  const response = await axios.get(`${BASE_URL}/search?tags=front_page${query ? `&query=${query}` : ''}`);
  return response.data.hits;
};