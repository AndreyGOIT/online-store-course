import React, { useContext, useState } from "react";
import {
  Form,
  Modal,
  Button,
  Dropdown,
  FormControl,
  Row,
  Col,
} from "react-bootstrap";
import { Context } from "../../index";
import DropdownItem from "react-bootstrap/esm/DropdownItem";

const CreateDevice = ({ show, onHide }) => {
  const { device } = useContext(Context);
  const [info, setInfo] = useState([]);

  const addInfo = () => {
    setInfo([...info, { title: "", description: "", number: Date.now() }]);
  };
  const removeInfo = (number) => {
    setInfo(info.filter((i) => i.number !== number));
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить устройство
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown>
            <Dropdown.Toggle className="mt-2 mb-2">
              Выберите тип
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {device.types.map((type) => (
                <DropdownItem key={type.id}>{type.name}</DropdownItem>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle className="mt-2 mb-2">
              Выберите бренд
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {device.brands.map((brand) => (
                <DropdownItem key={brand.id}>{brand.name}</DropdownItem>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <FormControl
            className="mt-3"
            placeholder="Введите название устройства "
          />
          <FormControl
            className="mt-3"
            placeholder="Введите стоимость устройства "
            type="number"
          />
          <FormControl className="mt-3" type="file" />
          <hr />
          <Button variant={"outline-dark"} onClick={addInfo}>
            Добавить новое свойство
          </Button>
          {info.map((i) => (
            <Row className="mt-4" key={i.number}>
              <Col md={4}>
                <FormControl placeholder="Введите название свойства" />
              </Col>
              <Col md={4}>
                <FormControl placeholder="Введите описание свойства" />
              </Col>
              <Col md={4}>
                <Button
                  variant={"outline-danger"}
                  onClick={() => removeInfo(i.number)}
                >
                  Удалить
                </Button>
              </Col>
            </Row>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-success" onClick={onHide}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default CreateDevice;
