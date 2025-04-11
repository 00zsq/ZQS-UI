import Vue from 'vue';
import App from './App.vue';
import ZqsUI2 from '../dist/zqs-ui2.es.js'
import '../dist/style.css'; // 引入样式文件

// Vue.use(ZqsButton);
Vue.use(ZqsUI2); // 注册组件库
new Vue({
  render: (h) => h(App),
}).$mount('#app');