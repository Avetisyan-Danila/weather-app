import App from './App.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Vue router
import { router } from './router';

// App
const app = createApp(App);

app.use(createPinia())
app.use(router)

app.mount('#app')
