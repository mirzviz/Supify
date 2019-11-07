import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { MeContextProvider } from "./MeContext";
import Stam from "./Stam";
import TopArtistCarusel from "./TopArtistsCarusel";
import Layout from "./Layout/Layout";

function App() {
  return (
    <div className="App">
      <MeContextProvider>
        <TopArtistCarusel />
      </MeContextProvider>
    </div>
  );
}

export default App;
