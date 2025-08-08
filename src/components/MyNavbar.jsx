import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../assets/logos/music.svg';

function MyNavbar() {
  return (
    <Navbar expand='lg' className='bg-body-tertiary'>
      <Container fluid>
        <div className='justify-content-center'>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Brand href='#home'>
            <img
              src={logo}
              width='50'
              height='30'
              className='d-inline-block align-top'
              alt='Appl Music'
            />
          </Navbar.Brand>

          <Nav className='ms-auto'>
            <Nav.Link href='#link'>Accedi</Nav.Link>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
