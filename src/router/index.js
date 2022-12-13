import { createRouter, createWebHistory } from 'vue-router'

const routes = [
// name:路由名称
// path:路由路径
// component:路由所映射的组件对象 
    // {
    //     path: '/auth',
    //     name: 'Auth',
    //     component: () => import('../views/auth/Auth.vue'),
    //     children: [
            
    //         {
    //             path: '/auth/signup',
    //             name: 'Signup',
    //             component: () => import('../views/auth/Signup.vue')
    //         }
    //     ]
    // },
    {
        path: '/auth/login',
        name: 'Login',
        component: () => import('../views/auth/Login.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router