import { useCallback, useState } from 'react';
import { useRouter } from "next/router";
import { useMutation } from '@apollo/client';
import { CREATE_WALLET } from '@/services/gql/wallet'

export default () => {
  const router = useRouter();
  const [mutationWallet, { data }] = useMutation(CREATE_WALLET);
  const [balance, setBalance] = useState<number>();
  const [nameWallet, setNameWallet] = useState("");

  const createWallet = useCallback(() => {
    const body = {
      name: nameWallet,
      initialAmount: balance
    }
    mutationWallet({ variables: { ...body } })
  },[nameWallet, balance]);

  if(data){
    router.back();
  }
  
  return {
    createWallet,
    balance,
    setBalance,
    nameWallet,
    setNameWallet
  }
}