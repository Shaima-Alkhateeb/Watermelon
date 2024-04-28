import './assets/main.css'
import './assets/flags.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// PrimeVue
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-light-green/theme.css';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue);

app.mount('#app')
