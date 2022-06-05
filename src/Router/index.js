 import { createRouter,createWebHistory  } from "vue-router";

 import Home from '../Pages/index.vue'
 import Stats from '../Pages/Stats.vue'
 import EditNote from '../Pages/EditNote.vue'

const routes =[
    {
        path: '/',
        component: Home
    },
    {
        path: '/stats',
        component: Stats
    },   
    {
        path: '/edit/:id',
        component: EditNote
    }
]


export const router = createRouter({
     history: createWebHistory(),
     routes
 })