import React from 'react';
import { lang } from '@/lang';
import { formatCurrency } from '@/helpers/stringHelper'
import { WrapperWallet, LabelImage, HeaderWallet, WalletLabel, WalletName, WalletAmount } from './cardWalletStyle'
import Link from 'next/link';

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
      <Link href={`/wallet/${wallet.id}`}>
        <a>
          <HeaderWallet>
            <LabelImage src="/images/logo.png" alt="Label" /> 
            <div className="text-right">
              <WalletLabel>{lang('wallet.wallet_name')}</WalletLabel>
              <WalletName>{wallet.name}</WalletName>
            </div>
          </HeaderWallet>
          <WalletAmount>{formatCurrency(wallet.amount)}</WalletAmount>
        </a>
      </Link>
    </WrapperWallet>
  )
}

export default CardWallet
