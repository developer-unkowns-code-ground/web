import React from "react";
import Navbar from "@/components/navbar";
import Button from "@/components/button";
import { lang } from "@/lang";
import { Section } from "./walletAddStyle";

const walletAdd = () => {
  return (
    <>
      <Navbar hasBack={true} title={lang("home.add_wallet")} />
      <Section>
        <div>
          <input placeholder={lang("wallet.initial_balance")} />
          <input className="mt-6" placeholder={lang("wallet.wallet_name")} />
        </div>
        <Button disabled={true}>{lang("utility.save")}</Button>
      </Section>
    </>
  );
};

export default walletAdd;
