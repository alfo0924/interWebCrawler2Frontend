# Google 國際新聞爬蟲系統 (SpringBoot + Vue.js)

## 項目結構

### 前端項目 (interWebCrawler2Frontend)

```
interWebCrawler2Frontend/
├── public/
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── assets/
│   │   ├── logo.png
│   │   └── css/
│   │       └── main.css
│   ├── components/
│   │   ├── NewsCard.vue
│   │   ├── NewsContainer.vue
│   │   ├── SearchBar.vue
│   │   └── CategoryNav.vue
│   ├── views/
│   │   ├── HomeView.vue
│   │   └── AboutView.vue
│   ├── services/
│   │   └── NewsService.js
│   ├── router/
│   │   └── index.js
│   ├── store/
│   │   └── index.js
│   ├── App.vue
│   └── main.js
├── .gitignore
├── babel.config.js
├── package.json
├── vue.config.js
└── README.md
```

## 技術選型


- **框架**: Vue.js 3
- **構建工具**: Vue CLI
- **UI 庫**: 原生 CSS (扁平化設計)
- **HTTP 客戶端**: Axios
- **路由**: Vue Router
- **狀態管理**: Vuex

## 系統設計


### 前端設計

1. **組件設計**: 採用模塊化組件設計
2. **服務層**: 封裝 API 調用
3. **狀態管理**: 使用 Vuex 管理應用狀態
4. **路由設計**: 使用 Vue Router 管理頁面路由
5. **UI 設計**: 扁平化設計，動態漸變背景

### 數據流

1. 用戶在前端選擇新聞分類或搜索關鍵詞
2. 前端發送請求到後端 API
3. 後端從 Google News 獲取數據
4. 後端解析數據並返回給前端
5. 前端渲染新聞卡片

### 特色功能

1. **分類瀏覽**: 支持多種新聞分類
2. **關鍵詞搜索**: 支持搜索特定關鍵詞的新聞
3. **響應式設計**: 適應不同屏幕尺寸
4. **動態背景**: 橘色到黑色的漸變背景，每12秒變換一次
5. **緩存機制**: 後端實現緩存，減少對 Google News 的請求
6. **錯誤處理**: 完善的錯誤處理機制
7. **跨域處理**: 後端處理跨域問題，無需前端代理

## 實現細節

### 前端實現

1. **組件化**: 將 UI 拆分為可重用組件
2. **響應式設計**: 使用 CSS flexbox 和 grid 實現響應式佈局
3. **動態背景**: 使用 CSS 動畫實現漸變背景效果
4. **數據獲取**: 使用 Axios 從後端 API 獲取數據
5. **狀態管理**: 使用 Vuex 管理新聞數據和 UI 狀態

