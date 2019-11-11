import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { MeContextProvider } from "./MeContext";
import TopArtistCarusel from "./TopArtistsCarusel";
import ArtistsAlbums from './ArtistsAlbums';
import styled from 'styled-components';

const App = ({className}) => {
  return (
    <div className={className}>
      <MeContextProvider>
        <TopArtistCarusel />
        <ArtistsAlbums />
      </MeContextProvider>
    </div>
  );
}

export default styled(App)`
  overflow-x: hidden;
  text-align: center;
`;
