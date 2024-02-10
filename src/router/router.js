import Main from '@/pages/Main'
import About from '@/pages/About'
import Catalog from '@/pages/Catalog'

import { createRouter, createWebHistory} from 'vue-router'
const routes = [
    {
        path: "/",
        component: Main
    },
    {
        path:"/about",
        component: About
    },
    {
        path:"/catalog",
        component: Catalog
    }
]
const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;