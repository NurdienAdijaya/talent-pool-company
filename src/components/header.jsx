import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "../assets/styles/header.css";

const Header = () => {
  return (
    <div className="header_div">
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Talent Pool Company</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link href="/pics">PIC</Nav.Link>
              <Nav.Link href="/talents">Talent</Nav.Link>
              <Nav.Link href="/companies">Company</Nav.Link>
              <Nav.Link href="/trackers">Tracker</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
