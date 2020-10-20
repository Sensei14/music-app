import React, { useEffect, useState } from "react";
import Song from "./Song";
import "./SongList.css";

const SongList = (props) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [list, setList] = useState();

  const songs = props.songs.map((song) => (
    <Song key={song.trackId} data={song} />
  ));

  useEffect(() => {
    let newList = [];
    newList = songs.slice(currentPage * 9, currentPage * 9 + 9);
    setList(newList);
  }, [currentPage, props.songs]);

  const nextPage = () => {
    if ((currentPage + 1) * 9 >= songs.length) return;

    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage - 1 < 0) return;

    setCurrentPage(currentPage - 1);
  };
  return (
    <>
      <div className='song-list'>{list}</div>
      <div className='pagination'>
        <button onClick={prevPage}>Prev</button>
        <button onClick={nextPage}>Next</button>
      </div>
    </>
  );
};

export default SongList;
