import React, { useContext } from "react";
import { Card, CardGroup, Container, Row, Col } from "react-bootstrap";
import { MeContext } from "./MeContext";
import styled from "styled-components";
import ScrollableAnchor from "react-scrollable-anchor";

const ArtistsAlbums = ({ className }) => {
  let { topArtists, selectedArtist, setSelectedAlbum } = useContext(MeContext);
  let render = <div></div>;

  const updateItem = num => {
    setSelectedAlbum(num);
  };

  if (topArtists && selectedArtist != -1) {
    render = (
      <Row className={className}>
        <ScrollableAnchor id={"artist-albums"}>
          <div></div>
        </ScrollableAnchor>
        {topArtists[selectedArtist].albums.map((album, i) => (
          <Col key={i} xs={12} sm={6} md={4} lg={3} className="col">
            <Card className="https://www.youtube.com/watch?v=PwfhtFOc4g0">
              <a href="#" onClick={() => updateItem(i)}>
                <Card.Img
                  className="size"
                  variant="top"
                  src={album.images[0].url}
                />
              </a>
              <Card.Body className="body">
                <Card.Title>{album.name}</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    );
  }

  return <div className="">{render}</div>;
};

export default styled(ArtistsAlbums)`
  /* align-items: stretch; */
  overflow-x: hidden;
  .size {
    min-height: 5rem;
    width: 100%;
  }
  .col {
    align-self: stretch;
  }
  .body {
    padding: 2vmin;
  }
`;
