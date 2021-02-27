import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaCloudSunRain } from "react-icons/fa";
const App = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const api = {
    key: "aa99db8241a48403ffc00d0820738cc6",
    base: "https://api.openweathermap.org/data/2.5",
  };

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return ` ${day} ${date} ${month} ${year}`;
  };
  return (
    <div className="app ">
      <main>
        <div className="app__search">
          <AiOutlineSearch className="app__searchIcon" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            className="app__searchInput"
            placeholder="search..."
          />
        </div>
        <div className="output">
          <div className="output__location">London, UK</div>
          <div className="output__date">{dateBuilder(new Date())}</div>
        </div>
        <div className="weather">
          <div className="weather__temp">15°c</div>
          <div className="weather__weather">
            <div className="weather__text">Sunny</div> ||{" "}
            <FaCloudSunRain className="weather__icon" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
