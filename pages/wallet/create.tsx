import { NextPageContext } from "next";
import Link from "next/link";
import { withAuthServerProps } from '../../lib/withAuth';

const CreateWallet = () => {
  return (
    <section className="max-w-1/100 mx-auto pt-4 px-4 h-screen">
      <div className="flex align-middle">
        <Link href="/wallet">
          <p>Back</p>
        </Link>
        <p className="text-2xl font-bold">Add Wallet</p>
      </div>
      <div className="flex h-5/6 flex-col justify-between">
        <div className="w-full">
          <form className="flex flex-col">
            <div className="py-2">
              <input placeholder="Initial Balance" type="number" className="w-full p-2" />
            </div>
            <div className="py-2">
              <input placeholder="Wallet Name" className="w-full p-2" />
            </div>
          </form>
        </div>
        <div className="mx-auto w-full">
          <button className="rounded-2xl w-full bg-gray-100 py-4 text-xl font-bold ">Save</button>
        </div>
      </div>
    </section>
  );
};

export const getServerSideProps = (ctx: NextPageContext) => withAuthServerProps(ctx);

export default CreateWallet;
