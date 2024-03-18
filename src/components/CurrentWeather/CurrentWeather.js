import React from "react";
import "./CurrentWeather.scss";

const CurrentWeather = (props) => {
  const { tempUnit, forecastData } = props;

  const activeTempature = (val) => {
    if (val === "Fahrenheit") {
      return forecastData.current.temp_f.toFixed(0) + "° F";
    } else {
      return forecastData.current.temp_c.toFixed(0) + "° C";
    }
  };

  return (
    <div className="current-weather">
      <div className="image">
        <img
          src={forecastData.current.condition.icon}
          className="icon"
          alt=""
        />
      </div>
      <div className="details">
        <label className="temp">{activeTempature(tempUnit)}</label>
        <label className="feelslike">
          Feels like:
          <span>{activeTempature(tempUnit)}</span>
        </label>
        <label className="description">
          {forecastData.current.condition.text}
        </label>
      </div>
    </div>
  );
};

export default CurrentWeather;
