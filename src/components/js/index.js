import { mapActions, mapState } from 'vuex'

export default {
    name: 'Index',
    data(){
        return{
            
        }
    },
    methods: {
        ...mapActions([])
    },
    created(){
        
    },
    computed: {
        ...mapState(['user'])
    }
}