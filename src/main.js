import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import Vuetify from 'vuetify'
import router from './router'

Vue.config.productionTip = false

Vue.use(Vuetify, {
  theme: {
    primary: '#005695',
    secondary: '#9692af',
    tertiary: '#9692af',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  }
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
