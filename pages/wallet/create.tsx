import Link from "next/link";

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
          <p>Form</p>
          <form className="flex flex-col">
            <div className="py-2">
              <input placeholder="Initial Balance" className="w-full" />
            </div>
            <div className="py-2">
              <input placeholder="Wallet Name" className="w-full" />
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

export default CreateWallet;
