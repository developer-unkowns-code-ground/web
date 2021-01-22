import { NextApiHandler, NextPage, NextPageContext } from 'next';
import Link from 'next/link';
import { withAuthServerProps } from '../../lib/withAuth';

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

interface Wallet {
  id: number
  name: string
  amount: number
}

interface Result {
  GetMyWallet: Array<Wallet>
}
interface Query {
  data?: Result | undefined
  loading?: any
  error?: any
}


const Wallet = ({ token }) => {
  const { loading, error, data } : Query = useQuery(GET_DOGS);

  let hasWallet = data?.GetMyWallet.length > 0;
  console.log(data);
  return (
    <section className="max-w-1/100 mx-auto pt-4 px-4">
      <div className="flex justify-between">
        <h3 className="text-xl font-bold">Your Wallet</h3>
        <button className="font-bold text-red-600">Log out</button>
      </div>

      { hasWallet ? (
        <div className="mt-4">
          <p className="text-sm w-2/3">Tap your wallet to see your expenses and add your expenses</p>
        </div>
      ) : null}

      { !hasWallet ? (
      <div className="text-center mt-20">
        <p className="text-2xl font-bold">You Don’t have any wallet</p>
        <p className="text-sm">Create one to track your expenses</p>
        <p className="text-sm">Total {data?.GetMyWallet.length}</p>
      </div>
      ) : null }

      { hasWallet ? (
        <div className="mt-4 overflow-y-auto h-80">
        {
          data?.GetMyWallet.map((v: Wallet) => (
            <div
              key={v.id}
              className="shadow rounded-xl w-full py-4 px-4 flex flex-col justify-between h-36 mb-4">
              <div className="flex justify-between">
                <div className="align-middle">
                  <img
                    className="h-full"
                    width="40px" height="40px" src="https://bibit.id/img/logoBibitFix.svg" />
                </div>
                <div className="flex flex-col text-right">
                  <span className="text-xs text-gray-300">Wallet Name</span>
                  <span className="text-sm">{v.name}</span>
                </div>
              </div>
              <div>
                <span className="text-xl">{v.amount}</span>
              </div>
            </div>
          ))
        }
        </div>
      ) : null }

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
