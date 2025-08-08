import { Container } from 'react-bootstrap';
import FirstCarousel from './FirstCarousel';
import SecondCarousel from './SecondCarousel';
import Songs from './Songs';
import Aside from './Aside';

function Home() {
  return (
    <Container fluid>
      <div className='border-bottom border-secondary'>
        <h1 className='mt-5 text-white fw-bold'>Novità</h1>
      </div>
      <FirstCarousel />
      <h5 className='mt-5 fw-bold align-center'>
        Nuovi Episodi radio <i className='bi bi-chevron-right'></i>
      </h5>
      <SecondCarousel />
      <Songs />
      <Aside />
    </Container>
  );
}

export default Home;
