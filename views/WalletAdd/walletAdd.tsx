import React, { useState } from "react";
import NumberFormat from 'react-number-format';
import Navbar from "@/components/navbar";
import Button from "@/components/button";
import { lang } from "@/lang";
import { Section } from "./walletAddStyle";

const walletAdd = () => {
  const [balance, setBalance] = useState<number>();
  const [nameWallet, setNameWallet] = useState("");

  return (
    <>
      <Navbar hasBack={true} title={lang("home.add_wallet")} />
      <Section>
        <div>
          <NumberFormat
            value={balance}
            onValueChange={(e: {floatValue: number}) => setBalance(e.floatValue)}
            placeholder={lang("wallet.initial_balance")}
            thousandSeparator="." 
            decimalSeparator=","
            prefix={'Rp'}
            />
          <input value={nameWallet} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNameWallet(e.target.value)} className="mt-6" placeholder={lang("wallet.wallet_name")} />
        </div>
        <Button disabled={!balance || !nameWallet}>{lang("utility.save")}</Button>
      </Section>
    </>
  );
};

export default walletAdd;
