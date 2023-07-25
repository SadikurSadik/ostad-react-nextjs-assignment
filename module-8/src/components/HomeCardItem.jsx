import React from "react";
import { FaDollarSign } from "react-icons/fa6";

const HomeCardItem = ({ item }) => {
  console.log(item.bg_color);
  return (
    <div
      className={`card w-96 inline-block mr-4 text-primary-content ${item.bg_color}`}
    >
      <div className="card-body">
        <h2 className="card-title">{item.title}</h2>
        <p>{item.desc}</p>
        <div className="card-actions justify-end">
          <FaDollarSign className="mt-1.5" />
          <strong className="text-lg">{item.amount}</strong>
        </div>
      </div>
    </div>
  );
};

export default HomeCardItem;
