import React, { useState, useEffect } from "react";

import { initialRows, headers } from "./todo.data";
import AddTodo from "./add.todo";
import TodoTable from "./todo.table";

const Todos = () => {

  const [todos, setTodos] = useState([]);

  let [isAdding, setIsAdding] = useState("hidden");

  useEffect(() => {
    const fetchData = async () => {
      const result = initialRows; //hit endpoint

      setTodos(result);

      console.log(result);
    };

    fetchData();
  }, []);

  // const handleAddTodo = () => {
  //   setIsAdding(true);
  //   console.log("is adding? " + isAdding);
  // };

  const toggleIsAdding = () => {
    setIsAdding(isAdding === "hidden" ? "isAdding" : "hidden");
  };

  const addTodo = (newName, newPriority, newDueDate, newDescription) => {
    setTodos([
      {
        id: (Math.random() * 1000).toString(),
        name: newName,
        priority: newPriority,
        dueDate: newDueDate,
        desciption: newDescription,
        completed: false
      },
      ...todos
    ]);
  };

  return (
    <>
      {isAdding === "isAdding" ? (
        <AddTodo
          addTodo={addTodo}
          isAdding={isAdding}
          toggleAdding={toggleIsAdding}
        />
      ) : null}

      <TodoTable toggleAdding={toggleIsAdding} rows={todos} headers={headers} />
    </>
  );
};

export default Todos;
