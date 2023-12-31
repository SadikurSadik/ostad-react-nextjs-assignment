import { React, useState } from "react";

const Form = ({ addData, removeData }) => {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (desc && amount) {
      addData({ desc: desc.trim(), amount: amount });
      setDesc("");
      setAmount("");
    }
  };

  return (
    <div>
      <form
        onSubmit={handleFormSubmit}
        className="px-4 pt-2 pb-4 mb-4 flex flex-row"
      >
        <div className="mb-4 text-left m-5">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Description
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-white"
            type="text"
            placeholder="Description"
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
          />
        </div>
        <div className="mb-6 text-left m-5">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Amount
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline dark:bg-white"
            type="number"
            placeholder="Amount"
            onChange={(e) => setAmount(parseFloat(e.target.value))}
            value={amount}
          />
        </div>
        <div className="flex items-center justify-between m-5">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-12 mt-3 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            disabled=""
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
