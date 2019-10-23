import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)

var firebaseConfig = {
    apiKey: "AIzaSyCaYa2zEjUeXAopgDYqBePEnh3jR2Ti-hc",
    authDomain: "lunch-picker-b59bd.firebaseapp.com",
    databaseURL: "https://lunch-picker-b59bd.firebaseio.com",
    projectId: "lunch-picker-b59bd",
    storageBucket: "lunch-picker-b59bd.appspot.com",
    messagingSenderId: "294963488985",
    appId: "1:294963488985:web:466123f8e1f575b301b6c8"
};

// Initialize firebase
firebase.initializeApp(firebaseConfig)

export default new Vuex.Store({
    state:{
        user: ''
    },
    mutations: {
        setUser(state, payload){
            state.user = payload;
        }
    },
    actions: {
        detectUser({commit}, payload){
            commit('setUser', payload)
        }
    },
    getters: {
        userExists(state){
            if(state.user === null || state.user == '' || state.user === undefined){
                return false
            }
            else{
                return true
            }
        }
    }
})