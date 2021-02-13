import { Transactions } from '@/components/transaction/transaction';
import { lang } from '@/lang';
import { ImgWallet, Caption } from '@/views/HomePage/homePageStyle';
import { Description } from '@/views/LoginPage/loginPageStyle';
import React, { memo, useEffect } from 'react';
import useWalletTransaction from './useWalletTransaction';
import { TransactionDate, WrapperTransaction } from './walletTransactionStyle';

interface historyModel {
  id: string
}

const EmptyState = memo(() => {
  return (
    <div>
      <ImgWallet src="/images/cart.png" alt="Wallet" />
      <Caption>{lang("wallet.dont_have_transaction")}</Caption>
      <Description>{lang("wallet.input_daily_transaction")}</Description>
    </div>
  );
});

const WalletTransaction = (props: historyModel) => {
  const { id } = props;
  const { getWalletTransaction, data } = useWalletTransaction();

  useEffect(() => {
    id && getWalletTransaction({ variables: { id } });
  }, [id]);

  return (
    <div>
      {data?.GetTransactionByWalletId.length > 0 ? (
        <WrapperTransaction>
          <TransactionDate>Tuesday, 2 Jan 2021</TransactionDate>
          <Transactions transaction={data.GetTransactionByWalletId} />
        </WrapperTransaction>
      ) : (
        <EmptyState />
      )}
    </div>
  )
}

export default WalletTransaction;
