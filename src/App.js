import React from "react";
import "./App.css";
import MusicApp from "./components/MusicApp";

function App() {
  return (
    <div className='App'>
      <MusicApp />
      <div className='footer'>
        <ul>
          Authors:
          <li>Pacocha Karol</li>
          <li>Ochab Daniel</li>
          <li>Skulski Mateusz</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
