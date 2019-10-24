import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { mapState, mapGetters } from 'vuex'

export default {
  name: 'app',
  computed: {
    ...mapState(['user']),
    ...mapGetters(['userExists'])
  }
}