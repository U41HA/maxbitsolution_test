import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/css/main.css';

import axios from 'axios'
import VueAxios from 'vue-axios'

import VueLazyLoad from 'vue3-lazyload'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueAxios, axios)
app.use(VueLazyLoad)

app.mount('#app')
