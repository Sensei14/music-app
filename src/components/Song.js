import React from "react";
import "./Song.css";

const Song = (props) => {
  const { previewUrl, trackName, artistName, artworkUrl100 } = props.data;
  return (
    <div className="song">
      <div className="song-info">
        <img src={artworkUrl100} alt="Song artwork" width="100px" />
        <div className="song-title">
          <h2>{trackName}</h2>
          <h3>{artistName}</h3>
        </div>
      </div>
      <audio controls>
        <source src={previewUrl} type="audio/ogg" />
      </audio>
    </div>
  );
};

export default Song;
