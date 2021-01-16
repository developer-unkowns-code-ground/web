import { ApolloClient, InMemoryCache } from '@apollo/client';
import { HttpLink } from 'apollo-link-http';


export default function createApolloClient() {
    // const ssrMode = typeof window === 'undefined'
    // let link
    // if (ssrMode) {
    //   link = createHttpLink(headers) // executed on server
    // } else {
    //   link = createWSLink() // executed on client
    // }
    return new ApolloClient({
    //   ssrMode,
    //   link,
      uri: 'https://bobot.nias.dev/query',
      cache: new InMemoryCache()
    })
};
