import React, { useState } from "react";
import Form from "../components/Form";
import ItemList from "../components/ItemList";
import Layout from "../layout/Layout";

const Expense = () => {
  const [expenses, setExpenses] = useState([]);

  const addData = (expense) => {
    setExpenses((prevData) => [...prevData, expense]);
  };

  const removeData = (index) => {
    let newData = [...expenses];
    newData.splice(index, 1);
    setExpenses(newData);
  };

  return (
    <Layout>
      <div className="flex justify-center">
        <div className="w-1/2 p-5 bg-slate-200 rounded mt-10">
          <h1 className="text-black text-lg font-semibold">Expense Detail</h1>
          <Form addData={addData} />
          {expenses.length ? (
            <ItemList removeData={removeData} items={expenses} />
          ) : (
            <></>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Expense;
