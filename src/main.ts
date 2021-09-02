import Vue from 'vue';
import App from './App.vue';
import '@/styles/main.css';
import 'glider-js/glider.min.css';

import { i18n } from '@/lang';
import router from './router';

Vue.config.productionTip = false;

new Vue({
    el: '#app',
    i18n,
    router,
    render: (h) => h(App)
});
