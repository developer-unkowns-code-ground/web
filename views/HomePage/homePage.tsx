import React, { memo } from "react";
import { BtnLogout, ImgWallet,Caption, Description, ButtonAddWallet, Content } from "./homePageStyle";
import { lang } from "@/lang";
import { Navbar, CardWallet } from "@/components/index";
import useHomePage from "./useHomePage";
import Link from "next/link";
import { gql, useQuery } from "@apollo/client";

const GET_DOGS = gql`
  query GetDogs {
    GetMyWallet {
      id
      name
      amount
    }
  }
`;

interface Wallet {
  id: number
  name: string
  amount: number
}
interface Data {
  GetMyWallet: Array<Wallet>
}
const EmptyState = memo(() => {
  return(
    <div>
      <ImgWallet src="/images/wallet.png" alt="Wallet"/>
      <Caption>{lang("home.dont_have_wallet")}</Caption>
      <Description>{lang("home.create_your_track")}</Description>
    </div>
  );
});

const homePage = () => {

  const { loading, error, data } = useQuery<Data>(GET_DOGS);

  console.log(data?.GetMyWallet)
  const {logout} = useHomePage();
  return (
    <>
      <Navbar title={lang("home.your_wallet")}>
        <BtnLogout onClick={logout}>{lang("utility.logout")}</BtnLogout>
      </Navbar>
      <Content>
        {
          data?.GetMyWallet.map((wallet, key) => <CardWallet wallet={wallet} key={key} />)
        }
        {!data?.GetMyWallet && <EmptyState />}
        <Link href="/wallet/add">
          <ButtonAddWallet>
            <div>+</div>
            {lang("home.add_wallet")}
          </ButtonAddWallet>
        </Link>
      </Content>
    </>
  );
};

export default homePage;
