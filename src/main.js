import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import router from './router/index'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false

Vue.use(BootstrapVue)

new Vue({
  render: h => h(App),
}).$mount('#app')

firebase.auth().onAuthStateChanged((user) => {
  if(user){ 
    firebase.auth().currentUser.getIdToken()
    .then(idToken =>{
      store.dispatch('detectUser',{email:user.email, uid: user.uid, token: idToken})
    })
  }
  else{
    store.dispatch('detectUser','')
  }
  
  /* eslint-disable no-new */
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount("#app");

})