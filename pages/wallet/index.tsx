const Wallet = () => {
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
        <button className="w-full bg-gray-100 py-8">
          <span>+</span>
          <p>Add Wallet</p>
        </button>
      </div>
    </section>
  );
};

export default Wallet;
