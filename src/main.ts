import Vue from 'vue';
import App from './App.vue';
import '@/styles/main.css';
import 'glider-js/glider.min.css';

import { i18n } from '@/lang';

Vue.config.productionTip = false;

new Vue({
    el: '#app',
    i18n,
    render: (h) => h(App)
});
