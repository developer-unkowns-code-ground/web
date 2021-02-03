import getConfig from "next/config";
import { ApolloClient, InMemoryCache } from "@apollo/client";
const { publicRuntimeConfig } = getConfig();

const apiService = () => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    uri: publicRuntimeConfig.apiUrl
  });
};

export default apiService;