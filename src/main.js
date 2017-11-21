import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import socketio from 'socket.io-client'
import store from './store/store'

import App from './components/App.vue'
import router from './utils/router'

Vue.use(VueRouter);
Vue.use(BootstrapVue);

Vue.prototype.$http = axios;
Vue.prototype.$socket = socketio;
new Vue({
	router,
	store,
    el: '#app',
    render: h => h(App)
})
