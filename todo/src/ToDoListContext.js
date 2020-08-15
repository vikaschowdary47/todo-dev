import React, { useState, createContext } from "react";

export const ToDoListContext = createContext();

export const ToDoProvider = (props) => {
  const [toDoList, setToDoList] = useState([
    { task: "study", id: 1 },
    { task: "chores", id: 2 },
    { task: "clean house", id: 3 },
    { task: "gym", id: 4 },
  ]);

  return (
    <ToDoListContext.Provider value={[toDoList, setToDoList]}>
      {props.children}
    </ToDoListContext.Provider>
  );
};
