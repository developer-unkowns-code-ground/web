import React, { useEffect } from 'react';
import { Navbar } from '@/components/index';
import { lang } from '@/lang';
import { Section } from './walletDetailStyle';
import useWalletDetail from './useWalletDetail';
import { CardWallet } from '@/components/index'
import { useRouter } from 'next/router';
import { Content } from '../HomePage/homePageStyle';
import { Fab } from '@/components/button-fab';
import Link from 'next/link';
import WalletTransaction from '../WalletTransaction';



const walletDetail = () => {
  const router = useRouter()
  const { id } = router.query
  const { getDetail, data } = useWalletDetail();

  useEffect(() => {
    id && getDetail({ variables: { id } });
  }, [id]);

  return (
    <>
      <Navbar hasBack={true} title={lang("wallet.daily_transaction")} />
      <Section>
        {data && <CardWallet wallet={data.GetWalletByID} />}
      </Section>
      <Content>
        {data && <WalletTransaction id={id.toString()} />}
      </Content>
      <Link href="/wallet/add">
        <a>
          <Fab>
            <div>+</div>
          </Fab>
        </a>
      </Link>
    </>
  )
}

export default walletDetail
