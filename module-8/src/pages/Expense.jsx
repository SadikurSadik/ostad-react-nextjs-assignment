import React, { useState } from "react";
import Form from "../components/Form";
import ItemList from "../components/ItemList";
import Layout from "../layout/Layout";

const Expense = () => {
  const [expenses, setExpenses] = useState([]);

  const addData = (expense) => {
    console.log(expense);
    setExpenses((prevData) => setExpenses([...prevData, expense]));
  };

  const removeData = (index) => {
    expenses.splice(index);
    setExpenses(expenses);
  };

  return (
    <Layout>
      <div className="w-1/2 p-5 grid bg-slate-200 rounded mt-1">
        <h1 className=" text-lg font-semibold">Expense Detail</h1>
        <Form removeData={removeData} addData={addData} />
        {expenses && expenses.length ? <ItemList items={expenses} /> : <></>}
      </div>
    </Layout>
  );
};

export default Expense;
