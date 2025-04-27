import { createStore } from 'vuex'
import NewsService from '@/services/NewsService'

export default createStore({
    state: {
        news: {
            status: '',
            articles: [],
            totalResults: 0,
            category: '',
            query: '',
            errorMessage: ''
        },
        loading: false
    },
    getters: {
        getNews: state => state.news,
        isLoading: state => state.loading
    },
    mutations: {
        SET_LOADING(state, status) {
            state.loading = status;
        },
        SET_NEWS(state, news) {
            state.news = news;
        },
        SET_ERROR(state, errorMessage) {
            state.news.status = 'error';
            state.news.errorMessage = errorMessage;
        }
    },
    actions: {
        async fetchNewsByCategory({ commit }, category) {
            try {
                commit('SET_LOADING', true);
                const response = await NewsService.getNewsByCategory(category);
                commit('SET_NEWS', response.data);
            } catch (error) {
                console.error('Error fetching news by category:', error);
                commit('SET_ERROR', error.message || 'Failed to fetch news');
            } finally {
                commit('SET_LOADING', false);
            }
        },
        async searchNews({ commit }, query) {
            try {
                commit('SET_LOADING', true);
                const response = await NewsService.searchNews(query);
                commit('SET_NEWS', response.data);
            } catch (error) {
                console.error('Error searching news:', error);
                commit('SET_ERROR', error.message || 'Failed to search news');
            } finally {
                commit('SET_LOADING', false);
            }
        },
        async fetchTopHeadlines({ commit }) {
            try {
                commit('SET_LOADING', true);
                const response = await NewsService.getTopHeadlines();
                commit('SET_NEWS', response.data);
            } catch (error) {
                console.error('Error fetching top headlines:', error);
                commit('SET_ERROR', error.message || 'Failed to fetch top headlines');
            } finally {
                commit('SET_LOADING', false);
            }
        }
    },
    modules: {
    }
})
