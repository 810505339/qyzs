import Vue from 'vue'
import Vuex from 'vuex'
//vuex参数放在此处统一管理
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        form: {
            name: '',
            idCard: '',
            phone: '',
            sex: '',
            group: '',
            date1: '',
            date2: '',
            lesson: [],
            desc: ''
        },
    },
    actions: {

    },
    mutations: {
        saveForm(state, data) {
            
            localStorage.setItem('form', JSON.stringify(data))
            state.form = data
        },
        getForm(state) {
            
            state.form = JSON.parse(localStorage.getItem('form'))
        }
    }
})

export default store
