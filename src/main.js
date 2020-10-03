import Vue from 'vue'
import VueParticles from 'vue-particles'
import App from './App.vue'

Vue.use(VueParticles)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
