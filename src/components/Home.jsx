import { Container } from 'react-bootstrap';
import FirstCarusel from './FirstCarusel';
import SecondCarusel from './SecondCarusel';

function Home() {
  return (
    <Container fluid>
      <FirstCarusel />
      <h5 className='mt-5 fw-bold align-center'>
        Nuovi Episodi radio <i className='bi bi-chevron-right'></i>
      </h5>
      <SecondCarusel />
    </Container>
  );
}

export default Home;
