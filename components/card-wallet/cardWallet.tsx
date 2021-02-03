import React from 'react';
import { lang } from '@/lang';
import { formatCurrency } from '@/helpers/stringHelper'
import { WrapperWallet, LabelImage, HeaderWallet, WalletLabel, WalletName, WalletAmount } from './cardWalletStyle'

interface WalletModel{
  wallet: {
    amount: number,
    id: number,
    name: string,
  }
}
export const CardWallet = (props: WalletModel) => {
  const { wallet } = props;
  return (
    <WrapperWallet>
      <HeaderWallet>
        <LabelImage src="/images/logo.png" alt="Label" /> 
        <div className="text-right">
          <WalletLabel>{lang('wallet.wallet_name')}</WalletLabel>
          <WalletName>{wallet.name}</WalletName>
        </div>
      </HeaderWallet>
      <WalletAmount>{formatCurrency(wallet.amount)}</WalletAmount>
    </WrapperWallet>
  )
}

export default CardWallet
