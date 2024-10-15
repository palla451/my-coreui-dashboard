import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { CIcon } from "@coreui/icons-vue";
import App from './App.vue'
import router from './router'

import '@coreui/coreui/dist/css/coreui.min.css'
// import 'bootstrap/dist/css/bootstrap.min.css'

import {
    cilArrowBottom,
    cilArrowRight,
    cilArrowTop,
    cilBan,
    cilBasket,
    cilBell,
    cilCalculator,
    cilCalendar,
    cilAsteriskCircle
} from '@coreui/icons'

const icons = {
    cilArrowBottom,
    cilArrowRight,
    cilArrowTop,
    cilBan,
    cilBasket,
    cilBell,
    cilCalculator,
    cilCalendar,
    cilAsteriskCircle
}

const pinia = createPinia();

createApp(App).use(pinia).use(router).provide('icons', icons).component('CIcon', CIcon).mount('#app')
