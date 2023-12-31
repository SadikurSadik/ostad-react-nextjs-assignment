import React, { useState } from "react";
import Item from "./Item";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const generateNextId = (items) => {
    if (items.length === 0) {
      return 1;
    }

    return items[items.length - 1].id + 1;
  };

  const addTodo = () => {
    if (todo) {
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: generateNextId(prevTodos), task: todo, is_completed: false },
      ]);
      setTodo(() => "");
    }
  };

  const deleteTodo = (id) => {
    const index = todos.findIndex((item) => item.id === id);
    todos.splice(index, 1);
    setTodos([...todos]);
  };

  const toggleIsComplete = (id) => {
    const index = todos.findIndex((item) => item.id === id);
    todos[index].is_completed = !todos[index].is_completed;
    setTodos([...todos]);
  };

  return (
    <div
      className="bg-white rounded-2 border-black p-3 w-500 mt-5"
      style={{ width: "500px" }}
    >
      <h4>Todo List</h4>
      <div className="d-flex justify-content-between">
        <input
          className="form-control"
          type="text"
          value={todo}
          placeholder="What to do today..."
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              addTodo();
            }
          }}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={addTodo} className="btn btn-outline-primary ms-2">
          Add
        </button>
      </div>
      <div className="mt-2">
        {todos.length ? (
          <ul style={{ listStyle: "none", padding: "0" }}>
            {todos.map((item) => {
              return (
                <Item
                  key={item.id}
                  item={item}
                  toggleIsComplete={toggleIsComplete}
                  deleteTodo={deleteTodo}
                />
              );
            })}
          </ul>
        ) : (
          <p>There is no task to do.</p>
        )}
      </div>
    </div>
  );
}
