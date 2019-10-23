import axios from 'axios'
import server from '../../../config/server'
import { mapActions, mapState } from 'vuex'
import store from '@/store'

export default {
    name: 'Login',
    data(){
        return{
            email: null,
            password: null
        }
    },
    methods: {
        ...mapActions([]),
        login(){
            axios.post(`${server.mainServe}/users/login`, {
                email: this.email,
                password: this.password
            })
            .then(response => {
                store.dispatch('detectUser',{email:response.data.data.email, uid: response.data.data.uid, token: response.data.data.token})
                // router.push({ path: `/index/${}` })
                console.log(this.user);
            })
        }
    },
    created(){
        
    },
    computed: {
        ...mapState(['user'])
    }
}