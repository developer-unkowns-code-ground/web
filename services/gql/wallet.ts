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
export const GET_DETAIL_WALLET = gql`
  query GetDetailWallet($id: Int!) {
    GetWalletByID(id: $id){
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