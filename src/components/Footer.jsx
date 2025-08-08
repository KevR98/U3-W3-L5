import { Container, Nav } from 'react-bootstrap';

function Footer() {
  return (
    <>
      <Container fluid className='p-4 footer'>
        <div className='d-flex align-items-center mb-4'>
          <Nav.Link className='text-white me-2 p-0'>Italia</Nav.Link>
          <span className='text-secondary mx-2'>|</span>
          <Nav.Link className='text-secondary p-0'>English (UK)</Nav.Link>
        </div>
        <p className='text-secondary mb-4'>
          <small>
            Copyright &copy; {new Date().getFullYear()}{' '}
            <span className='text-white'>Apple Inc.</span> Tutti i diritti
            riservati.
          </small>
        </p>
        <div className='d-flex flex-wrap' style={{ fontSize: '14px' }}>
          <Nav.Link className='p-0'>Condizioni dei servizi internet</Nav.Link>
          <span className='mx-3 text-secondary'>|</span>
          <Nav.Link className='p-0'>Apple Music e privacy</Nav.Link>
          <span className='mx-3 text-secondary'>|</span>
          <Nav.Link className='p-0'>Avviso sui cookie</Nav.Link>
          <span className='mx-3 text-secondary'>|</span>
          <Nav.Link className='p-0'>Supporto</Nav.Link>
          <span className='mx-3 text-secondary'>|</span>
          <Nav.Link className='p-0'>Feedback</Nav.Link>
        </div>
      </Container>
    </>
  );
}

export default Footer;
