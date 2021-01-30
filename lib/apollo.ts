import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";


export const httpLink = createHttpLink({
  uri: "https://bobot.nias.dev/query",
});

export const authLink = (token) => setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : "",
    }
  };
});


export default function createApolloClient(token: string) {
  // const ssrMode = typeof window === 'undefined';
    const au = authLink(token);
    return new ApolloClient({
      link: au.concat(httpLink),
      cache: new InMemoryCache()
    });
}
