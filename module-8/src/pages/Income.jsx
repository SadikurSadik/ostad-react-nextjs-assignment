import React from "react";
import HomeCardItem from "../components/HomeCardItem";
import Layout from "../layout/Layout";

const Income = () => {
  const item = {
    title: "Total Income",
    amount: 0,
    icon: "",
    bg_color: "bg-green-600",
    desc: "Total Income of this month.",
  };
  return (
    <Layout>
      <div className="flex justify-center mt-10">
        <div className="card w-96 bg-base-100 shadow">
          <HomeCardItem item={item} />
          <div className="card-body items-center text-center">
            <input
              type="text"
              placeholder="Income Detail"
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <input
              type="number"
              placeholder="Amount"
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <div className="flex items-end">
              <button className="btn btn-sm btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Income;
