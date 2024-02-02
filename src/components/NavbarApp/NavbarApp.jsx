import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useLocation } from "react-router-dom";
import "./navbarApp.scss";

export const NavbarApp = ({ scroll }) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <Navbar 
      expand="lg" 
      className={`navbarPrueba ${!isHome ? "bg-orange" : ""} ${isHome && scroll ? "bg-black" : ""}`}
    >
      <Container className="fix">
        <Navbar.Brand href="/">
          <img
            src="/images/icons/sdg-group-logo.png"
            alt="logo"
            height="70px"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navPrueba me-auto">
            <Nav.Link as={Link} to="/" className="mr-3">HOME</Nav.Link>
            <NavDropdown title="CONTINENTS" id="basic-nav-dropdown" className="options">
              <NavDropdown.Item as={Link} to="/region/Asia">Asia</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/region/Africa">Africa</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/region/Americas">Americas</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/region/Europe">Europe</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/region/Antarctic">Antarctic</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/region/Oceania">Oceania</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
