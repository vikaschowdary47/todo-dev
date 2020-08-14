import React from "react";
import Header from "./components/Header";
import "./App.css";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <Main name="vikas" />
    </div>
  );
}

export default App;
