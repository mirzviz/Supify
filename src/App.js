import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { MeContextProvider } from "./MeContext";
import TopArtistCarusel from "./TopArtistsCarusel";
import ArtistsAlbums from './ArtistsAlbums';

function App() {
  return (
    <div className="App">
      <MeContextProvider>
        <TopArtistCarusel />
        <ArtistsAlbums />
      </MeContextProvider>
    </div>
  );
}

export default App;
