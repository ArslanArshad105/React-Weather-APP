import React from "react";
import "./DailyItemDetails.scss";

const DailyItemDetails = (props) => {
  const { dayData } = props;

  return (
    <div className="daily-item-details">
      <div className="daily-details-grid">
        <div className="daily-details-grid-item">
          <label>Rain:</label>
          <label>{dayData.day.daily_chance_of_rain}%</label>
        </div>
        <div className="daily-details-grid-item">
          <label>Visibility:</label>
          <label>{dayData.day.avgvis_km} km</label>
        </div>
        <div className="daily-details-grid-item">
          <label>Humidity:</label>
          <label>{dayData.day.avghumidity}%</label>
        </div>
        <div className="daily-details-grid-item">
          <label>Clouds:</label>
          <label>{dayData.day.condition.text}</label>
        </div>
        <div className="daily-details-grid-item">
          <label>Wind speed:</label>
          <label> {dayData.day.maxwind_kph} kph</label>
        </div>
        <div className="daily-details-grid-item">
          <label>UV Index:</label>
          <label>{dayData.day.uv}</label>
        </div>
        <div className="daily-details-grid-item">
          <label>Sunrise:</label>
          <label>{dayData.astro.sunrise}</label>
        </div>
        <div className="daily-details-grid-item">
          <label>Sunset:</label>
          <label>{dayData.astro.sunset}</label>
        </div>
      </div>
    </div>
  );
};

export default DailyItemDetails;
