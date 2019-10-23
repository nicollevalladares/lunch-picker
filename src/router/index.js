import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import firebase from 'firebase'

Vue.use(VueRouter)

// configure router
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    linkActiveClass: 'active'
})

// verify if the user needs to be logged in to enter the route
router.beforeEach((to, from, next) => {
    const protectedRoute = to.matched.some(record => record.meta.requiresAuth)
    const user = firebase.auth().currentUser

    if(protectedRoute == true && user == null){
        next({
            name: 'Login',
        })
    }
    else {
        next()
    }
})

export default router;