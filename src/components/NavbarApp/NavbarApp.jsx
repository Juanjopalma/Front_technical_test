import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import './navbarApp.scss';

export const NavbarApp = ({ scrolled }) => {

  const location = useLocation();

   const isHome = location.pathname === "/";
  
  return (
    <Navbar expand="lg" className={`bg-body-tertiary navbar ${scrolled ? 'scrolled' : ''}`}>
    <Container fluid className="fix">
      <Navbar.Brand href="/">
        <img 
          src="/images/icons/sdg-group-logo.png" 
          alt="logo" 
          height="70px"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="views">
        <Nav>
          <Nav.Link as={Link} to="/">CONTINENTS</Nav.Link>
          <Nav.Link as={Link} to="/region/Asia">ASIA</Nav.Link>
          <Nav.Link as={Link} to="/region/Africa">AFRICA</Nav.Link>
          <Nav.Link as={Link} to="/region/Americas">AMERICAS</Nav.Link>
          <Nav.Link as={Link} to="/region/Europe">EUROPE</Nav.Link>
          <Nav.Link as={Link} to="/region/Antarctic">ANTARCTIC</Nav.Link>
          <Nav.Link as={Link} to="/region/Oceania">OCEANIA</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
