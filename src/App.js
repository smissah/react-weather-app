import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaCloudSunRain } from "react-icons/fa";
const api = {
  key: "832ad672ded8584a1307da1ea0272d1c",
  base: "https://api.openweathermap.org/data/2.5/",
};

const App = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

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

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };

  // const getWeather = () => {
  //   const result = fetch(
  //     `${api.base}weather?q=${query}&units=metric&APPID=${api.key}`
  //   );
  //   const data = result.json();
  //   console.log(data);
  // };

  // getWeather();
  return (
    <div className="app ">
      <main>
        <div className="app__search">
          <AiOutlineSearch className="app__searchIcon" />
          <input
            onKeyPress={search}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            className="app__searchInput"
            placeholder="search..."
          />
        </div>
        <div className="output">
          <div className="output__location">{query}</div>
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
