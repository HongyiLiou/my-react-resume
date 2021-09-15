/** Sidebar Nav Items */
export const navItems = [
  { activeRefIndex: 0, title: '基本資料', content: '簡介、聯絡方式', icon: 'basicInfo' },
  { activeRefIndex: 1, title: '學經歷', content: '學歷科系、工作經歷', icon: 'experience' },
  { activeRefIndex: 2, title: '技能', content: '專長、擅長工具', icon: 'skills' },
  { activeRefIndex: 3, title: '關於我', content: '自傳、興趣延伸', icon: 'about' },
  { activeRefIndex: 4, title: '專業經驗', content: '專業學習、平面設計、網頁前端相關經驗', icon: 'autobiography' },
  { activeRefIndex: 5, title: '作品', content: 'Web前端作品展示', icon: 'works' },
];

/** Links (我的連結) */
export const links = [
  { name: 'github', title: 'Github', url: 'https://github.com/HongyiLiou' },
  { name: 'codepen', title: 'Codepen', url: 'https://codepen.io/HongyiLiou' },
  { name: 'facebook', title: 'Facebook', url: 'https://www.facebook.com/uchiha.zhu' },
  { name: 'instagram', title: 'Instagram', url: 'https://www.instagram.com/hongyi_liou' },
  { name: 'youtube', title: 'Youtube', url: 'https://goo.gl/vZ8g9S' },
];

/** Experiecnce (學經歷) */
export const experience = [
  {
    name: 'Mayo鼎恒數位科技',
    unit: '薪酬及招募產品發展部　前端工程師',
    works: '(使用 React 前端框架，開發UI/功能元件，串接後端API，修改維護網頁內容，互動設計，依照規格書開發產品)',
    year: '2021',
  },
  {
    name: '鼎新電腦台中分公司',
    unit: '產品研發部　前端工程師',
    works: '(使用 Angular 前端框架開發產品功能，實現UI設計圖，串接後端API，依照規格書開發產品)',
    year: '2019',
  },
  {
    name: '格子科技',
    unit: '網頁設計部　網頁設計師',
    works: '(網頁切版，將設計圖轉換成網頁程式碼，於此時精通了HTML/CSS)',
    year: '2018',
  },
  {
    name: '私立南台科技大學',
    unit: '工業管理系　碩士',
    works: null,
    year: '2014 ~ 2016',
  },
];

/** Skills (技能專長) */
export const skills = [
  { name: 'Web APP', content: '網頁應用程式開發' },
  { name: 'Interaction', content: '網頁前端互動設計' },
  { name: 'Animations', content: '網頁動態效果與動畫' },
  { name: 'UI', content: '網頁視覺畫面設計' },
  { name: 'RWD', content: '響應式網頁設計' },
];

/** Tools (擅長工具) */
export const tools = [
  {
    type: 'Visual',
    names: [
      'Adobe Photoshop', 'Adobe Illustrator',
    ],
  },
  {
    type: 'Engineering drawing',
    names: [
      'AutoCAD',
    ],
  },
  {
    type: 'Development',
    names: [
      'HTML / Pug',
      'CSS / Sass / Scss',
      'JavaScript / TypeScript / jQuery',
      'React / Redux / React Hook',
      'Angular / Ionic',
      'Webpack / Azure DevOps / git',
    ],
  },
];

/** Portfolios */
export const portfolios = [
  {
    title: '我的舊履歷',
    cssClass: 'myOldResume',
    info: '兩年前的自製 RWD 履歷網頁，手機版畫面有驚喜呦：）',
    url: 'https://hongyiliou.github.io/MyResume/',
  },
  {
    title: 'Balance Sheet',
    cssClass: 'balanceSheet',
    info: '本來是練習以 Google 雲端試算表為資料庫的 WebApp，結果功能越做越多XD ( 測試帳密：test / test )。',
    url: 'https://hongyiliou.github.io/BalanceSheet/',
  },
  {
    title: 'Buttons Demo',
    cssClass: 'buttonsDemo',
    info: '獨立設計的按鈕 Demo 展示網頁，並結合 skrollr.js 製作動態效果。最上方的按鈕是純手刻的呦！',
    url: 'https://hongyiliou.github.io/ButtonsDemo/',
  },
  {
    title: 'Weather Box',
    cssClass: 'weatherBox',
    info: '以 CSS 刻出動態互動天氣盒子(滑鼠移入/點擊互動)，並利用 jQuery 呈現現實時間。',
    url: 'https://hongyiliou.github.io/weatherbox/',
  },
  {
    title: '四個數字',
    cssClass: 'numbers',
    info: '讀取輸入在 input 中的數字並顯示於手刻顯示器上、讀取顏色 input 來改變整個網頁的色彩樣式。',
    url: 'https://hongyiliou.github.io/4numbers/',
  },
  {
    title: 'Buy List',
    cssClass: 'buylist',
    info: '可自由增刪並加總價格的購物清單。',
    url: 'https://hongyiliou.github.io/Buylist/',
  },
];
