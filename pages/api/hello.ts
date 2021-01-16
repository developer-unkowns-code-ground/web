// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next';
import client from '../../lib/apollo';
import { serialize } from 'cookie';
import { gql } from '@apollo/client';

export default async (req :NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {

    res.statusCode = 400;
    let token = req.body?.token ?? '';
    try {
      let gqlClient =  await client().mutate({
        mutation: gql`
          mutation Login($token: String!){
            login( login: { token: $token }) {
              accessToken
            }
          }
        `,
        variables: {
          token: token,
        }
      });

      let accessToken = gqlClient.data?.login?.accessToken;
      let opts = {
        path: '/',
      };
      res.statusCode = 200;
      res.setHeader('Set-Cookie', serialize('auth', accessToken, opts));

      res.json({ accessToken });
    } catch (error) {
      console.log(error);
      res.json({});
    }

    return;
  };

  res.statusCode = 405;
  return res.send('');
}
