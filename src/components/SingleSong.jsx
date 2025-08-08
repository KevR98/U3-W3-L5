import { useState, useEffect } from 'react';

function SingleSong({ allSongs }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Responsive: dimensioni dinamiche
  const getCardWidth = () => {
    if (windowWidth >= 1400) return '280px'; // XL screens - 5 cards
    if (windowWidth >= 1200) return '240px'; // LG screens - 4 cards
    if (windowWidth >= 992) return '200px'; // MD screens - 3 cards
    return '180px'; // SM screens - 2 cards
  };

  return (
    <div
      style={{
        width: getCardWidth(),
        minWidth: getCardWidth(),
        flexShrink: 0,
      }}
    >
      <div className='position-relative'>
        <img
          src={allSongs.album.cover}
          alt={allSongs.title}
          className='rounded w-100'
          style={{
            height: getCardWidth(),
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
        {allSongs.title}
      </p>

      <p
        className='mb-0'
        style={{
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          fontSize: '12px',
        }}
      >
        <span className='text-secondary'>{allSongs.artist.name}</span>
      </p>
    </div>
  );
}

export default SingleSong;
