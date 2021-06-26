import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Computed from "@/components/Computed";
import IfAndShow from '@/components/IfAndShow'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        child: {}
    },
    {
        path: '/computed',
        name: 'Computed',
        component: Computed
    },
    {
        path: '/ifshow',
        name: 'IfAndShow',
        component: IfAndShow
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
