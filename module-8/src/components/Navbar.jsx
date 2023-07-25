import React from "react";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar shadow bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">
          <FaMoneyBillTrendUp />
          Wallet
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to={"/income"}>Income</NavLink>
          </li>
          <li>
            <NavLink to={"/expense"}>Expense</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
