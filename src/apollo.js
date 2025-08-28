import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client/core'


const httpLink = new HttpLink({
    uri: 'http://bloggraphql.test/graphql',
})

export const apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
})
