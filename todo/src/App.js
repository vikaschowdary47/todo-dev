import React from "react";
import Header from "./components/Header";
import "./App.css";
import Main from "./components/Main";
import { ToDoProvider } from "./ToDoListContext";
function App() {
  return (
    <ToDoProvider>
      <div className="App">
        <Header />
        <Main />
      </div>
    </ToDoProvider>
  );
}

export default App;
