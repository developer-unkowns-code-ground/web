import React from "react";
import { gql, useMutation } from "@apollo/client";
import { Wrapper, HeaderContent, ImageState, Title, Description, ButtonGoogle } from "./loginPageStyle";
import { lang } from "@/lang";
import { useRouter } from "next/router";

const LOGIN = gql`
  mutation Login($token: String!){
    login( login: { token: $token }) {
      accessToken
    }
  }
`;

const Home = () => {
  const router = useRouter();
  const clientId = "1068092152608-9i7o596ur7ripl1fi4tcrrvmgilu7h3c.apps.googleusercontent.com";
  const [login, { data }] = useMutation(LOGIN);
  // console.log(login);
  const responseGoogle = async (response) => {

    const tokenId = response.tokenId;
    const headers = {
      "content-type": "application/json",
    };

    const loginData = {
      "token": tokenId
    };

    try {
      const res = await fetch("/api/hello", { method: "POST", headers, body: JSON.stringify(loginData)});
      await res.json();
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
export default Home;
