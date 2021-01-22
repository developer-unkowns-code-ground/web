import { ApolloClient, InMemoryCache } from "@apollo/client";

export default {
  login() {
    const client = new ApolloClient({
      cache: new InMemoryCache(),
      uri: "https://bobot.nias.dev/query"
    });
    return client;
  }
};