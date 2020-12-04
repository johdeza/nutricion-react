import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Mynavbar = () => {
  const [isOpen, setisOpen] = React.useState(false);
  const toggle = () => {
    setisOpen(!isOpen);
  };

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Nutrición</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="#login">Login</Nav.Link>
            <Nav.Link href="#register">Nueva cuenta</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Mynavbar;
