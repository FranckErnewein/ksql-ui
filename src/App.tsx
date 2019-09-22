import React from "react";
import Infos from "./Infos";
import QueryTextArea from "./QueryTextArea";

export default function App() {
  return (
    <div className="App">
      <h1>KSQL UI</h1>
      <Infos />
      <QueryTextArea />
    </div>
  );
}
