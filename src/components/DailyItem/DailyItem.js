import React from "react";
import "./DailyItem.scss";

const DailyItem = (props) => {
  const { tempUnit, dayData } = props;

  const getDayName = (dateStr, locale) => {
    let date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: "long" });
  };

  const tempUnitConverter = (val) => {
    if (val === "Fahrenheit") {
      return (
        dayData.day.mintemp_f.toFixed(0) +
        "° F / " +
        dayData.day.maxtemp_f.toFixed(0) +
        "° F"
      );
    } else {
      return (
        dayData.day.mintemp_c.toFixed(0) +
        "° C / " +
        dayData.day.maxtemp_c.toFixed(0) +
        "° C"
      );
    }
  };

  return (
    <div className="daily-item">
      <img src={dayData.day.condition.icon} className="icon-small" alt="" />
      <label className="day">{getDayName(dayData.date)}</label>
      <label className="description">{dayData.day.condition.text}</label>
      <label className="min-max">{tempUnitConverter(tempUnit)}</label>
    </div>
  );
};

export default DailyItem;
