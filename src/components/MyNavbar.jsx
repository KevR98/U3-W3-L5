import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../assets/logos/music.svg';

function MyNavbar() {
  return (
    <Navbar expand='lg' className='background'>
      <Container fluid className='d-flex justify-content-between'>
        <div>
          <i className='bi bi-list text-white'></i>
        </div>
        <Navbar.Brand href='#home text-white'>
          <img
            src={logo}
            width='50'
            height='30'
            className='d-inline-block align-top'
            alt='Apple Music'
            style={{ filter: 'invert(1)' }}
          />
        </Navbar.Brand>
        <Nav>
          <Nav.Link href='#link' className='text-white'>
            Accedi
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
