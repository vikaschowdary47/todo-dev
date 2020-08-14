import React, { useState, createContext } from "react";

export const ToDoListContext = createContext();

export const ToDoProvider = (props) => {
  const [toDoList, setToDoList] = useState([
    "study",
    "chores",
    "clean house",
    "gym",
  ]);

  return (
    <ToDoListContext.Provider value={[toDoList, setToDoList]}>
      {props.children}
    </ToDoListContext.Provider>
  );
};
