<template>
  <div class="news-container">
    <NewsCard
        v-for="(article, index) in articles"
        :key="index"
        :article="article"
    />
  </div>
</template>

<script>
import NewsCard from '@/components/NewsCard.vue'

export default {
  name: 'NewsContainer',
  components: {
    NewsCard
  },
  props: {
    articles: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.news-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 25px;
}

@media (max-width: 768px) {
  .news-container {
    grid-template-columns: 1fr;
  }
}
</style>
