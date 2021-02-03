import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation Login($token: String!){
    login( login: { token: $token }) {
      accessToken
    }
  }
`;