import axios from 'axios'
import server from '../../../config/server'

export default {
    name: 'Login',
    data(){
        return{
            email: null,
            password: null
        }
    },
    methods: {
        login(){
            axios.post(`${server.mainServe}/users/login`, {
                email: this.email,
                password: this.password
            })
            .then(response => {
                console.log(response);
            })
        }
    },
    created(){
        
    },
    computed: {
        
    }
}