import Vue from 'vue'
import App from './App.vue'
import { createProvider } from './vue-apollo'
import VueApollo from 'vue-apollo'
// import ApolloClient from 'apollo-boost'

Vue.config.productionTip = false
// const apolloClient = new ApolloClient({
//   // You should use an absolute URL here
//   uri: 'https://api.graphcms.com/simple/v1/awesomeTalksClone'
// })
Vue.use(VueApollo)
new Vue({
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app')
