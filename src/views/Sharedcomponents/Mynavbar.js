import React from "react";
import {
  Container,
  Navbar,
  Nav,
  NavbarText,
  NavItem,
  NavLink,
  Collapse,
  NavbarToggler,
  NavbarBrand,
} from "reactstrap";

const Mynavbar = () => {
  const [isOpen, setisOpen] = React.useState(false);
  const toggle = () => {
    setisOpen(!isOpen);
  };

  return (
    <Container>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </Container>
  );
};
export default Mynavbar;
