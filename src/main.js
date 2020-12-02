import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import Vuelidate from "vuelidate/src";
import router from './router'
import store from './store'
import 'materialize-css/dist/js/materialize.min';

createApp(App).use(store).use(router).use(Vuelidate).mount('#app')
