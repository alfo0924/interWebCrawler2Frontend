import axios from 'axios';

const apiClient = axios.create({
    baseURL: '/api',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    timeout: 10000
});

export default {
    getNewsByCategory(category) {
        return apiClient.get(`/news/category/${category}`);
    },

    searchNews(query) {
        return apiClient.get(`/news/search?query=${encodeURIComponent(query)}`);
    },

    getTopHeadlines() {
        return apiClient.get('/news/top-headlines');
    }
};
