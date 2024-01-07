import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createVuetify } from 'vuetify'
import { VueQueryPlugin } from 'vue-query'

const app = createApp(App)

app.use(VueQueryPlugin)

const vuetify = createVuetify({
  components,
  directives
})

app.use(vuetify)

app.use(router)

app.mount('#app')
