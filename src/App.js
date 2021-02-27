import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
const App = () => {
  const api = {
    key: "aa99db8241a48403ffc00d0820738cc6",
    base: "https://api.openweathermap.org/data/2.5",
  };
  return (
    <div className="app warm">
      <main>
        <div className="app__search">
          <AiOutlineSearch className="app__searchIcon" />
          <input
            type="text"
            className="app__searchInput"
            placeholder="search..."
          />
        </div>
      </main>
    </div>
  );
};

export default App;
