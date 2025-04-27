<template>
  <div class="search-container">
    <input
        type="text"
        id="search-input"
        v-model="searchQuery"
        placeholder="搜尋新聞..."
        @keypress.enter="search"
    >
    <button id="search-button" @click="search">搜尋</button>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      searchQuery: ''
    }
  },
  methods: {
    search() {
      if (this.searchQuery.trim()) {
        this.$emit('search', this.searchQuery.trim());
      }
    }
  }
}
</script>

<style scoped>
.search-container {
  display: flex;
  margin-top: 10px;
}

#search-input {
  padding: 10px 15px;
  border: 1px solid #ddd;
  border-radius: 4px 0 0 4px;
  width: 300px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.3s;
}

#search-input:focus {
  border-color: #ff7e00;
}

#search-button {
  padding: 10px 20px;
  background-color: #ff7e00;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.3s;
}

#search-button:hover {
  background-color: #e67200;
}

@media (max-width: 768px) {
  .search-container {
    width: 100%;
    margin-top: 15px;
  }

  #search-input {
    width: 100%;
  }
}
</style>
