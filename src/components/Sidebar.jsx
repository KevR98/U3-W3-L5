import { Nav } from 'react-bootstrap';
import logo from '../assets/logos/music.svg';

function Sidebar() {
  return (
    <div className='sidebar d-none d-lg-block sidebar'>
      <div className='p-3'>
        <div className='mb-4'>
          <img
            src={logo}
            width='80'
            height='50'
            className='d-inline-block align-top'
            alt='Apple Music'
            style={{ filter: 'invert(1)' }}
          />
          <div className='input-group'>
            <span className='input-group-text bg-dark border-0'>
              <i className='bi bi-search text-secondary'></i>
            </span>
            <input
              type='text'
              className='form-control bg-dark border-0 text-white'
              placeholder='Cerca'
            />
          </div>
        </div>
        <Nav className='flex-column'>
          <Nav.Link className='text-white d-flex align-items-center mb-2'>
            <i className='bi bi-house me-3 pink'></i>
            Home
          </Nav.Link>
          <Nav.Link className='text-white d-flex align-items-center mb-2'>
            <i className='bi bi-music-note-beamed me-3 pink'></i>
            <span className='pink'>Novità</span>
          </Nav.Link>
          <Nav.Link className='text-secondary d-flex align-items-center mb-2'>
            <i className='bi bi-broadcast me-3 pink'></i>
            Radio
          </Nav.Link>
        </Nav>
      </div>
    </div>
  );
}

export default Sidebar;
