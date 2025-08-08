import { useState, useEffect } from 'react';
import SingleSong from './SingleSong';

const URL =
  'https://striveschool-api.herokuapp.com/api/deezer/search?q=kendricklamar';

function Songs() {
  const [songs, setSongs] = useState([]);

  const getSongs = () => {
    fetch(URL)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Errore nel caricamento');
        }
      })

      .then((data) => {
        console.log(data);
        setSongs(data.data);
      })

      .catch((err) => {
        console.log('Errore nel caricamento', err);
      });
  };

  useEffect(() => {
    getSongs();
  }, []);

  return (
    <>
      <h5 className='mt-5'>
        Nuove uscite <i className='bi bi-chevron-right'></i>
      </h5>
      <div className='d-flex gap-3 mt-3' style={{ overflowX: 'auto' }}>
        {songs.slice(0, 5).map((song) => (
          <SingleSong key={song.id} allSongs={song} />
        ))}
      </div>
      <div className='d-flex gap-3 mt-3' style={{ overflowX: 'auto' }}>
        {songs.slice(5, 10).map((song) => (
          <SingleSong key={song.id} allSongs={song} />
        ))}
      </div>
    </>
  );
}

export default Songs;
