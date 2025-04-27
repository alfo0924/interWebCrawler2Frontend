<template>
  <div class="news-card">
    <div class="news-image">
      <img :src="article.urlToImage" :alt="article.title" @error="handleImageError">
    </div>
    <div class="news-content">
      <div class="news-source">
        <span class="source-name">{{ article.source.name }}</span>
        <span class="news-date">{{ formatDate(article.publishedAt) }}</span>
      </div>
      <h2 class="news-title">{{ article.title }}</h2>
      <p class="news-description">{{ article.description }}</p>
      <a :href="article.url" class="read-more" target="_blank">閱讀更多</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsCard',
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  methods: {
    formatDate(dateString) {
      if (!dateString) return '';

      const publishDate = new Date(dateString);
      const now = new Date();
      const diff = Math.floor((now - publishDate) / 1000); // 秒數差

      if (diff < 60) {
        return '剛剛';
      } else if (diff < 3600) {
        return `${Math.floor(diff / 60)}分鐘前`;
      } else if (diff < 86400) {
        return `${Math.floor(diff / 3600)}小時前`;
      } else {
        return `${publishDate.getFullYear()}/${publishDate.getMonth() + 1}/${publishDate.getDate()}`;
      }
    },
    handleImageError(e) {
      e.target.src = 'https://via.placeholder.com/350x200?text=No+Image';
    }
  }
}
</script>

<style scoped>
.news-card {
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s, box-shadow 0.3s;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.news-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.news-image {
  height: 200px;
  overflow: hidden;
}

.news-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}

.news-card:hover .news-image img {
  transform: scale(1.05);
}

.news-content {
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.news-source {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 14px;
}

.source-name {
  color: #ff7e00;
  font-weight: 500;
}

.news-date {
  color: #888;
}

.news-title {
  font-size: 18px;
  margin-bottom: 10px;
  line-height: 1.4;
  font-weight: 600;
}

.news-description {
  color: #666;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 15px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
}

.read-more {
  display: inline-block;
  color: #ff7e00;
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  transition: color 0.3s;
  align-self: flex-start;
  margin-top: auto;
}

.read-more:hover {
  color: #e67200;
  text-decoration: underline;
}
</style>
