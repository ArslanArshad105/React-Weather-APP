import React, { useEffect, useState } from "react";
import "./Container.scss";
import Header from "../Header/Header";
import Hourly from "../Hourly/Hourly";
import axios from "axios";
import { Triangle } from "react-loader-spinner";
import Daily from "../Daily/Daily";
import CurrentWeather from "../CurrentWeather/CurrentWeather";
import CurrentWeatherDetails from "../CurrentWeatherDetails/CurrentWeatherDetails";
import TopBar from "../TopBar/TopBar";

function Container(props) {
  const { changeTheme, currentTheme } = props;
  const [dailyForecastData, setDailyForecastData] = useState({});
  const [location, setLocation] = useState("Lahore");
  const [tempUnit, setTempUnit] = useState("Celsius");

  useEffect(() => {
    dailyForecastApiData(location);
  }, [location]);

  // Define an async function to fetch data from the API
  const dailyForecastApiData = (val) => {
    const city = val;
    const days = 7;
    const aqi = "yes";
    const alerts = "no";

    const apiKey = "6a3ecb774ec24e48b7a181650242002";
    axios
      .get(
        `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&days=${days}&q=${city}&aqi=${aqi}&alerts=${alerts}`,
        null
      )
      .then((response) => {
        setDailyForecastData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching Weather Api Data:", error);
      });
  };

  return (
    <>
      <TopBar />

      {Object.keys(dailyForecastData).length > 0 ? (
        <div className="container">
          <div className="grid-container">
            <>
              <Header
                forecastData={dailyForecastData}
                tempUnitConverter={setTempUnit}
                setLocation={setLocation}
                tempUnit={tempUnit}
                changeTheme={changeTheme}
                currentTheme={currentTheme}
              />
              <CurrentWeather
                forecastData={dailyForecastData}
                tempUnit={tempUnit}
              />
              <CurrentWeatherDetails forecastData={dailyForecastData} />
              <Hourly forecastData={dailyForecastData} tempUnit={tempUnit} />
              <Daily
                dailyForecastData={dailyForecastData}
                tempUnit={tempUnit}
              />
            </>
          </div>
        </div>
      ) : (
        <div>
          <Triangle
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClass="tri-loader"
          />
        </div>
      )}
    </>
  );
}

export default Container;
