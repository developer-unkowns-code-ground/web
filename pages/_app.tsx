import React, { useEffect } from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import client from "../lib/apollo";
import "tailwindcss/tailwind.css";
import Container from "@/components/container";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
import checkRouter from "@/middleware";

interface AppModel{
  Component: any;
  pageProps: any;
}

const MyApp = ({ Component, pageProps } : AppModel) => {
  // const token = pageProps.token ?? "";
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: publicRuntimeConfig.apiUrl
  });

  useEffect(() => {
    checkRouter();
  },[]);
  return (
    <ApolloProvider client={client}>
      <Container>
        <Component {...pageProps} />
      </Container>
    </ApolloProvider>
  );
};

MyApp.getServerSideProps = async (props: any) => {
  return { props };
};

export default MyApp;
