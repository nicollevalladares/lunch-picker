import Login from '../components/login.vue'

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
            }
        ]
    }
]

export default routes;