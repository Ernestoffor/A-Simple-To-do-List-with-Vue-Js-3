require('./bootstrap');
import App from './vue/App.vue';

import { createApp } from 'vue';
import AppVue from './components/App.vue';

import { library } from '@fortawesome/fontawesome-svg-core'

import {  faPhone ,faHatWizard, faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add( faPhone ,faPlusSquare, faTrash, faHatWizard);

// Vue.component('font-awesome-icon', FontAwesomeIcon);

// const app = new Vue({
//     el: '#app',
//     components: {
//         App,
//     }
// });


createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#example');