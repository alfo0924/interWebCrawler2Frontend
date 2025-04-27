<template>
  <div class="about container">
    <div class="about-content">
      <h2>關於國際新聞爬蟲</h2>
      <p>這是一個使用 Vue.js 和 Spring Boot 開發的國際新聞爬蟲系統。系統通過解析 Google News RSS Feed 獲取最新國際新聞，並提供友好的用戶界面展示。</p>

      <h3>主要功能</h3>
      <ul>
        <li>分類瀏覽：支持多種新聞分類（國際、商業、科技、科學、健康、娛樂、體育）</li>
        <li>關鍵詞搜索：支持搜索特定關鍵詞的新聞</li>
        <li>響應式設計：適應不同屏幕尺寸</li>
        <li>動態背景：橘色到黑色的漸變背景，每12秒變換一次</li>
      </ul>

      <h3>技術棧</h3>
      <ul>
        <li><strong>前端</strong>：Vue.js 3, Vuex, Vue Router, Axios</li>
        <li><strong>後端</strong>：Spring Boot, Rome/RomeTools (RSS解析), JSoup (HTML解析)</li>
      </ul>

      <h3>注意事項</h3>
      <p>本項目僅用於學習和研究目的，請遵守 Google 的服務條款和使用政策。</p>
    </div>
  </div>
</template>

<style scoped>
.about-content {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  padding: 30px;
  margin: 20px 0;
}

h2 {
  color: #ff7e00;
  margin-bottom: 20px;
}

h3 {
  margin: 25px 0 15px;
  color: #333;
}

p {
  line-height: 1.6;
  margin-bottom: 15px;
}

ul {
  padding-left: 20px;
  margin-bottom: 15px;
}

li {
  margin-bottom: 8px;
  line-height: 1.5;
}
</style>
