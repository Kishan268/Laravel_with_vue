

require('./bootstrap');

import Vue from 'vue';

// Code for moment.......................
import moment from 'moment';

// Code for Form.......................
import { Form, HasError, AlertError } from 'vform';


window.Vue = require('vue');
window.form = Form;

Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

// Code for router.......................
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// Code for progressbar.......................
import VueProgressBar from 'vue-progressbar'
const options = {
  color: '#bffaf3',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'left',
  inverse: false
}
// End Code for progressbar.......................


//  Code for sweet alert.......................
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'
window.swal = Swal;

const toast = swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
 
})
window.toast = toast;



let routes = [
  { path: '/dashboard', component: require('./components/DashboardComponent.vue').default },
  { path: '/profile', component: require('./components/ProfileComponent.vue').default },
  { path: '/users', component: require('./components/Users.vue').default }
]

const router = new VueRouter({
  mode: 'history',  //for remove # from url
  routes
})




const app = new Vue({
    el: '#app',
    router
});
