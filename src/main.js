import './assets/main.css'
import router from './routes'
import { createApp } from 'vue'
import App from './App.vue'

import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { createApolloProvider } from '@vue/apollo-option'

// HTTP connection to the API
const httpLink = createHttpLink({
    uri: 'http://bloggraphql.test/graphiql',
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
})

const apolloProvider = createApolloProvider({
    defaultClient: apolloClient,
})

createApp(App).use(router).use(apolloProvider).mount('#app')
