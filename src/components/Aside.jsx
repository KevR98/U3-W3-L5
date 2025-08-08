import { Row } from 'react-bootstrap';
import SingleBanner from './SingleBanner';

function Aside() {
  return (
    <>
      <div className='my-4'>
        <h5>Altro da esplorare</h5>
        <Row>
          <SingleBanner title='Esplora per genere' />
          <SingleBanner title='Decenni' />
          <SingleBanner title="Attività e stati d'animo" />
          <SingleBanner title='Worldwide' />
          <SingleBanner title='Classifiche' />
          <SingleBanner title='Audio spaziale' />
          <SingleBanner title='Video Musicali' />
          <SingleBanner title='Nuovi artisti' />
          <SingleBanner title='Hit del passato' />
        </Row>
      </div>
    </>
  );
}

export default Aside;
