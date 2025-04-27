<template>
  <div class="container">
    <div v-if="isLoading" class="loading-spinner">
      <div class="spinner"></div>
    </div>

    <div v-else-if="news.status === 'error'" class="error-message">
      <h3>獲取新聞失敗</h3>
      <p>{{ news.errorMessage || '請稍後再試或檢查您的網絡連接。' }}</p>
    </div>

    <div v-else-if="news.articles && news.articles.length === 0" class="no-results">
      <h3>沒有找到相關新聞</h3>
      <p>請嘗試其他關鍵詞或分類。</p>
    </div>

    <NewsContainer v-else :articles="news.articles" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import NewsContainer from '@/components/NewsContainer.vue'

export default {
  name: 'HomeView',
  components: {
    NewsContainer
  },
  computed: {
    ...mapGetters(['getNews', 'isLoading']),
    news() {
      return this.getNews;
    }
  }
}
</script>
