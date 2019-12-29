import React, { useState, useEffect } from "react";

import { initialRows, headers } from "./todo.data";
import AddTodo from "./add.todo";
import TodoTable from "./todo.table";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [isAdding, setAdding] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = initialRows; //hit endpoint

      setTodos(result);

      console.log(result);
    };

    fetchData();
  }, []);

  const handleAddTodo = () => {
    setAdding(true);

    console.log("is Editing:" + isAdding);
  };
  return (
    <>
      {isAdding ? <AddTodo setAdding={setAdding} /> : null}

      <TodoTable initialRows={todos} headers={headers} />
    </>
  );
};

export default Todos;
