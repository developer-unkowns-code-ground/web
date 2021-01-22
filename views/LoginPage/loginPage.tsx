import React from "react";
import { gql, useMutation } from "@apollo/client";
import { Wrapper, HeaderContent, ImageState, Title, Description, ButtonGoogle } from "./loginPageStyle";
import { lang } from "@/lang";

const LOGIN = gql`
  mutation Login($token: String!){
    login( login: { token: $token }) {
      accessToken
    }
  }
`;

const Home = () => {
  const [login, { data }] = useMutation(LOGIN);
  // console.log(login);
  const responseGoogle = (response) => {

    const tokenId = response.tokenId;

    console.log(tokenId);

    login({ variables: { token: tokenId }});
  };


  const onFailure = () => {
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
          clientId="1068092152608-lsuk4hmkrm6v60dmk5dsq0hng8grqk3t.apps.googleusercontent.com"
          buttonText="Continue with Google"
          onSuccess={responseGoogle}
          onFailure={onFailure}
          cookiePolicy={"single_host_origin"}
        />
    </Wrapper>
    );
  };
export default Home;
