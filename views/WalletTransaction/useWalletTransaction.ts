import { useLazyQuery } from "@apollo/client";
import { GET_TRANSACTION_WALLETID } from "@/services/gql/wallet";

interface TransactionModel {
  GetTransactionByWalletId: Array<{
    id: number;
    amount: number;
    updatedAt: string;
    createdAt:Date;
    walletId:number
  }>
}


export default () => {
  const [getWalletTransaction, { data }] = useLazyQuery<TransactionModel>(GET_TRANSACTION_WALLETID);

  return{
    getWalletTransaction,
    data
  }
}