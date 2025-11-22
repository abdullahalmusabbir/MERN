import React, { useState } from "react";

const NewTodo = (props) => {
  const [todo, setTodo] = useState("");

  const handleInputChange = (event) => {
    setTodo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onTodo(todo);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo">New Todo: </label>
      <input className="border-2 bg-emerald-300 rounded-md p-1 m-2"
        type="text"
        id="todo"
        name="todo"
        value={todo}
        onChange={handleInputChange}
      />
      <button className="border-2 bg-blue-400 text-white rounded-md p-1 m-2">Add Todo</button>
    </form>
  );
};

export default NewTodo;