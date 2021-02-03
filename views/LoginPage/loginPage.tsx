import React from "react";
import { Wrapper, HeaderContent, ImageState, Title, Description, ButtonGoogle } from "./loginPageStyle";
import { lang } from "@/lang";
import useLoginPage from './useLoginPage';
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

const loginPage = () => {
  const { onSuccess } = useLoginPage();
  return (
    <Wrapper>
        <HeaderContent>
          <ImageState src="/images/state-login.png" alt="State login"/>
          <Title>{lang("utility.name_app")}</Title>
          <Description>{lang("login.manage_your_expenses")}</Description>
        </HeaderContent>
        <ButtonGoogle
          clientId={publicRuntimeConfig.googleKey}
          buttonText="Continue with Google"
          onSuccess={onSuccess}
          cookiePolicy={"single_host_origin"}
        />
    </Wrapper>
    );
  };
export default loginPage;
