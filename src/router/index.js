import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/DashBoard.vue'
// import Analytics from '../views/Analytics.vue'
// import Settings from '../views/Settings.vue'

const routes = [
    { path: '/', component: Dashboard },
    // { path: '/analytics', component: Analytics },
    // { path: '/settings', component: Settings }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
