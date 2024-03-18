import React from "react";
import "./CurrentWeatherDetails.scss";

const CurrentWeatherDetails = (props) => {
  const { forecastData } = props;
  return (
    <div className="current-weather-details">
      <div className="current-weather-details-grid">
        <div className="current-weather-details-grid-item">
          <label>Rain:</label>
          <label>{"0.00"}%</label>
        </div>
        <div className="current-weather-details-grid-item">
          <label>Pressure:</label>
          <label>{forecastData.current.pressure_mb} hPa</label>
        </div>
        <div className="current-weather-details-grid-item">
          <label>Humidity:</label>
          <label>{forecastData.current.humidity}%</label>
        </div>
        <div className="current-weather-details-grid-item">
          <label>Visibility:</label>
          <label>{forecastData.current.vis_km} km</label>
        </div>
        <div className="current-weather-details-grid-item">
          <label>Wind speed:</label>
          <label>{forecastData.current.wind_kph} kph</label>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeatherDetails;
