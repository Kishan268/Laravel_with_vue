

require('./bootstrap');

import Vue from 'vue'
import { Form, HasError, AlertError } from 'vform'


window.Vue = require('vue');
window.form = Form;

Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

import VueRouter from 'vue-router'
Vue.use(VueRouter)

let routes = [
  { path: '/dashboard', component: require('./components/DashboardComponent.vue').default },
  { path: '/profile', component: require('./components/ProfileComponent.vue').default },
  { path: '/users', component: require('./components/Users.vue').default }
]

const router = new VueRouter({
  mode: 'history',  //for remove # from url
  routes
})

Vue.component('example-component', require('./components/ExampleComponent.vue').default);



const app = new Vue({
    el: '#app',
    router
});
