import { useState, useEffect } from 'react';
import img4 from '../assets/images/2a.png';
import img5 from '../assets/images/2b.png';
import img6 from '../assets/images/2c.png';
import img7 from '../assets/images/2d.png';
import img8 from '../assets/images/2e.png';
import img9 from '../assets/images/2f.png';

function SecondCarousel() {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const songs = [
    { img: img4, title: 'Prólogo con Abuelo' },
    { img: img5, title: 'The Wanderer' },
    { img: img6, title: 'Michael Bublé & Carly Pearce' },
    { img: img7, title: 'Stephan Moccio: Zane Lowe Interview' },
    { img: img8, title: 'Chart Spotlight: Julia Michaels' },
    { img: img9, title: 'Karri & Travis Mills' },
  ];
  const sizeImage = () => {
    if (size >= 1400) return '280px';
    if (size >= 1200) return '240px';
    if (size >= 992) return '200px';
    return '180px';
  };
  return (
    <div className='d-flex gap-3 mt-3' style={{ overflowX: 'auto' }}>
      {songs.map((data, index) => (
        <div
          key={index}
          style={{
            width: sizeImage(),
            minWidth: sizeImage(),
            flexShrink: 0,
          }}
        >
          <div className='position-relative'>
            <img
              src={data.img}
              alt={data.title}
              className='rounded w-100'
              style={{
                height: sizeImage(),
                objectFit: 'cover',
              }}
            />
          </div>

          <p
            className='mb-1 mt-2'
            style={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              fontSize: '14px',
              fontWeight: '500',
            }}
          >
            {data.title}
          </p>
        </div>
      ))}
    </div>
  );
}

export default SecondCarousel;
