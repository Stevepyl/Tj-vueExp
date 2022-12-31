import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import ArcoVue from '@arco-design/web-vue';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import '@arco-design/web-vue/dist/arco.css';

import './assets/main.css'
import { URL } from '../global'
import { createVuesticEssential, VaButton } from 'vuestic-ui'
import 'vuestic-ui/css'
import 'vuestic-ui/styles/essential.css'
import 'vuestic-ui/styles/grid.css'
import 'vuestic-ui/styles/reset.css'
import 'vuestic-ui/styles/typography.css'
import installElementPlus from './plugins/element'
import { createVuestic } from 'vuestic-ui'

const app = createApp(App)
app.config.globalProperties.$URL = URL
installElementPlus(app)
app
    .use(router)
    .use(ArcoVue)
    .use(ArcoVueIcon)
    // .use(VuesticPlugin)
    .use(createVuesticEssential({ components: { VaButton } })).use(createVuestic()).mount('#app')
