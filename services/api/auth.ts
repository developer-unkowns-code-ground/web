import apiService from "./apiService";
import { gql } from "@apollo/client";

export default {
  login(token: string) {
    return apiService().mutate({
      mutation: gql`
        mutation Login($token: String!){
          login( login: { token: $token }) {
            accessToken
          }
        }
      `,
      variables: {
        token: token,
      }
    });
  }
};