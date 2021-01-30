import React from "react";
import { NextPageContext } from "next";
import { withAuthServerProps } from "@/lib/withAuth";
import { BtnLogout, ImgWallet,Caption, Description, ButtonAddWallet } from "./homePageStyle";
import { lang } from "@/lang";
import Navbar from "@/components/navbar";
import useHomePage from "./useHomePage";
import Link from "next/link";

const homePage = () => {
  const {logout} = useHomePage();
  return (
    <section className="text-center">
      <Navbar title={lang("home.your_wallet")}>
        <BtnLogout onClick={logout}>{lang("utility.logout")}</BtnLogout>
      </Navbar>
      <ImgWallet src="/images/wallet.png" alt="Wallet"/>
      <Caption>{lang("home.dont_have_wallet")}</Caption>
      <Description>{lang("home.create_your_track")}</Description>
      <Link href="/wallet/add">
        <ButtonAddWallet>
          <div>+</div>
          {lang("home.add_wallet")}
        </ButtonAddWallet>
      </Link>
    </section>
  );
};

export const getServerSideProps = (ctx: NextPageContext) => withAuthServerProps(ctx);

export default homePage;
