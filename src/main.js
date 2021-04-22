import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd, { message } from 'ant-design-vue';
import * as antIcons from '@ant-design/icons-vue'
import 'ant-design-vue/dist/antd.less';
import fetch from "./assets/js/http.js"
import "./assets/css/common.less"

const app = createApp(App)
// 注册组件
Object.keys(antIcons).forEach(key => {
    app.component(key, antIcons[key])
})
// 添加到全局
app.config.globalProperties.$antIcons = antIcons
app.config.globalProperties.$http = fetch;
app.config.globalProperties.$message = message;

app.use(store).use(router).use(Antd).mount('#app');
 
