import React, { useState } from "react";
import { MdDehaze } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import {
  FaCloudSunRain,
  FaCloud,
  FaCloudShowersHeavy,
  FaSun,
} from "react-icons/fa";
const api = {
  key: `${process.env.REACT_APP_WEATHER_KEY}`,
  base: "https://api.openweathermap.org/data/2.5/",
};

console.log(process.env);

const App = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState(false);

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
        .then((res) => res.json()) //.then is the suceess case. res is not the data - needs to be converted. this json returns a promise
        .then((result) => {
          // this is the actual data
          setWeather(result);
          setQuery("");
          console.log(result);
          return result;
        })
        .catch((err) => console.error(err));
    }
  };

  const weatherIconSwtich = () => {
    if (weather.weather[0].main === "Clear") {
      return <FaSun className="weather__icon" />;
    }

    if (weather.weather[0].main === "Clouds") {
      return <FaCloud className="weather__icon" />;
    }
    if (weather.weather[0].main === "Rain") {
      return <FaCloudShowersHeavy className="weather__icon" />;
    }

    if (weather.weather[0].main === "Haze") {
      return <MdDehaze className="weather__icon" />;
    }
    if (weather.weather[0].main === "Mist") {
      return <MdDehaze className="~~" />;
    }

    return "--";
  };
  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? weather.main.temp > 16
            ? "app warm"
            : "app"
          : "app"
      }
    >
      <main>
        <div className="app__search">
          <AiOutlineSearch className="app__searchIcon" />
          <input
            onKeyPress={search}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            className="app__searchInput"
            placeholder="search... e.g London or Ghana"
          />
        </div>
        {weather && (
          //section only needed for conditional render
          <section>
            <div className="output">
              <div className="output__location">
                {weather.name}, {weather.sys?.country || ""}
              </div>
              <div className="output__date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather">
              <div className="weather__temp">
                {Math.round(weather.main?.temp)}°c
              </div>
              <div className="weather__weather">
                <div className="weather__text">{weather.weather[0].main}</div>{" "}
                || {weatherIconSwtich()}
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default App;
