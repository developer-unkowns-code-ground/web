import React, { useEffect } from 'react';
import { Navbar } from '@/components/index';
import { lang } from '@/lang';
import { Section } from './walletDetailStyle';
import useWalletDetail from './useWalletDetail';
import { CardWallet } from '@/components/index'
import { useRouter } from 'next/router';

const walletDetail = () => {
  const router = useRouter()
  const { id } = router.query
  const { getDetail, data } = useWalletDetail(id);

  useEffect(() => {
    id && getDetail();
  }, [id]);

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
