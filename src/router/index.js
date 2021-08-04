import {createRouter, createWebHashHistory} from 'vue-router'
import Computed from "@/components/Computed";
import IfAndShow from '@/components/IfAndShow'
import ForIf from "@/components/ForIf";
import VModel from '@/components/V-Model-1'
import DateFormatDemo from "@/components/DateFormatDemo";
import Parent from "@/views/ParentComponent/Parent";

const routes = [
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
    },
    {
        path: '/vModel',
        name: 'vModel',
        component: VModel
    },
    {
        path: '/dateFormat',
        name: 'dateFormat',
        component: DateFormatDemo
    },
    {
        path: '/parent',
        name: 'parent',
        component: Parent
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
