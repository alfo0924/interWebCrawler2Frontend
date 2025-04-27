<template>
  <div class="app-container">
    <div class="background-animation"></div>

    <header>
      <div class="container">
        <h1>國際新聞實時追蹤</h1>
        <SearchBar @search="handleSearch" />
      </div>
    </header>

    <CategoryNav
        :categories="categories"
        :activeCategory="activeCategory"
        @category-changed="handleCategoryChange"
    />

    <main>
      <router-view />
    </main>

    <footer>
      <div class="container">
        <p>&copy; 2025 國際新聞爬蟲. 本網站僅供學習使用。</p>
      </div>
    </footer>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue'
import CategoryNav from '@/components/CategoryNav.vue'

export default {
  name: 'App',
  components: {
    SearchBar,
    CategoryNav
  },
  data() {
    return {
      categories: [
        { id: 'world', name: '國際' },
        { id: 'business', name: '商業' },
        { id: 'technology', name: '科技' },
        { id: 'science', name: '科學' },
        { id: 'health', name: '健康' },
        { id: 'entertainment', name: '娛樂' },
        { id: 'sports', name: '體育' }
      ],
      activeCategory: 'world'
    }
  },
  methods: {
    handleSearch(query) {
      this.$store.dispatch('searchNews', query);
      this.$router.push('/');
    },
    handleCategoryChange(categoryId) {
      this.activeCategory = categoryId;
      this.$store.dispatch('fetchNewsByCategory', categoryId);
      this.$router.push('/');
    }
  },
  created() {
    // 初始加載新聞
    this.$store.dispatch('fetchNewsByCategory', this.activeCategory);
  }
}
</script>
