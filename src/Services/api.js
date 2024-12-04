import axios from 'axios';

const API_URL = 'https://api.github.com/search/repositories';

export const fetchRepos = async (page = 1) => {
  const tenDaysAgo = new Date();
  tenDaysAgo.setDate(tenDaysAgo.getDate() - 10);
  const dateString = tenDaysAgo.toISOString().split('T')[0];

  const response = await axios.get(`${API_URL}?q=created:>${dateString}&sort=stars&order=desc&page=${page}`);
  return response.data.items;
};
