import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../assets/logos/music.svg';
import logoApple from '../assets/logos/apple.svg';
import { useEffect, useState } from 'react';

function MyNavbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <Navbar expand='lg' className='background'>
      <Container fluid className='d-flex justify-content-between'>
        <div>
          <i className='bi bi-list pink'></i>
        </div>
        <Navbar.Brand href='#home text-white'>
          <img
            src={windowWidth < 992 ? logo : logoApple}
            width={windowWidth < 992 ? '80' : '50'}
            height={windowWidth < 992 ? '50' : '30'}
            className='d-inline-block align-top'
            alt='Apple Music'
            style={{ filter: 'invert(1)' }}
          />
        </Navbar.Brand>
        <Nav>
          <Nav.Link href='#link' className='pink fw-bold'>
            Accedi
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
