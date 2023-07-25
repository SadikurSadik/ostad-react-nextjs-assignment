import React from "react";
import { FaTrash } from "react-icons/fa6";

const ItemList = ({ items, removeData }) => {
  let total = 0;
  return (
    <div className="overflow-x-auto">
      <table className="table text-black">
        <thead>
          <tr className="text-black">
            <th></th>
            <th>Desc</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.length ? (
            items.map((item, index) => {
              total += parseFloat(item.amount);
              return (
                <tr className="border-none" key={index}>
                  <th>{index + 1}</th>
                  <td>{item.desc}</td>
                  <td>{item.amount}</td>
                  <td>
                    <button
                      onClick={() => removeData(index)}
                      className="btn btn-sm bg- hover:border-red-400"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <></>
          )}
        </tbody>
        <thead>
          <tr className="text-black font-semibold border-none">
            <th colSpan={2}>Total</th>
            <th>{total}</th>
            <th></th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default ItemList;
