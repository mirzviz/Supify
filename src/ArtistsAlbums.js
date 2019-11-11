import React, { useContext } from "react";
import { Card, CardGroup, Container, Row, Col } from "react-bootstrap";
import { MeContext } from "./MeContext";
import styled from "styled-components";

const ArtistsAlbums = ({ className }) => {
  let { topArtists, selectedArtist } = useContext(MeContext);
  console.log(selectedArtist);
  let render = <div></div>;

  if (topArtists) {
    render = (
      <Row className={className}>
        {
          topArtists[selectedArtist].albums.map((album, i) => (
          <Col key={i} xs={12} sm={6} md={4} lg={3} className='col'>
            <Card className=''>
              <Card.Img
                className="size"
                variant="top"
                src={album.images[0].url}
              />
              <Card.Body className='body'>
                <Card.Title>{album.name}</Card.Title>
                <Card.Text>

                </Card.Text>
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
  overflow-x: hidden;
  .size{
    min-height: 5rem;
    width: 100%;
  }
  .col{
    align-self: stretch;
  }
  .body{
    padding: 2vmin;
  }
`;
