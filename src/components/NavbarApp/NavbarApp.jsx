import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useNavigate } from "react-router-dom";
import './navbarApp.scss';

export const NavbarApp = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container fluid>
      <Navbar.Brand href="#home">SDG PROJECT</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/region/Asia">Asia</Nav.Link>
          <Nav.Link as={Link} to="/region/Africa">Africa</Nav.Link>
          {/* <Nav.Link as={Link} to="/americas">Americas</Nav.Link>
          <Nav.Link as={Link} to="/europe">Europe</Nav.Link>
          <Nav.Link as={Link} to="/antarctica">Antarctica</Nav.Link>
          <Nav.Link as={Link} to="/oceania">Oceania</Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
