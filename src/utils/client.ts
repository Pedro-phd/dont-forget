import { ApolloClient, InMemoryCache } from '@apollo/client'
const api = process.env.NEXT_PUBLIC_API_URL
const token = process.env.NEXT_PUBLIC_API_TOKEN
export const client = new ApolloClient({
  uri: api,
  cache: new InMemoryCache(),
  headers: {
    'x-hasura-admin-secret': token
  }
})
