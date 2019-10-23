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
                var data = response.data.data

                store.dispatch('detectUser',{email:data.email, uid: data.uid, token: data.token})
                this.$router.push({ path: `/index/${data.uid}` })
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