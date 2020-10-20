import React, { useState } from "react";
import SongList from "./SongList";
import Search from "./Search";
import LoadingSpinner from "./LoadingSpinner";

const MusicApp = () => {
  const [term, setTerm] = useState("");
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [firstSearch, setFirstSearch] = useState(true);

  const handleInputChange = (e) => {
    setTerm(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setFirstSearch(false);
    setIsLoading(true);
    const response = await fetch(
      `https://itunes.apple.com/search?term=${term}&media=music&limit=50`
    );
    const responseData = await response.json();

    setResult(responseData.results);
    setIsLoading(false);
  };

  if (!isLoading && result.length === 0 && !firstSearch) {
    return (
      <div className='music-app'>
        <Search
          handleInputChange={handleInputChange}
          handleSearch={handleSearch}
        />
        <h3 className='not-found'>
          No results found, try search for other music.
        </h3>
      </div>
    );
  }

  return (
    <div className='music-app'>
      <Search
        handleInputChange={handleInputChange}
        handleSearch={handleSearch}
      />
      {isLoading && <LoadingSpinner />}
      {result.length > 0 && <SongList songs={result} />}
    </div>
  );
};

export default MusicApp;
