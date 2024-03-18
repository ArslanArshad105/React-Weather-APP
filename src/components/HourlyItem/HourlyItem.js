import React from "react";
import "./HourlyItem.scss";

const HourlyItem = (props) => {
  const { tempUnit, dateTime, icon, temp } = props;

  const d_time = new Date(dateTime);
  const time = d_time.getHours();

  return (
    <div className="hourly-item">
      <label className="hour">{time + ":00"}</label>
      <img className="icon-small" alt="" src={icon} />
      <label className="temp">
        {tempUnit === "Fahrenheit" ? temp + "° F" : temp + "° C"}
      </label>
    </div>
  );
};

export default HourlyItem;
