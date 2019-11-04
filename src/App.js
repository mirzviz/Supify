import React from "react";
import "./App.css";
import {MeContextProvider} from "./MeContext";
import Stam from "./Stam";

function App() {
  return (
    <div className="App">
      <MeContextProvider>
        <Stam></Stam>
      </MeContextProvider>
    </div>
  );
}

export default App;
