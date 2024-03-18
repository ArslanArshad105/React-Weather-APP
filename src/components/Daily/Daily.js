import React, { useState } from "react";
import "./Daily.scss";
import DailyItem from "../DailyItem/DailyItem";
import DailyItemDetails from "../DailyItemDetails/DailyItemDetails";

const Daily = (props) => {
  const { tempUnit, dailyForecastData } = props;
  const [activeIndex, setActiveIndex] = useState(null);

  const onClickHandler = (dt) => {
    if (dt === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(dt);
    }
  };

  return (
    <div className="daily">
      <label className="title">Daily</label>
      <div className="daily-items-container">
        {dailyForecastData.forecast.forecastday.map((item) => {
          return (
            <div
              key={item.date_epoch}
              onClick={() => onClickHandler(item.date_epoch)}
            >
              <DailyItem dayData={item} tempUnit={tempUnit} />
              <div
                className={
                  activeIndex === item.date_epoch
                    ? "daily-item-header active"
                    : "daily-item-header"
                }
              >
                <DailyItemDetails dayData={item} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Daily;
