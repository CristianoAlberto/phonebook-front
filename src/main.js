import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.css";
import '@mdi/font/css/materialdesignicons.css';
import Toaster from '@meforma/vue-toaster';

createApp(App).use(router).mount('#app')
