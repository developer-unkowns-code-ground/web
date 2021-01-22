import React from "react";
import { ApolloProvider } from "@apollo/client";
import client from "../lib/apollo";
import "tailwindcss/tailwind.css";
import Container from "@/components/container";


interface AppModel{
  Component: any;
  pageProps: any;
}

const MyApp = ({ Component, pageProps } : AppModel) => {
  const token = pageProps.token ?? "";
  return (
    <ApolloProvider client={client(token)}>
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
