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

  const toggleIsAdding = () => {
    setIsAdding(isAdding === "hidden" ? "isAdding" : "hidden");
  };

  const addTodo = (newName, newPriority, newDueDate, newDescription) => {
    setTodos([
      {
        id: (todos.length + 1).toString(),
        name: newName,
        priority: newPriority,
        dueDate: newDueDate,
        desciption: newDescription,
        completed: false
      },
      ...todos
    ]); //function appears to be async which is annoying
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
