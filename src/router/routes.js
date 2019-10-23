import Login from '../components/login.vue'
import Index from '../components/index.vue'

const routes = [
    {
        path: '/',
        component: Login,
        redirect: "/login",
        children: [
            {
                path: '/login',
                name: 'login',
                component: Login
            },
            {
                path: '/index',
                name: 'index',
                component: Index,
                meta: { requiresAuth: true}
            }
        ]
    }
]

export default routes;