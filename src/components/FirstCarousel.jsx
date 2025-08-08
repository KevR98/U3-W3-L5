import { Carousel } from 'react-bootstrap';
import img1 from '../assets/images/1a.png';
import img2 from '../assets/images/1b.png';
import img3 from '../assets/images/1c.png';

function FirstCarousel() {
  return (
    <>
      <Carousel interval={null} indicators={false} controls={false}>
        <Carousel.Item>
          <div className='d-flex gap-3 mt-3' style={{ overflowX: 'scroll' }}>
            <div style={{ minWidth: '550px', maxWidth: '1000px' }}>
              <div className='text-white mb-2'>
                <p className='text-uppercase small mb-1 text-secondary'>
                  NUOVA STAZIONE RADIO
                </p>
                <h5>Rilassati, al resto pensiamo noi.</h5>
                <p className='small'>Ascolta Apple Music Chill</p>
              </div>
              <img
                src={img1}
                alt='Chill'
                className='w-100 rounded'
                style={{ height: '250px', objectFit: 'cover' }}
              />
            </div>
            <div style={{ minWidth: '550px', maxWidth: '1000px' }}>
              <div className='text-white mb-2'>
                <p className='text-uppercase small mb-1 text-secondary'>
                  NUOVA STAZIONE RADIO
                </p>
                <h5>Ecco la nuova casa latina</h5>
                <p className='small'>Ascolta Apple Music Latina</p>
              </div>
              <img
                src={img2}
                alt='Latina'
                className='w-100 rounded'
                style={{ height: '250px', objectFit: 'cover' }}
              />
            </div>
            <div style={{ minWidth: '550px', maxWidth: '1000px' }}>
              <div className='text-white mb-2'>
                <p className='text-uppercase small mb-1 text-secondary'>
                  NUOVA STAZIONE RADIO
                </p>
                <h5>Ecco la nuova casa club</h5>
                <p className='small'>Ascolta Apple Music club</p>
              </div>
              <img
                src={img3}
                alt='Club'
                className='w-100 rounded'
                style={{ height: '250px', objectFit: 'cover' }}
              />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default FirstCarousel;
