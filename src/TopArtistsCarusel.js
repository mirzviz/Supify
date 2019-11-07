import React, { useContext } from "react";
import { MeContext } from "./MeContext";
import { Container, Row, Col, Carousel } from "react-bootstrap";

export default function TopArtistsCarusel() {
  let { topArtists, refreshTheToken } = useContext(MeContext);
  let bob = <h2>nothing</h2>;

  if (topArtists) {
    console.log(topArtists);
    bob = (
      <Container fluid>
        <Row>
          <Col>
            <Carousel>
              {/* <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={topArtists[0].images[0].url}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={topArtists[1].images[0].url}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={topArtists[2].images[0].url}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={topArtists[3].images[0].url}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={topArtists[4].images[0].url}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item> */}

              {topArtists.map((artist, i) => (
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={topArtists[i].images[0].url}
                    alt="Third slide"
                  />
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
          </Col>
        </Row>
      </Container>
    );
  } else {
    refreshTheToken();
  }

  return <div>{bob}</div>;
}
