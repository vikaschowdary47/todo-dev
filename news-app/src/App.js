import React from "react";
import "./App.css";
import { SWRConfig } from "swr";
import axios from "axios";
import News from "./components/News";
import Card from "./components/Card";

const fetcher = async (...args) =>
  await axios.get(...args).then((res) => res.data);

function App() {
  return (
    <SWRConfig value={{ fetcher }}>
      <Card />
      <News />
    </SWRConfig>
  );
}

export default App;
