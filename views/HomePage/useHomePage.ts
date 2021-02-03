import { useCallback } from 'react';
import { gql, useQuery } from '@apollo/client';
import { GET_WALLETS } from '@/services/gql/wallet'

interface WalletModel {
  GetMyWallet: Array<{
    id: number;
    name: string;
    amount: number;
  }>
}

export default () => {
  const { data } = useQuery<WalletModel>(GET_WALLETS);

  const logout = useCallback(() => {
    localStorage.removeItem("access_token");
    location.href= "/login";
  },[]);

  return{
    logout,
    data,
  };
};