import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Computed from "@/components/Computed";
import IfAndShow from '@/components/IfAndShow'
import ForIf from "@/components/ForIf";

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
    },
    {
        path: '/for-if',
        name: 'ForIf',
        component: ForIf
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
