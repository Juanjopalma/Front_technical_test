import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";
import './navbarPrueba.scss';

export const NavbarPrueba = () => {

  const location = useLocation();
  const isHome = location.pathname === "/";
  
  return (
    <Navbar expand="lg" className={`bg-body-tertiary navbarPrueba`}>
    <Container fluid className="fix">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="views d-flex justify-content-center">
        <Nav className="navPrueba">
          <Navbar.Brand href="/">
          <img 
            src="/images/icons/sdg-group-logo.png" 
            alt="logo" 
            height="70px"
          />
          </Navbar.Brand>
          <div className="d-flex align-items-center gap-4">
            <Nav.Link className="navlink" as={Link} to="/#continents-section">CONTINENTS</Nav.Link>
            <Nav.Link className="navlink" as={Link} to="/region/Asia">ASIA</Nav.Link>
            <Nav.Link className="navlink" as={Link} to="/region/Africa">AFRICA</Nav.Link>
            <Nav.Link className="navlink" as={Link} to="/region/Americas">AMERICAS</Nav.Link>
            <Nav.Link className="navlink" as={Link} to="/region/Europe">EUROPE</Nav.Link>
            <Nav.Link className="navlink" as={Link} to="/region/Antarctic">ANTARCTIC</Nav.Link>
            <Nav.Link className="navlink" as={Link} to="/region/Oceania">OCEANIA</Nav.Link>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
