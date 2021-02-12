import { Navbar } from '@/components/index';
import { lang } from '@/lang';
import React from 'react';
import { Section } from './walletDetailStyle';
import useWalletDetail from './useWalletDetail';
import { CardWallet } from '@/components/index'

const walletDetail = () => {
  const { data } = useWalletDetail();

  return (
    <>
      <Navbar hasBack={true} title={lang("wallet.daily_transaction")} />
      <Section>
        {data && <CardWallet wallet={data.GetWalletByID} />}
      </Section>
    </>
  )
}

export default walletDetail
