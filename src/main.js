import './assets/main.css'
import router from './routes'
import { createApp, h, provide } from 'vue'
import App from './App.vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { apolloClient } from './apollo'

const app = createApp({
    setup() {
        // Provide Apollo client globally
        provide(DefaultApolloClient, apolloClient)
    },
    render: () => h(App),
})

app.use(router).mount('#app')
