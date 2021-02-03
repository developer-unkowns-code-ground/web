import React from "react";
import { Wrapper, HeaderContent, ImageState, Title, Description, ButtonGoogle } from "./loginPageStyle";
import { lang } from "@/lang";
import { useRouter } from "next/router";
import apiAuth from "@/api/auth";
import { GoogleLoginResponse } from "react-google-login";

const loginPage = () => {
  const router = useRouter();
  const clientId = "1068092152608-9i7o596ur7ripl1fi4tcrrvmgilu7h3c.apps.googleusercontent.com";
  const responseGoogle = async (response : GoogleLoginResponse) => {
    const tokenId = response.tokenId;
    try {
      const response = await apiAuth.login(tokenId);
      console.log(response.data.login);
      localStorage.setItem("access_token", JSON.stringify({accessToken: response.data.login.accessToken}));
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const onFailure = (response) => {
    console.log(response);
    console.log("Fail");
  };

  return (
    <Wrapper>
        <HeaderContent>
          <ImageState src="/images/state-login.png" alt="State login"/>
          <Title>{lang("utility.name_app")}</Title>
          <Description>{lang("login.manage_your_expenses")}</Description>
        </HeaderContent>
        <ButtonGoogle
          clientId={clientId}
          buttonText="Continue with Google"
          onSuccess={responseGoogle}
          onFailure={onFailure}
          cookiePolicy={"single_host_origin"}
        />
    </Wrapper>
    );
  };
export default loginPage;
