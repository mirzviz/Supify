import React, { useContext, useEffect } from "react";
import { MeContext } from "./MeContext";
import { Container, Row, Col, Carousel, Button } from "react-bootstrap";
import styled from "styled-components";

const TopArtistsCarusel = ({ className }) => {
  let { topArtists, refreshTheToken, getTopArtists} = useContext(MeContext);

//   useEffect(() => {
//     getTopArtists();
//   },[]);

  let bob = <Button onClick={refreshTheToken}>Start The App</Button>;

  if (topArtists) {
    bob = (
            <Carousel className={className}>
              {topArtists.map((artist, i) => (
                <Carousel.Item key={artist.id}>
                  <div className="img">
                    <img
                      className=""
                      src={topArtists[i].images[0].url}
                      alt="Third slide"
                    />
                  </div>
                  <Carousel.Caption>
                    <h1>{artist.name}</h1>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
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
  }
  img {
    width: 100vmin;
    height: 100vmin;
    position: relative;
    z-index: -1;
  }
`;
