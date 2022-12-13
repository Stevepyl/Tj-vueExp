import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import ArcoVue from '@arco-design/web-vue';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import '@arco-design/web-vue/dist/arco.css';

import './assets/main.css'
import { URL } from '../global'

const app = createApp(App)
app.config.globalProperties.$URL = URL

app
    .use(router)
    .use(ArcoVue)
    .use(ArcoVueIcon)
    .mount('#app')
