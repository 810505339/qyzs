import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "../../statics/css/public.less";
import axios from 'axios';
import VueRouter from 'vue-router';
import store from '../../store/vue-store.js';


Vue.use(VueRouter);
Vue.use(ElementUI);


import App from '../../pages/index/index.vue';
import test_1 from '../../pages/test_1/test_1.vue'


var routes = [
    { path: '/', redirect: '/test_1' },
    { path: '/test_1', name: 'test_1', component: test_1 },
    { path: '/test_2', name: 'test_2', component: () => import('../../pages/test_2/test_2.vue') },
    { path: '/test_3', name: 'test_3', component: () => import('../../pages/test_3/test_3.vue') },
    { path: '/test_4', name: 'test_4', component: () => import('../../pages/test_4/test_4.vue') },
    { path: '/test_5', name: 'test_5', component: () => import('../../pages/test_5/test_5.vue') },
]

var router = new VueRouter({
    routes
})

new Vue({
    el: "#main_manage",
    store,
    router,
    components: { App },
    template: '<App/>'
})
