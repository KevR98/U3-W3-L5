import { Carousel } from 'react-bootstrap';
import img4 from '../assets/images/2a.png';
import img5 from '../assets/images/2b.png';
import img6 from '../assets/images/2c.png';
import img7 from '../assets/images/2d.png';
import img8 from '../assets/images/2e.png';
import img9 from '../assets/images/2f.png';

function SecondCarousel() {
  return (
    <>
      <Carousel interval={null} indicators={false} controls={false}>
        <Carousel.Item>
          <div className='d-flex gap-3 mt-3' style={{ overflowX: 'scroll' }}>
            <div>
              <img
                src={img4}
                alt=''
                className='rounded'
                style={{ width: '218px', height: '218px' }}
              />
              <p>
                <small>Prólogo con Abuelo</small>
              </p>
            </div>
            <div>
              <img
                src={img5}
                alt=''
                className='rounded'
                style={{ width: '218px', height: '218px' }}
              />
              <p>
                <small>The Wanderer</small>
              </p>
            </div>
            <div>
              <img
                src={img6}
                alt=''
                className='rounded'
                style={{ width: '218px', height: '218px' }}
              />
              <p>
                <small>Michael Bublé & Carly Pearce</small>
              </p>
            </div>
            <div>
              <img
                src={img7}
                alt=''
                className='rounded'
                style={{ width: '218px', height: '218px' }}
              />
              <p>
                <small>Stephan Moccio: Zane Lowe Interview</small>
              </p>
            </div>
            <div>
              <img
                src={img8}
                alt=''
                className='rounded'
                style={{ width: '218px', height: '218px' }}
              />
              <p>
                <small> Chart Spotlight: Julia Michaels</small>
              </p>
            </div>
            <div>
              <img
                src={img9}
                alt=''
                className='rounded'
                style={{ width: '218px', height: '218px' }}
              />
              <p>
                <small>Karri & Travis Mills</small>
              </p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default SecondCarousel;
