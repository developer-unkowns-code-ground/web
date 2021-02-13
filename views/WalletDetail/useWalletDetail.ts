import { useLazyQuery } from "@apollo/client";
import { GET_DETAIL_WALLET } from "@/services/gql/wallet";

interface WalletModel {
  GetMyWallet: Array<{
    id: number;
    name: string;
    amount: number;
  }>
}

export default () => {
  const [getDetail, { data }] = useLazyQuery(GET_DETAIL_WALLET);
  
  return{
    getDetail,
    data
  }
}