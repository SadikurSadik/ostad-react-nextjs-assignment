import React, { useState } from "react";
import HomeCardItem from "./HomeCardItem";

const Dashboard = () => {
  const [items, setItems] = useState([
    {
      title: "Total Income",
      amount: 0,
      icon: "",
      bg_color: "bg-green-600",
      desc: "Total Income of this month.",
    },
    {
      title: "Total Expense",
      amount: 0,
      icon: "",
      bg_color: "bg-red-400",
      desc: "Total Expense of this month.",
    },
    {
      title: "Net Balance",
      amount: 0,
      icon: "",
      bg_color: "bg-blue-500",
      desc: "Current Balance Available.",
    },
  ]);
  return (
    <div className="m-10">
      {items.map((item, index) => (
        <HomeCardItem key={index} item={item} />
      ))}
    </div>
  );
};

export default Dashboard;
