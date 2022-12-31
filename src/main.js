import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { URL } from './global'

import ArcoVue from '@arco-design/web-vue';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import '@arco-design/web-vue/dist/arco.css';
import installElementPlus from './plugins/element'
import { VuesticPlugin } from 'vuestic-ui'
import { createVuestic } from 'vuestic-ui'
import 'vuestic-ui/dist/vuestic-ui.css'
import VCalendar from 'v-calendar';

const app = createApp(App)
app.config.globalProperties.$URL = URL
installElementPlus(app)
app
    .use(router)
    .use(ArcoVue)
    .use(ArcoVueIcon)
    .use(VuesticPlugin)
    .use(VCalendar)
    .use(createVuesticEssential({ components: { VaButton } })).use(createVuestic()).mount('#app')
