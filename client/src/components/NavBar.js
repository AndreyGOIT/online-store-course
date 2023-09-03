import React, { useContext } from "react";
import { Context } from "../index";
import BootstrapNavBar from "react-bootstrap/NavBar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const history = useHistory();
  return (
    <BootstrapNavBar bg="dark" data-bs-theme="dark">
      <Container>
        <NavLink style={{ color: "white" }} to={SHOP_ROUTE}>
          Купи ДЕВАЙС
        </NavLink>
        {user.isAuth ? (
          <Nav className="ml-auto" style={{ color: "white" }}>
            <Button
              variant={"outline-light"}
              onClick={() => history.push(ADMIN_ROUTE)}
            >
              Админ панель
            </Button>
            <Button
              variant={"outline-light"}
              className="ml-2"
              onClick={() => history.push(LOGIN_ROUTE)}
            >
              Выйти
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto" style={{ color: "white" }}>
            <Button
              variant={"outline-light"}
              onClick={() => user.setIsAuth(true)}
            >
              Авторизация
            </Button>
          </Nav>
        )}
      </Container>
    </BootstrapNavBar>
  );
});

export default NavBar;
