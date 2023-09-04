import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../index";
import { Card, Row, Col } from "react-bootstrap";

const BrandBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <Row className="d-flex">
      {device.brands.map((brand) => (
        <Col key={brand.id} sm={6} md={4} lg={3}>
          <Card
            style={{ cursor: "pointer" }}
            key={brand.id}
            className="p-3"
            onClick={() => device.setSelectedBrand(brand)}
            border={brand.id === device.selectedBrand.id ? "danger" : "light"}
          >
            {brand.name}
          </Card>
        </Col>
      ))}
    </Row>
  );
});

export default BrandBar;
