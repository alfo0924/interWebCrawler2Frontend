<template>
  <nav>
    <div class="container">
      <ul class="nav-links">
        <li
            v-for="category in categories"
            :key="category.id"
            :class="['nav-item', { active: activeCategory === category.id }]"
            @click="changeCategory(category.id)"
        >
          {{ category.name }}
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'CategoryNav',
  props: {
    categories: {
      type: Array,
      required: true
    },
    activeCategory: {
      type: String,
      required: true
    }
  },
  methods: {
    changeCategory(categoryId) {
      this.$emit('category-changed', categoryId);
    }
  }
}
</script>

<style scoped>
nav {
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  margin-bottom: 20px;
}

.nav-links {
  display: flex;
  list-style: none;
  overflow-x: auto;
  padding: 10px 0;
}

.nav-item {
  padding: 8px 16px;
  margin-right: 10px;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.3s;
  white-space: nowrap;
  font-weight: 500;
}

.nav-item:hover {
  background-color: #f0f0f0;
}

.nav-item.active {
  background-color: #ff7e00;
  color: white;
}

@media (max-width: 768px) {
  .nav-links {
    padding-bottom: 5px;
  }

  .nav-item {
    padding: 6px 12px;
    font-size: 14px;
  }
}
</style>
