import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';
import img2 from "./20995572_640x640.webp"

function NavbarOne(props) {
  const navigate = useNavigate()
  const change = () => {
    navigate("/favoritmovie")
  }
  return (
    <Navbar className='navbarOne' expand="lg">
      <Container>
        <Link className='navbar-brand' style={{fontWeight:"bold"}} to="/home" href="/home">NETFLIX</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Nav className="ms-auto">
            <NavDropdown title=<img className='img-fluid' src={img2} alt=""/> id="basic-nav-dropdown">
              <NavDropdown.Item >
                {props.profile}
              </NavDropdown.Item>
              <hr style={{margin:"0px"}}/>
              <NavDropdown.Item>
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item onClick={change}>
              Favorite Movies
              </NavDropdown.Item>
              <NavDropdown.Item>
                Setting
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

      </Container>
    </Navbar>
  );
}

export default NavbarOne;