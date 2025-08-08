function SingleSong({ allSongs }) {
  return (
    <div>
      <img
        src={allSongs.album.cover}
        alt=''
        className='rounded'
        style={{ width: '218px', height: '218px' }}
      />
      <p>
        <small>{allSongs.title}</small>
      </p>
      <p>
        <small>{allSongs.artist.name}</small>
      </p>
    </div>
  );
}

export default SingleSong;
