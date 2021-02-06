import { createApp, provide, h } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import ApolloClient from 'apollo-boost'
import App from './App.vue'
import router from './router'

const apolloClient = new ApolloClient({
  uri: 'https://neko-line-bot.herokuapp.com/graphql',
})

createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },

  render() {
    return h(App)
  },
})
  .use(router)
  .mount('#app')
