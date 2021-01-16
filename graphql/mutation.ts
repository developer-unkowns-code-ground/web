import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login( login: { token: $token }) {
    accessToken
  }
`;
