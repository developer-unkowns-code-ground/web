import { ApolloClient, InMemoryCache } from "@apollo/client";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

const apiService = () => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    uri: publicRuntimeConfig.apiUrl
  });
};

export default apiService;