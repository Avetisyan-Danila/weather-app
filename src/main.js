import { createApp } from 'vue'
import App from './App.vue'

// Vue router
import { router } from "./router";

// App
createApp(App)
    .use(router)
    .mount('#app')
