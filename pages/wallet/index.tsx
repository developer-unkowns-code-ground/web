import { NextApiHandler, NextPage, NextPageContext } from 'next';
import Link from 'next/link';
import withAuth, { withAuthServerProps } from '../../lib/withAuth';

import { gql, useQuery } from '@apollo/client';

const GET_DOGS = gql`
  query GetDogs {
    GetMyWallet {
      id
      name
      amount
    }
  }
`;


const Wallet = ({ token }) => {
  const { loading, error, data } = useQuery(GET_DOGS);
  return (
    <section className="max-w-1/100 mx-auto pt-4 px-4">
      <div className="flex justify-between">
        <h3 className="text-xl font-bold">Your Wallet</h3>
        <button className="font-bold text-red-600">Log out</button>
      </div>

      <div className="text-center mt-20">
        <p className="text-2xl font-bold">You Don’t have any wallet</p>
        <p className="text-sm">Create one to track your expenses</p>
      </div>

      <div className="mt-20">
        <Link href="/wallet/create">
          <button className="rounded-2xl w-full bg-gray-100 py-8">
            <span>+</span>
            <p>Add Wallet</p>
          </button>
        </Link>
      </div>
    </section>
  );
};

// Wallet.getServerSideProps = async (ctx: NextPageContext) => withAuth(ctx);
// Wallet.getServerSideProps = async (ctx: NextPageContext) => {
//   console.log('s');
// }

export const getServerSideProps = (ctx: NextPageContext) => withAuthServerProps(ctx);

export default Wallet;
