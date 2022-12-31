import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import ArcoVue from '@arco-design/web-vue';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import '@arco-design/web-vue/dist/arco.css';

import './assets/main.css'
import { URL } from '../global'
import { createVuesticEssential, VaButton } from 'vuestic-ui'
import 'vuestic-ui/styles/essential.css'
import 'vuestic-ui/styles/grid.css'
import 'vuestic-ui/styles/reset.css'
import 'vuestic-ui/styles/typography.css'
import installElementPlus from './plugins/element'

const app = createApp(App)
app.config.globalProperties.$URL = URL

app
    .use(router)
    .use(ArcoVue)
    .use(ArcoVueIcon)
    .use(createVuesticEssential({ components: { VaButton } })).mount('#app')
