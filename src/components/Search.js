import React from "react";
import "./Search.css";

const Search = (props) => {
  return (
    <div className='search-bar'>
      <form>
        <input
          type='text'
          onChange={props.handleInputChange}
          placeholder='Search by title, author or lyrics...'
        />
        <button onClick={props.handleSearch}>Search</button>
      </form>
    </div>
  );
};

export default Search;
