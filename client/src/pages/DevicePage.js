import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import bigStar from "../assets/bigStar.png";

const DevicePage = () => {
  const device = { id: 1, name: "iPhone 12 Pro", price: 25000, rating: 5 };

  return (
    <Container className="mt-3">
      <Col md={4}>
        <Image width={300} height={300} src={device.img} />
      </Col>
      <Col md={4}>
        <Row className="d-flex flex-column align-items-center">
          <h2>{device.name}</h2>
          <div
            className="d-flex justify-content-between align-items-center"
            style={{
              background: `url(${bigStar}) no-repeat center center`,
              width: 240,
              height: 240,
              backgroundSize: "cover",
            }}
          >
            {device.rating}
          </div>
        </Row>
      </Col>
      <Col md={4}></Col>
    </Container>
  );
};

export default DevicePage;
