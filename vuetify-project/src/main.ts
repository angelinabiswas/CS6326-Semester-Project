// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import { createVuetify } from 'vuetify'
import 'vuetify/styles' // Global CSS
import '@mdi/font/css/materialdesignicons.css' // Icon library
import { registerPlugins } from '@/plugins'

const vuetify = createVuetify() // Create a Vuetify instance

const app = createApp(App)

// Register plugins (if any)
registerPlugins(app)

app.use(vuetify) // Use Vuetify in your app

app.mount('#app')
