import React, { useState } from "react";
import Form from "../components/Form";
import ItemList from "../components/ItemList";
import Layout from "../layout/Layout";

const Income = () => {
  const [incomes, setIncomes] = useState([]);

  const addData = (income) => {
    setIncomes((prevData) => [...prevData, income]);
  };

  const removeData = (index) => {
    let newData = [...incomes];
    newData.splice(index, 1);
    setExpenses(newData);
  };

  return (
    <Layout>
      <div className="flex justify-center">
        <div className="w-1/2 p-5 bg-slate-200 rounded mt-10">
          <h1 className="text-black text-lg font-semibold">Income Detail</h1>
          <Form addData={addData} />
          {incomes.length ? (
            <ItemList removeData={removeData} items={incomes} />
          ) : (
            <></>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Income;
