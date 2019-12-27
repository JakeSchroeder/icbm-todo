import React, { useState, useEffect } from "react";

import { initialRows, headers } from "./todo.data";
import AddTodo from "./add.todo";
import TodoTable from "./todo.table";

const Todos = () => {
  const [data, setData] = useState({ todos: [] });
  const [isAdding, setAdding] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = initialRows;

      setData(result);

      console.log(result);
      //await
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

      <TodoTable initialRows={data.todos} headers={headers} />
    </>
  );
};

export default Todos;
