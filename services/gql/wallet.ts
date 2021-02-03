import { gql } from "@apollo/client";

export const GET_WALLETS = gql`
  query GetWallets {
    GetMyWallet {
      id
      name
      amount
    }
  }
`;

export const CREATE_WALLET = gql`
  mutation CreateWallet($name: String!, $initialAmount: Int!){
    CreateWallet(wallet: { name: $name, initialAmount: $initialAmount }){
      id
    }
  }
`;