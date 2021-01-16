import { ApolloProvider } from '@apollo/client';
import client from '../lib/apollo';
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  // console.log(pageProps);
  let token = pageProps.token ?? '';
  return (
    <ApolloProvider client={client(token)}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
