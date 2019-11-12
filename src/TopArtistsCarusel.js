import React, { useContext, useEffect } from "react";
import { MeContext } from "./MeContext";
import { Container, Row, Col, Carousel, Button } from "react-bootstrap";
import styled from "styled-components";
import { goToAnchor, configureAnchors  } from 'react-scrollable-anchor'

configureAnchors({scrollDuration: 2000});

const TopArtistsCarusel = ({ className }) => {
  let { topArtists, refreshTheToken, setSelectedArtist } = useContext(
    MeContext
  );

  //   useEffect(() => {
  //     getTopArtists();
  //   },[]);

  const updateItem = num => {
    setSelectedArtist(num);
    goToAnchor('artist-albums', true);
  };

  let bob = <Button onClick={refreshTheToken}>Start The App</Button>;

  if (topArtists) {
    bob = (
      <Carousel className={className}>
        {topArtists.map((artist, i) => (
          <Carousel.Item key={artist.id}>
            <div className="img" onClick={(e) => {e.preventDefault(); updateItem(i);}}>
              <img
                className=""
                src={topArtists[i].images[0].url}
                alt="Third slide"
              />
            </div>
            <Carousel.Caption>
              <h1>{artist.name}</h1>
              <p>
                {artist.albums
                  .slice(0, 3)
                  .map(album => album.name)
                  .join(", ")}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  } else {
    // refreshTheToken();
  }

  return <div>{bob}</div>;
};

export default styled(TopArtistsCarusel)`
  overflow-x: hidden;
  .img {
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.9)
    );
    transition: all 0.6s ease-in-out
  }
  .img:hover{
    transform: rotateZ(3deg)
  }
  img {
    width: 100vmin;
    height: 100vmin;
    position: relative;
    z-index: -1;
  }
`;
