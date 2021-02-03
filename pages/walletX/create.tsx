import { gql, useMutation } from '@apollo/client';
import { NextPageContext } from "next";
import { Formik, Form, Field } from 'formik';
import Link from "next/link";
import { withAuthServerProps } from '../../lib/withAuth';

const ADD_TODO = gql`
  mutation CreateWallet($name: String!, $amount: Int!){
    CreateWallet(wallet: { name: $name, initialAmount: $amount }) {
      id
      amount
    }
  }
`;

interface Values {
  initialAmount: string
  name: string
}

const CreateWalletPage = () => {
  const [CreateWallet, { data }] = useMutation(ADD_TODO);
  const onSubmit = (v: Values) => {
    CreateWallet({ variables: { name: v.name, amount: v.initialAmount } });
  };

  return (
    <section className="max-w-1/100 mx-auto pt-4 px-4 h-screen">
      <div className="flex align-middle">
        <Link href="/wallet">
          <p>Back</p>
        </Link>
        <p className="text-2xl font-bold">Add Wallet</p>
      </div>
      <div className="flex h-5/6 flex-col justify-between">
        <Formik
          onSubmit={onSubmit}
          initialValues={{ name: '', initialAmount: '' }}>
          <Form>
            <div className="w-full">
              <div className="flex flex-col">
                <div className="py-2">
                  <Field
                    id="initialAmount"
                    name="initialAmount"
                    placeholder="Initial Balance"
                    type="text"
                    inputMode="numeric"
                    className="w-full p-2" />
                </div>
                <div className="py-2">
                    <Field
                      className="w-full p-2"
                      id="name"
                      name="name"
                      placeholder="Name"
                      type="text"/>
                </div>
              </div>
            </div>
            <div className="mx-auto w-full">
              <button
                type="submit"
                className="rounded-2xl w-full bg-gray-100 py-4 text-xl font-bold ">Save</button>
            </div>
          </Form>
        </Formik>
      </div>
    </section>
  );
};

export const getServerSideProps = (ctx: NextPageContext) => withAuthServerProps(ctx);

export default CreateWalletPage;
