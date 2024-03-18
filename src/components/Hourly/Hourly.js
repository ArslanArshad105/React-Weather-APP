import React, { useEffect, useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import "./Hourly.scss";
import HourlyItem from "../HourlyItem/HourlyItem";

const Hourly = (props) => {
  const { tempUnit, forecastData } = props;
  const [activeIndex, setActiveIndex] = useState(
    forecastData.forecast.forecastday[0].hour[0].time_epoch
  );

  useEffect(() => {
    setActiveIndex(forecastData.forecast.forecastday[0].hour[0].time_epoch);
  }, [forecastData]);

  const onClickHandler = (activeHour) => {
    setActiveIndex(activeHour);
  };

  return (
    <div className="hourly">
      <label className="title">Hourly</label>

      <div className="hourly-items-container">
        <ScrollContainer className="scroll-container">
          {forecastData.forecast.forecastday[0].hour.map((item) => {
            return (
              <div
                key={item.time_epoch}
                className={
                  activeIndex === item.time_epoch
                    ? "hourly-item-container active"
                    : "hourly-item-container"
                }
                onClick={() => onClickHandler(item.time_epoch)}
              >
                <HourlyItem
                  dateTime={item.time}
                  icon={item.condition.icon}
                  temp={
                    tempUnit === "Fahrenheit"
                      ? item.temp_f.toFixed(0)
                      : item.temp_c.toFixed(0)
                  }
                  tempUnit={tempUnit}
                />
              </div>
            );
          })}
        </ScrollContainer>
      </div>
    </div>
  );
};

export default Hourly;
