import React from "react";

export default function Item({ item, toggleIsComplete, deleteTodo }) {
  return (
    <div>
      <li
        style={{ lineHeight: "30px", fontSize: "18px" }}
        className="mt-2"
        key={item.id}
        data-id={item.id}
      >
        <input
          onClick={() => toggleIsComplete(item.id)}
          className="me-2"
          type="checkbox"
          checked={item.is_completed}
        />
        {item.is_completed && <del>{item.task}</del>}
        {!item.is_completed && item.task}
        <button
          className="btn btn-sm btn-outline-danger float-end"
          onClick={() => deleteTodo(item.id)}
        >
          x
        </button>
      </li>
    </div>
  );
}
