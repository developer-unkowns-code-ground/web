import React, { useEffect } from "react";
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import client from "../lib/apollo";
import "tailwindcss/tailwind.css";
import Head from "next/head";
import Container from "@/components/container";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
import checkRouter from "@/middleware";
import "../style.css";

interface AppModel{
  Component: any;
  pageProps: any;
}

interface Token {
  accessToken: string;
}

const MyApp = ({ Component, pageProps } : AppModel) => {
  const httpLink = createHttpLink({
    uri: publicRuntimeConfig.apiUrl,
  });

  const authLink = setContext((_, { headers }) => {
    const tokenString: any = localStorage.getItem("access_token");
    const token : Token = JSON.parse(tokenString);
    console.log(token);
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token.accessToken}` : "",
      }
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });

  useEffect(() => {
    checkRouter();
  },[]);
  return (
    <>
    <Head>
      <title>Bobot</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <ApolloProvider client={client}>
      <Container>
        <Component {...pageProps} />
      </Container>
    </ApolloProvider>
    </>
  );
};

MyApp.getServerSideProps = async (props: any) => {
  return { props };
};

export default MyApp;
