import React from 'react';
import { Transaction, TransactionName } from './transactionStyle';

interface transactionModel {
  // transaction: {
  //   transactionName: number,
  //   id: number,
  //   amount: string,
  //   category: string,
  // },
  transaction:any
}
export const Transactions = (props: transactionModel) => {
  const { transaction } = props;
  // console.log(transaction);
  return (
    <Transaction>
      {/* <TransactionName>{transaction.transactionName}</TransactionName>
      <TransactionName>{transaction.amount}</TransactionName> */}
       <TransactionName>Jajan</TransactionName>
      <TransactionName>50000</TransactionName>
    </Transaction>
  )
}

export default Transactions;
